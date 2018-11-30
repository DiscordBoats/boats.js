const snekfetch = require('snekfetch');
const Error = require('./ErrorHandler')
const API = 'https://discord.boats/api/';

class BOATSAPI {
  constructor(token) {
    this.token = token;
  }

  getBot(botid) {
    if (typeof botid != 'string') throw new TypeError('Bot ID must be a string')
    return new Promise((resolve, reject) => {
      snekfetch.get(API + '/bot/' + botid).then((req) => {
        resolve(req.body);
      }).catch((error) => {
        reject(new Error(error));
      });
    });
  }

  getUser(botid) {
    if (typeof botid != 'string') throw new TypeError('User ID must be a string')
    return new Promise((resolve, reject) => {
      snekfetch.get(API + '/user/' + botid).then((req) => {
        resolve(req.body);
      }).catch((error) => {
        reject(new Error(error));
      });
    });
  }

  postStats(servercount, botid) {
    if (typeof servercount != 'number') throw new TypeError('Server count must be a number.');
    if (typeof botid != 'string') throw new TypeError('Bot ID must be a string.');
    return new Promise((resolve, reject) => {
      snekfetch.post(API + '/bot/' + botid).set('Authorization', this.token).send({
        server_count: servercount
      }).then((req) => {
        resolve(req.body);
      }).catch((error) => {
        reject(new Error(error));
      });
    });
  }
}

module.exports = BOATSAPI;