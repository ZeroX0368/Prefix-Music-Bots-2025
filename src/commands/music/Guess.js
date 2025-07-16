import { Command } from '../../structures/Command.js';
import fetch from 'node-fetch';

class GuessMusicCommand extends Command {
  constructor() {
    super({
      name: 'guessmusic',
      description: 'Guess the Hindi song by listening to it!',
      category: 'games',
      aliases: ['gm', 'guesssong'],
      voiceRequired: true
    });
  }

  async execute({ message, args, client, musicManager }) {
    const { member, channel, guild } = message;
    const voiceChannel = member.voice.channel;

    if (!voiceChannel)
      return message.reply('❌ You must be in a voice channel to use this command.');

    // 1. Fetch Hindi song
    const res = await fetch(`https://saavn.dev/api/search/songs?query=hindi`);
    const data = await res.json();
    const songs = data?.data?.results || [];

    if (!songs.length) return message.reply('❌ No Hindi songs found.');

    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    const query = randomSong.url; // ✅ direct JioSaavn link
    const answer = randomSong.name;

    // 2. Get Kazagumo player
    const player = await musicManager.createPlayer({
      guildId: guild.id,
      voiceChannel,
      textChannel: channel
    });

    const result = await musicManager.search(query, { requester: message.author });
    if (!result.tracks.length)
      return message.reply('❌ Could not play the song.');

    const track = result.tracks[0]; // now from JioSaavn directly
    player.data = player.data || {};
    player.data.guessing = true;
    player.queue.clear();
    player.queue.add(track);
    if (!player.playing) await player.play();

    await message.reply('🎧 A Hindi song is now playing... Guess the name in **30 seconds**!');

    // Normalize text
    function normalize(text) {
      return text.toLowerCase().replace(/[^a-z\s]/gi, '').replace(/\s+/g, ' ').trim();
    }

    function isCloseMatch(guess, actual) {
      const normGuess = normalize(guess);
      const normActual = normalize(actual);
      return normActual.includes(normGuess) || normGuess.includes(normActual);
    }

    // 3. Setup multiplayer guess collector
    const collector = channel.createMessageCollector({ time: 30000 });
    let guessedCorrectly = false;

    collector.on('collect', m => {
      if (isCloseMatch(m.content, answer)) {
        guessedCorrectly = true;
        m.reply(`✅ **${m.author.username}** guessed it right!\n🎵 The song was **${randomSong.name}** by **${randomSong.primaryArtists}**`);
        collector.stop();
      }
    });

    collector.on('end', () => {
      if (!guessedCorrectly) {
        channel.send(`❌ Time's up! The song was **${randomSong.name}** by **${randomSong.primaryArtists}**`);
      }

      player.data.guessing = false;
      player.destroy();
    });
  }
}

export default new GuessMusicCommand();