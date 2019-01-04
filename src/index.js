const { get, post } = require('snekfetch');
const Error = require('./ErrorHandler')
const API = 'https://discord.boats/api/';

module.exports = class BOATSAPI {
  constructor(token) {
    this.token = token;
  }

  getBot(botid) {
    if (typeof botid != 'string') throw new TypeError('Bot ID must be a string');
    return new Promise((resolve, reject) => {
      get(API + '/bot/' + botid).then((req) => {
        resolve(req.body);
      }).catch((error) => {
        reject(new Error(error));
      });
    });
  }

  getVoted(botid, userid) {
    if (typeof userid != 'string') throw new TypeError('User ID must be a string');
    if (typeof botid != 'string') throw new TypeError('Bot ID must be a string');
    return new Promise((resolve, reject) => {
      get(API + '/bot/' + botid + '/voted?id=' + userid).then((req) => {
        resolve(req.body);
      }).catch((error) => {
        reject(new Error(error));
      });
    });
  }

  getUser(userid) {
    if (typeof userid != 'string') throw new TypeError('User ID must be a string');
    return new Promise((resolve, reject) => {
      get(API + '/user/' + userid).then((req) => {
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
      post(API + '/bot/' + botid).set('Authorization', this.token).send({
        server_count: servercount
      }).then((req) => {
        resolve(req.body);
      }).catch((error) => {
        reject(new Error(error));
      });
    });
  }
}
