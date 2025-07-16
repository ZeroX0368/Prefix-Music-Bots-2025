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
  playing: '<:Play:1386987269386403933>',
  paused: '<:pause:1386987259106033684>',
  stopped: '<:Stop:1386987307869011968>',
  skipped: '<:skip:1386987304983330946>',
  previous: '<:Previous:1386987282656919562>',
  loop: '<:Loop_none:1386987246095175810>',
  loopOne: '<:Loop_track:1386987251371868230>',
  shuffle: '<:Shuffle:1386987300017278976>',
  queue: '<:queue:1386987287807791196>',
  volume: '<:Vol:1386987310670807111>',
  volumeUp: '🔊',
  volumeDown: '🔉',
  volumeMute: '🔇',
  favorite: '<:discotoolsxyzicon77:1386987170824323073>',
  unfavorite: '<:discotoolsxyzicon78:1386987173936627784>',
  
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
  loading: '<a:loading_red:1386987243427594413>',
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
