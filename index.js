const fetch = require('node-superfetch');
const API = 'https://discordboats.xyz/api/';

class BOATSAPI {
  constructor(token) {
    this.token = token;
  }

  _request(method, endpoint, data, auth) {
    const request = fetch[method](API + endpoint);
    if (method === 'post' && data) request.send(data);
    if (method === 'get' && data) request.query(data);
    if (auth) request.set({ Authorization: this.token });
    return request;
  }

  async postStats(serverCount, id) {
    if (!this.token) throw new Error('postStats requires a token to be set');
    if (!serverCount) throw new Error('postStats requires 2 arguments');
    if (!id) throw new Error('postStats requires a bot id to post stats to');
    const data = {};
    data.server_count = serverCount;
    const response = await this._request('post', `bot/${id}`, data, true);
    return response.body;
  }

  async getBot(id) {
    if (!id) throw new Error('getBot requires a bot id as an argument');
    const response = await this._request('get', `bot/${id}`);
    const info = JSON.parse(response.text);
    return info;
  }

  async getUser(id) {
    if (!id) throw new Error('getUser requires a user id as an argument');
    const response = await this._request('get', `user/${id}`);
    const info = JSON.parse(response.text);
    return info;
  }
}

module.exports = BOATSAPI;