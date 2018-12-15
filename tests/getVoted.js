const Discord = require("discord.js")
const BOATS = require("boats.js")

const client = new Discord.Client()
const Boats = new BOATS("API TOKEN")


client.on('ready', () => {
    Boats.getVoted('BOT_ID', 'USER_ID').then((voted) => {
        console.log(voted);
    }).catch((err) => {
        console.error(err);
    });
})

client.login("TOKEN")
