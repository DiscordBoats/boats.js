/**
 * @module boats.js
 * @copyright Roee Lupo 2018-2021
 * @license MIT
 */
const fetch = require('wumpfetch');

module.exports = class BoatsClient {
  /**
   * Create Boats class
   * @constructor
   * @param {string} token - Your Discord Boats token
   * @param {string} version - API version to use (optional)
   */
  constructor(token, version) {
    this.token = token;
    this.version = version || 'v2';
  }

  /**
   * Gets information about the given bot.
   *
   * @param {string} botid - The bot's ID.
   * @returns {Promise} - Information about the bot in JSON format.
  */
  getBot(botid) {
    if (typeof botid !== 'string') {
      throw new TypeError('Bot ID must be a string');
    }

    return new Promise(async (resolve, reject) => {
      try {
        const data = await (await fetch(`https://discord.boats/api/${this.version}/bot/${botid}`).send()).json();

        if (data.error === true) {
          return reject(new Error(data.message));
        }
        resolve(data);
      } catch (err) { 
        reject(new Error(err)); 
      }
    });
  }

  /**
   * Checks if user has voted given bot.
   *
   * @param {string} botid - The bot's ID.
   * @param {string} userid - The user's ID.
   * @returns {Promise} - True/False in JSON format.
  */
  getVoted(botid, userid) {
    if (typeof userid !== 'string') {
      throw new TypeError('User ID must be a string');
    }

    if (typeof botid !== 'string') {
      throw new TypeError('Bot ID must be a string');
    }

    return new Promise(async (resolve, reject) => {
      try {
        const data = await (await fetch(`https://discord.boats/api/${this.version}/bot/${botid}/voted?id=${userid}`).send()).json();

        if (data.error === true) {
          return reject(new Error(data.message));
        }
        resolve(data);
      } catch (err) { 
        reject(new Error(err)); 
      }
    });
  }

  /**
   * Gets information about the given user.
   *
   * @param {string} userid - The user's ID.
   * @returns {Promise} - Information about the user in JSON format.
  */
  getUser(userid) {
    if (typeof userid !== 'string') {
      throw new TypeError('User ID must be a string');
    }

    return new Promise(async (resolve, reject) => {
      try {
        const data = await (await fetch(`https://discord.boats/api/${this.version}/user/${userid}`).send()).json();

        if (data.error === true) {
          return reject(new Error(data.message));
        }
        resolve(data);
      } catch (err) { 
        reject(new Error(err)); 
      }
    });
  }

  /**
   * Post bot server count to API.
   *
   * @param {number} servercount - The bot's server count.
   * @param {string} botid - The bot's ID.
  */
  postStats(servercount, botid) {
    if (!this.token) {
      throw new TypeError('API token not provided');
    }

    if (typeof servercount !== 'number') {
      throw new TypeError('Server count must be a valid number');
    }

    if (typeof botid !== 'string') {
      throw new TypeError('Bot ID must be a string');
    }

    return new Promise(async (resolve, reject) => {
      try {
        const data = await (await fetch(`https://discord.boats/api/${this.version}/bot/${botid}`, {
          method: 'POST', 
          headers: { 
            'Authorization': this.token 
          },
          data: { 
            'server_count': servercount
          }
        }).send()).json();

        if (data.error === true) {
          return reject(new Error(data.message));
        }
        resolve(data);
      } catch (err) { 
        reject(new Error(err)); 
      }
    });
  }
};
