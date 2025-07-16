import { Command } from '../../structures/Command.js';
import { embedManager } from '../../managers/EmbedManager.js';
import { logger } from '../../utils/logger.js';
import {
  ContainerBuilder,
  TextDisplayBuilder,
  SeparatorBuilder,
  ButtonBuilder,
  MessageFlags,
  SeparatorSpacingSize,
  ButtonStyle,
  ComponentType,
  version
} from 'discord.js';
import os from 'os';

class BotInfoCommand extends Command {
  constructor() {
    super({
      name: 'botinfo',
      description: 'Displays information about Runebot',
      usage: 'botinfo',
      aliases: ['info', 'about', 'stats'],
      category: 'information',
      cooldown: 5
    });
  }

  async execute({ message, client }) {
    try {
      let members = client.guilds.cache.reduce((acc, g) => acc + g.memberCount, 0);
      let formattedMembers = members >= 1000 ? `${(members / 1000).toFixed(1)}k` : members;
      
      const generateContainer = (page) => {
        switch (page) {
          case 'stats': {
            const uptime = process.uptime() * 1000;
            const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
            const totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
            const cpuModel = os.cpus()[0].model;
            const systemUptime = Math.floor(os.uptime() / 60);
            const ping = Math.round(client.ws.ping);
            const createdAt = `<t:${Math.floor(client.user.createdTimestamp / 1000)}:R>`;
            const shard = client.ws.shards.size || 'Unknown';
            
            return new ContainerBuilder()
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent('<:discotoolsxyzicon79:1395127048040747129> **Runebot Stats**')
              )
              .addSeparatorComponents(
                new SeparatorBuilder()
                  .setDivider(true)
                  .setSpacing(SeparatorSpacingSize.Small)
              )
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`**Basic Info**
<:replycont:1395127243964944485> Bot Created: ${createdAt}
<:replycont:1395127243964944485> Uptime: <t:${Math.floor((Date.now() - uptime) / 1000)}:R>
<:replycont:1395127243964944485> Ping: **${ping}ms**
<:replycont:1395127243964944485> Active Shards: **${shard}**
<:reply:1395127267176484894> Commands: **${client.commandHandler.commands.size || 0}** | Categories: **${client.commandHandler.categories.size}**`)
              )
              .addSeparatorComponents(
                new SeparatorBuilder()
                  .setDivider(true)
                  .setSpacing(SeparatorSpacingSize.Small)
              )
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`**System Info**
<:replycont:1395127243964944485> Memory Usage: **${memoryUsage} MB / ${totalMem} GB**
<:replycont:1395127243964944485> CPU: **${cpuModel}**
<:replycont:1395127243964944485> System Uptime: **${systemUptime} mins**
<:replycont:1395127243964944485> Platform: **${os.platform()}**
<:replycont:1395127243964944485> Node.js: **${process.version}**
<:reply:1395127267176484894> Discord.js: **${version}**`)
              )
              .addSeparatorComponents(
                new SeparatorBuilder()
                  .setDivider(true)
                  .setSpacing(SeparatorSpacingSize.Small)
              )
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`**Network Metrics**
<:replycont:1395127243964944485>> Servers: **${client.guilds.cache.size}**
<:replycont:1395127243964944485> Users: **${formattedMembers}**
<:replycont:1395127243964944485> Total Channels: **${client.channels.cache.size}**
<:replycont:1395127243964944485> Text Channels: **${client.channels.cache.filter(c => c.type === 0).size}**
<:reply:1395127267176484894> Voice Channels: **${client.channels.cache.filter(c => c.type === 2).size}**`)
              );
          }
          
          case 'team': {
            return new ContainerBuilder()
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent('<:discotoolsxyzicon60:1386986763708268697> **Avon Team**')
              )
              .addSeparatorComponents(
                new SeparatorBuilder()
                  .setDivider(true)
                  .setSpacing(SeparatorSpacingSize.Small)
              )
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`**💻 Lead Developers**  
<:reply:1395127267176484894> [ifweditncode](https://discord.gg/Vrjf7hf2) — \`debhlobher 🥵\`, \`idle coder 😔\`, \`stored feelings in SQLite 😭📁\`  
<:reply:1395127267176484894> [bre4d777](https://discord.gg/Vrjf7hf2) — \`\`, \`debhlover⛏️ 🍞💻\`, \`SQLite but in Excel 🧾\``)
              )
              .addSeparatorComponents(
                new SeparatorBuilder()
                  .setDivider(true)
                  .setSpacing(SeparatorSpacingSize.Small)
              )
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`**📋 Management**  
<:reply:1395127267176484894> [hperm.fr](https://discord.gg/Vrjf7hf2) — \`lafda king 👑\`, \`fucking everyone 💥\`, \`short tempered 🤡\`, \`Best Seller 🏆\`, \`dalal 🪙\`, \`RAM reseller 💸\`, \`sells .sqlite files on OLX 🧂\`, \`ghost ping ka founder 👻\``)
              );
          }

          case 'links': {
            return new ContainerBuilder()
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent('<:discotoolsxyzicon67:1386986823334494339> **Important Links**')
              )
              .addSeparatorComponents(
                new SeparatorBuilder()
                  .setDivider(true)
                  .setSpacing(SeparatorSpacingSize.Small)
              )
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`[Invite Runebot](https://discord.com/oauth2/authorize?client_id=1395125216442847332&permissions=1162048502615121&integration_type=0&scope=bot)
[Support Server](https://discord.gg/Vrjf7hf2)`)
              );
          }

          default:
            return new ContainerBuilder()
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent('❌ **Error**')
              )
              .addSeparatorComponents(
                new SeparatorBuilder()
                  .setDivider(true)
                  .setSpacing(SeparatorSpacingSize.Small)
              )
              .addTextDisplayComponents(
                new TextDisplayBuilder().setContent('Unknown page.')
              );
        }
      };

      const buildContainer = (activePage) => {
        const container = generateContainer(activePage);
        
        const buttons = [
          new ButtonBuilder()
            .setCustomId('stats')
            .setLabel('Stats')
            .setStyle(ButtonStyle.Primary)
            .setDisabled(activePage === 'stats'),

          new ButtonBuilder()
            .setCustomId('team')
            .setLabel('Team')
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(activePage === 'team'),

          new ButtonBuilder()
            .setCustomId('links')
            .setLabel('Links')
            .setStyle(ButtonStyle.Success)
            .setDisabled(activePage === 'links')
        ];
        
        container.addActionRowComponents(row => row.setComponents(...buttons));
        return container;
      };

      let currentPage = 'stats';
      const initialContainer = buildContainer(currentPage);

      const sent = await message.reply({ 
        components: [initialContainer],
        flags: MessageFlags.IsComponentsV2
      });

      const collector = sent.createMessageComponentCollector({
        componentType: ComponentType.Button,
        time: 120_000
      });

      collector.on('collect', async (interaction) => {
        if (interaction.user.id !== message.author.id) {
          return interaction.reply({ 
            content: 'Only the command author can use these buttons.', 
            ephemeral: true 
          });
        }

        const buttonId = interaction.customId;
        
        if (['stats', 'team', 'links'].includes(buttonId)) {
          currentPage = buttonId;
        }

        const container = buildContainer(currentPage);

        await interaction.update({ 
          components: [container]
        });
      });

      collector.on('end', () => {
        try {
          // Create a new container with disabled buttons instead of modifying the existing one
          const container = generateContainer(currentPage);
          
          // Create new buttons that are all disabled
          const disabledButtons = [
            new ButtonBuilder()
              .setCustomId('stats')
              .setLabel('Stats')
              .setStyle(ButtonStyle.Primary)
              .setDisabled(true),

            new ButtonBuilder()
              .setCustomId('team')
              .setLabel('Team')
              .setStyle(ButtonStyle.Secondary)
              .setDisabled(true),

            new ButtonBuilder()
              .setCustomId('links')
              .setLabel('Links')
              .setStyle(ButtonStyle.Success)
              .setDisabled(true)
          ];
          
          // Add the disabled buttons to the container
          container.addActionRowComponents(row => row.setComponents(...disabledButtons));
          
          // Edit the message with the new container
          sent.edit({ 
            components: [container]
          }).catch(() => {});
        } catch (error) {
          // Silently handle any errors in the end event
          logger.error('BotInfoCommand', 'Error in collector end event', error);
        }
      });
    } catch (error) {
      logger.error('BotInfoCommand', 'Error executing botinfo command', error);
      const errorContainer = new ContainerBuilder()
        .addTextDisplayComponents(
          new TextDisplayBuilder().setContent('❌ **Error**')
        )
        .addSeparatorComponents(
          new SeparatorBuilder()
            .setDivider(true)
            .setSpacing(SeparatorSpacingSize.Small)
        )
        .addTextDisplayComponents(
          new TextDisplayBuilder().setContent('Unable to display bot info.')
        );
      
      message.reply({ 
        components: [errorContainer],
        flags: MessageFlags.IsComponentsV2
      });
    }
  }
}

export default new BotInfoCommand();
