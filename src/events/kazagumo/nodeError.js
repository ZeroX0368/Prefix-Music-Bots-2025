/**
 * TRINOX STUDIO - Bre4d777
 * give credits or ill touch you in your dreams
 * LEAKED BY CODEX
 */
import { logger } from '../../utils/logger.js';

/**
 * Node error event for Shoukaku
 */
export default {
  name: 'nodeError',
  /**
   * Execute the node error event
   * @param {string} name - Node name
   * @param {Error} error - Error object
   * @param {object} client - Discord client
   */
  execute(name, error, client) {
    logger.error('Lavalink', `Node ${name} encountered an error:`, error);
  },
};

// coded by bre4d
