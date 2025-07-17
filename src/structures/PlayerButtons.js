/**
 * TRINOX STUDIO - Bre4d777
 * give credits or ill touch you in your dreams
 * LEAKED BY CODEX
 */
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export class PlayerButtons {
  constructor() {
    this.ids = {
      play: 'player_play',
      pause: 'player_pause',
      stop: 'player_stop',
      skip: 'player_skip',
      previous: 'player_previous',
      loop: 'player_loop',
      shuffle: 'player_shuffle',
      queue: 'player_queue',
      volume: 'player_volume',
      like: 'player_like',
      // Removed: download: 'player_download'
      lyric: 'player_lyric' // Added lyric button ID
    };
    
    this.emojis = {
      play: '<:Play:1395085986123485225>',
      pause: '<:pause:1395085942594998372>',
      stop: '<:Stop:1395085899817160786>',
      skip: '<:skip:1395086199458107453>',
      previous: '<:Previous:1395086153392324689>',
      loopNone: '<:Loop_none:1395086112879280329>',
      loopQueue: '<:Loop_queue:1395250095208927395>',
      loopTrack: '<:Loop_track:1395086567848022287>',
      queue: '<:queue:1395086479709048852>',
      like: '<:Like:1395250543945060444>',
      shuffle: '<:Shuffle:1395086524625850408>',
      volume: '<:Vol:1395086418065358868>',
      // Removed: download: '<:Down:1386987223987261553>'
      lyric: '📜' // Added lyric emoji (using a common emoji, you can replace with custom)
    };
  }

  /**
   * Creates the primary player control buttons (previous, play/pause, stop, skip, loop).
   * @param {object} playerState - Current state of the player.
   * @returns {ActionRowBuilder}
   */
  createPlayerControls(playerState = {}) {
    const { paused = false, loop = '' } = playerState;

    const previousButton = new ButtonBuilder()
      .setCustomId(this.ids.previous)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji(this.emojis.previous);

    const playPauseButton = new ButtonBuilder()
      .setCustomId(paused ? this.ids.play : this.ids.pause)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji(paused ? this.emojis.play : this.emojis.pause);

    const stopButton = new ButtonBuilder()
      .setCustomId(this.ids.stop)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji(this.emojis.stop);

    const skipButton = new ButtonBuilder()
      .setCustomId(this.ids.skip)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji(this.emojis.skip);

    const loopButton = new ButtonBuilder()
      .setCustomId(this.ids.loop)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji(this.getLoopEmoji(loop))
      .setLabel(this.getLoopLabel(loop));
      
    return new ActionRowBuilder().addComponents(
      previousButton,
      playPauseButton,
      stopButton,
      skipButton,
      loopButton
    );
  }

  /**
   * Creates the secondary player control buttons (queue, like, shuffle, volume, lyric).
   * @param {object} playerState - Current state of the player.
   * @returns {ActionRowBuilder}
   */
  createSecondaryControls(playerState = {}) {
    const queueButton = new ButtonBuilder()
      .setCustomId(this.ids.queue)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji(this.emojis.queue);

    const likeButton = new ButtonBuilder()
      .setCustomId(this.ids.like)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji(this.emojis.like);

    const shuffleButton = new ButtonBuilder()
      .setCustomId(this.ids.shuffle)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji(this.emojis.shuffle);

    const volumeButton = new ButtonBuilder()
      .setCustomId(this.ids.volume)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji(this.emojis.volume);

    // Replaced download button with lyric button
    const lyricButton = new ButtonBuilder()
      .setCustomId(this.ids.lyric)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji(this.emojis.lyric);

    return new ActionRowBuilder().addComponents(
      queueButton,
      likeButton,
      shuffleButton,
      volumeButton,
      lyricButton // Changed from downloadButton
    );
  }

  /**
   * Creates an empty, disabled button for spacing/placeholding.
   * @returns {ButtonBuilder}
   */
  createEmptyButton() {
    return new ButtonBuilder()
      .setCustomId('empty_button')
      .setLabel('\u200B') 
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(true);
  }

  /**
   * Gets the label for the loop button based on the loop state.
   * @param {string} loopState - The current loop state ('none', 'track', 'queue').
   * @returns {string}
   */
  getLoopLabel(loopState) {
    switch (loopState) {
      case 'track':
        return '‎ ';
      case 'queue':
        return '‎ ';
      default:
        return '‎ ';
    }
  }

  /**
   * Gets the emoji for the loop button based on the loop state.
   * @param {string} loopState - The current loop state ('none', 'track', 'queue').
   * @returns {string}
   */
  getLoopEmoji(loopState) {
    switch (loopState) {
      case 'track':
        return this.emojis.loopTrack;
      case 'queue':
        return this.emojis.loopQueue;
      default:
        return this.emojis.loopNone;
    }
  }
}

export const playerButtons = new PlayerButtons();
