/**
 * TRINOX STUDIO - Bre4d777
 * give credits or ill touch you in your dreams
 * LEAKED BY CODEX
 */
import { Command } from '../../structures/Command.js';
import { embedManager } from '../../managers/EmbedManager.js';
import { db } from '../../database/DatabaseManager.js';
import { spotifyManager } from '../../managers/SpotifyManager.js';

class SpotifyLoginCommand extends Command {
  constructor() {
    super({
      name: 'spotify-login',
      description: 'Link your Spotify profile to access your public playlists',
      usage: 'spotify login <spotify profile URL>',
      aliases: ['spotify link', 'spotify connect',  'sp-link', 'sp-login'],
      category: 'spotify',
      cooldown: 5,
      examples: [
        'spotify login https://open.spotify.com/user/your_spotify_username',
        'spotify login https://open.spotify.com/user/123456789'
      ]
    });
  }

  async execute({ message, args }) {
    const { author } = message;

    // Check if the user provided a profile URL
    if (!args.length) {
      const embed = embedManager.error(
        '⚠️ Missing Profile URL',
        `Please provide your Spotify profile URL.\n\nUsage: \`${this.usage}\``
      );
      return message.reply({ embeds: [embed] });
    }

    const profileUrl = args[0];

    // Validate the Spotify URL
    const parsed = spotifyManager.parseSpotifyUrl(profileUrl);
    if (!parsed || parsed.type !== 'user') {
      const embed = embedManager.error(
        '⚠️ Invalid Spotify URL',
        'Please provide a valid Spotify profile URL.'
      );
      return message.reply({ embeds: [embed] });
    }

    // Send loading message
    const loadingEmbed = embedManager.create({
      color: embedManager.colors.default,
      title: '<a:byte_loading:1386986717533175869> Verifying Spotify Profile...',
      description: 'Please wait while we verify your Spotify profile.',
      footer: { text: 'This may take a moment.' },
      timestamp: true
    });

    const loadingMsg = await message.reply({ embeds: [loadingEmbed] });

    try {
      // Fetch user data from Spotify
      const userData = await spotifyManager.fetchUserData(profileUrl);

      if (!userData) {
        const errorEmbed = embedManager.error(
          '❌️ Profile Not Found',
          'Could not find the Spotify profile. Please check the URL and try again.'
        );
        return loadingMsg.edit({ embeds: [errorEmbed] });
      }

      // Link the profile in the database
      db.spotify.linkProfile(author.id, profileUrl, userData.displayName || null);

      // Fetch playlists to display
      const playlists = await spotifyManager.fetchUserPlaylists(profileUrl);

      // Create success embed
      const successEmbed = embedManager.success(
        '<:byte_spotify:1386986732557434921> Spotify Profile Linked',
        `Successfully linked to Spotify profile: **${userData.displayName || parsed.id}**`
      );

      // Add playlist information if available
      if (playlists && playlists.length > 0) {
        successEmbed.addFields([
          {
            name: '<:byte_spotify:1386986732557434921> Public Playlists Found',
            value: `${playlists.length} playlist${playlists.length > 1 ? 's' : ''} found. Use \`spotify playlists\` to view them.`
          }
        ]);
      }

      // Add a thumbnail if available
      if (userData.images && userData.images.length > 0) {
        successEmbed.setThumbnail(userData.images[0].url);
      }

      // Update loading message
      return loadingMsg.edit({ embeds: [successEmbed] });
    } catch (error) {
      console.error('Error linking Spotify profile:', error);

      const errorEmbed = embedManager.error(
        '❌️ Error',
        'An error occurred while linking your Spotify profile. Please try again later.'
      );
      return loadingMsg.edit({ embeds: [errorEmbed] });
    }
  }
}

export default new SpotifyLoginCommand();
