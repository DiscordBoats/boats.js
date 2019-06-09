const wump = require('wumpfetch');

module.exports = class Boats {
  constructor(token, api) {
    this.token = token;
    this.api = api || 'https://discord.boats/api/v2';
  }

  getBot(botid) {
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`${this.api}/bot/${botid}`).send();
         resolve(res.json());
      } catch (err) { reject(new Error(err)); }
    });
  }

  getVoted(botid, userid) {
    if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`${this.api}/bot/${botid}/voted?id=${userid}`).send();
         resolve(res.json());
      } catch (err) { reject(new Error(err)); }
    });
  }

  getUser(userid) {
    if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`${this.api}/user/${userid}`).send();
         resolve(res.json());
      } catch (err) { reject(new Error(err)); }
    });
  }

  postStats(servercount, botid) {
    if (!this.token) throw new TypeError('API token not provided');
    if (typeof servercount !== 'number') throw new TypeError('Server count must be a number');
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`${this.api}/bot/${botid}`, {
          method: 'POST', 
          headers: { 'Authorization': this.token },
          data: { 'server_count': servercount  }
        }).send();
        resolve(res.json());
      } catch (err) { reject(new Error(err)); }
    });
  }
};