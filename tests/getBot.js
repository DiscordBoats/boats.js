const Discord = require("discord.js")
const BOATS = require("boats.js")

const client = new Discord.Client()
const Boats = new BOATS("API TOKEN")

client.on('ready', () => {
    Boats.getBot('365958655926992896').then(bot => {
        console.log(bot)
    }).catch((e) => {
        console.error(e)
    })
})

client.login("TOKEN")