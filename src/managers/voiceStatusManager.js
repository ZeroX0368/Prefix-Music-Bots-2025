/**
 * TRINOX STUDIO - Bre4d777
 * give credits or ill touch you in your dreams
 * LEAKED BY CODEX
 */
import axios from 'axios';

export default class  VoiceStatusManager {
  constructor(client) {
    this.client = client;
  }

  async set(channelId, status) {
    if (!channelId || !status) return;

    try {
      await axios.put(
        `https://discord.com/api/v10/channels/${channelId}/voice-status`,
        { status },
        { headers: { Authorization: `Bot ${this.client.token}` } }
      );
    } catch (error) {
      const errMsg = error.response?.data?.message || error.message;
      console.error(`[VoiceStatusManager] Failed to update status: ${errMsg}`);
    }
  }

  async clear(channelId) {
    await this.set(channelId, '<a:a_anime:1386986663015878746> Use play and start playing music with me');
  }

  async updateForStart(player) {
    const current = player.queue.current || player._currentTrack;
    if (player.paused) {
      return this.set(player.voiceId, `<:Playing_1378707448113659995:1386987272225947658> Paused **${current.title}**`);
    }
    if (player.radio) {
      return this.set(player.voiceId, `<a:Playing:1378707448113659995> Playing **${player.radioName}** radio`);
    }
      if (player.data.guessing) {

      return this.set(player.voiceId, `<a:Playing:1378707448113659995> Guess The Song Game!`);
          }
    if (current?.title) {
      return this.set(player.voiceId, `<a:Playing:1378707448113659995> Playing **${current.title}** by ${current.author}`);
    }
  }

  async updateForEnd(player) {
    return this.clear(player.voiceId);
  }

  async updateForEmpty(player, is247, autoplay) {
    let status = '<:discotoolsxyzicon87:1386987206257676368> Use play command to start playing'
    if (autoplay) {
      status = '<a:byte_loading:1386986717533175869> Fetching related songs, please wait';
    } else {
      status = is247 ? '<a:EastAnime115:1386987227069808753> Ready to vibe with **Avon**? <a:EastAnime116:1386987230710730853>' : '<:discotoolsxyzicon87:1386987206257676368> Use play command to start playing';
      return this.set(player.voiceId, status);
    }
  }
}
