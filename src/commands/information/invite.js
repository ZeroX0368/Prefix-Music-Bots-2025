/**
 * TRINOX STUDIO - Bre4d777
 * give credits or ill touch you in your dreams
 * LEAKED BY CODEX
 */
import { Command } from '../../structures/Command.js';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { embedManager } from '../../managers/EmbedManager.js';
import { logger } from '../../utils/logger.js';

/**

 * Ping command to check bot latency

 */

class InviteCommand extends Command {
  constructor() {
    super({
      name: 'invite',
      description: 'Want Runebot in your server? Use this command to add me!',
      usage: 'invite',
      aliases: ['inv', 'add'],
      category: 'information',
      cooldown: 1
    });
  }

  /**
   * Execute the ping command
   * @param {object} options - Command options
   * @returns {Promise<void>}
   */

  async execute({ message, client }) {
   try {
       const inviteButton = new ButtonBuilder()

        .setLabel('Admin Perms')     .setURL('https://discord.com/oauth2/authorize?client_id=1395125216442847332&permissions=8&integration_type=0&scope=bot')
        .setStyle(ButtonStyle.Link);
       

       const reqinvite = new ButtonBuilder()

        .setLabel('Required Perms')     .setURL('https://discord.com/oauth2/authorize?client_id=1395125216442847332&permissions=1162048502615121&integration_type=0&scope=bot')

        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder().addComponents(inviteButton, reqinvite);
   
      await message.reply({ content: `[Invite Runebot](https://discord.com/oauth2/authorize?client_id=1395125216442847332&permissions=1162048502615121&integration_type=0&scope=bot)`, components: [row] });
       } catch (error) {
      logger.error('InviteCommand', 'Error executing invite command', error);
     }      
   }
 }
 
export default new InviteCommand();
