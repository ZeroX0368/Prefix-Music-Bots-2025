/**
 * TRINOX STUDIO - Bre4d777
 * give credits or ill touch you in your dreams
 * LEAKED BY CODEX
 */
export const config = {
  // Discord Bot Configuration
  token: '',
  prefix: '.',
  ownerIds: [''], // Replace with your Discord user ID

  // Lavalink Configuration - V4 nodes only (non-SSL)
  nodes: [
    {
      name: 'Lavalink Node 1',
      url: 'lavalinkv4.serenetia.com:80',
      auth: 'https://dsc.gg/ajidevserver',
      secure:false
    }
  ],

  // Spotify Integration
  spotify: {
    clientId: '321c535c35b4423a945c9a6df5c5be06',
    clientSecret: '1bc3fee6cfd743be843ef29047bfe46d'
  },

  // Database Configuration
  database: {
    guild: './database/guild.db',
    user: './database/user.db',
    player: './database/player.db',
    spotify: './database/spotify.db',
    premium: './database/premium.db'
  },

  // Bot Status Configuration
  status: {
    text: 'Leaked by CodeX',
    status: 'dnd'
  },

  // Console Colors
  colors: {
    info: '#3498db',
    success: '#2ecc71',
    warning: '#f39c12',
    error: '#e74c3c'
  },

  // Easter egg - Hidden watermark
  watermark: 'coded by bre4d'
};