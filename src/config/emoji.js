/**
 * Emoji configuration for the bot
 * These emojis can be used throughout the bot to maintain consistent styling
 */
export const emoji = {
  // Status Emojis
  success: '<:discotoolsxyzicon69:1395085378440138844>',
  error: '<:discotoolsxyzicon70:1395085332461912095>',
  warning: '<:discotoolsxyzicon87:1395084772224667648>',
  info: '<:discotoolsxyzicon87:1395084772224667648>',
  
  // Music Player Emojis
  playing: '<:Play:1395085986123485225>',
  paused: '<:pause:1395085942594998372>',
  stopped: '<:Stop:1395085899817160786>',
  skipped: '<:skip:1395086199458107453>',
  previous: '<:Previous:1395086153392324689>',
  loop: '<:Loop_none:1395086112879280329>',
  loopOne: '<:Loop_track:1395086567848022287>',
  shuffle: '<:Shuffle:1395086524625850408>',
  queue: '<:queue:1395086479709048852>',
  volume: '<:Vol:1395086418065358868>',
  volumeUp: '🔊',
  volumeDown: '🔉',
  volumeMute: '🔇',
  favorite: '<:discotoolsxyzicon77:1395087769109266543>',
  unfavorite: '<:discotoolsxyzicon78:1395087843239657523>',
  
  // Music Content Emojis
  music: '🎵',
  musicNotes: '🎶',
  disc: '💿',
  cd: '💿',
  vinyl: '🎧',
  playlist: '📂',
  album: '💽',
  radio: '📻',
  liveMusic: '🎤',
  dj: '🎧',
  studio: '🎚️',
  microphone: '🎙️',
  guitar: '🎸',
  piano: '🎹',
  drum: '🥁',
  saxophone: '🎷',
  trumpet: '🎺',
  violin: '🎻',
  headphones: '🎧',
  
  // Music Actions
  play: '▶️',
  fastForward: '⏩',
  rewind: '⏪',
  next: '⏭️',
  back: '⏮️',
  repeat: '🔁',
  repeatOne: '🔂',
  nowPlaying: '🎧',
  addToQueue: '➕',
  removeFromQueue: '➖',
  clearQueue: '🧹',
  filter: '🔍',
  bassBoost: '💥',
  karaoke: '🎤',
  nightcore: '🌙',
  eightD: '🔄',
  vaporwave: '🌊',
  
  // Level/Rank Emojis
  level: '🌟',
  experience: '✨',
  rank: '🏆',
  leaderboard: '📊',
  
  // Achievement Emojis
  achievement: '🏅',
  commandAchievement: '💬',
  musicAchievement: '🎵',
  specialAchievement: '🎖️',
  
  // Profile Emojis
  profile: '👤',
  bio: '📝',
  calendar: '📅',
  
  // System Emojis
  loading: '<a:loading_red:1395088104850853918>',
  settings: '⚙️',
  time: '⏰',
  
  // Badge Emojis
  developer: '👨‍💻',
  owner: '👑',
  admin: '🛡️',
  moderator: '🔨',
  vip: '💎',
  supporter: '❤️',
  
  // Progress bar elements
  progressFilled: '█',
  progressEmpty: '░',
  progressStart: '⏮️',
  progressEnd: '⏭️',
  progressCurrent: '🔘',
  
  // Music Services & Platforms
  spotify: '🟢',
  youtube: '🔴',
  soundcloud: '🟠',
  appleMusic: '🍎',
  deezer: '🎵',
  
  // Music Mood & Genres
  partyMusic: '🎉',
  chill: '😌',
  sad: '😢',
  energetic: '⚡',
  romantic: '💖',
  pop: '🎤',
  rock: '🤘',
  electronic: '🎛️',
  classical: '🎻',
  hiphop: '🎧',
  jazz: '🎷',
  
  // Misc Music Emojis
  heart: '❤️',
  star: '⭐',
  fire: '🔥',
  sparkles: '✨',
  trophy: '🏆',
  medal: '🎖️',
  chart: '📈',
  note: '🎵',
  notes: '🎶',
  microphone: '🎤',
  headphones: '🎧',
  speaker: '🔈',
  loudSpeaker: '📢',
  megaphone: '📣',
  clock: '🕒',
  hourglass: '⌛',
  pin: '📌',
  bookmark: '🔖',
  label: '🏷️',
  speechBalloon: '💬',
  envelope: '✉️',
  rocket: '🚀',
  star2: '🌠',
  dizzy: '💫',
  partyPopper: '🎉',
  confettiBall: '🎊',
  tada: '🎉',
  gift: '🎁',
  crown: '👑',
  gem: '💎',
  moneybag: '💰',
  magicWand: '🪄',
  lock: '🔒',
  unlock: '🔓',
  key: '🔑',
  hammer: '🔨',
  wrench: '🔧',
  gear: '⚙️',
  notepad: '📝',
  memo: '📝',
  book: '📖',
  books: '📚',
  newspaper: '📰',
  
  // DJ & Audio Effects
  mixer: '🎚️',
  equalizer: '🎛️',
  wave: '〰️',
  audioWave: '📶',
  vibration: '📳',
  muted: '🔇',
  loud: '🔊',
  
  // Music States
  offline: '⚫',
  online: '🟢',
  streaming: '🔴',
  buffering: '🔄',
  connecting: '🔌',
  
  // Get emoji by name with a fallback
  get(name, fallback = '') {
    return this[name] || fallback;
  }
};

// Export the emojis object as default
export default emoji;
