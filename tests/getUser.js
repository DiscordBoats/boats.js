const Discord = require('discord.js');
const BOATS = require('boats.js');

const client = new Discord.Client();
const Boats = new BOATS('API TOKEN');

client.on('ready', () => {
    Boats.getUser('231733082804322304').then(user => {
        console.log(user);
    }).catch((err) => {
        console.error(err);
    });
});

client.login('TOKEN');