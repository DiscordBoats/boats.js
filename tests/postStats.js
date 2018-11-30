const Discord = require("discord.js")
const BOATS = require("boats.js")

const client = new Discord.Client()
const Boats = new BOATS("API TOKEN")


client.on('ready', () => {
    Boats.postStast(client.guilds.count, client.user.id).then(() => {
        console.log('Successfully updated server count.')
    }).catch((e) => {
        console.error(e)
    })
})

client.login("TOKEN")