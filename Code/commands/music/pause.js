﻿const functions = require("../../functions")
const config = require("../../config.json")
module.exports = {
    name: "pause",
    category: "MUSIC COMMANDS",
    aliases: ["break"],
    useage: "pause",
    description: "Pauses the song*",
    run: async (client, message, args) => {

        //If Bot not connected, return error
        if (!message.guild.me.voice.channel) return functions.embedbuilder(client, 3000, message, config.colors.no, "Nothing playing!")
        
        //if member not connected return error
        if (!message.member.voice.channel) return functions.embedbuilder(client, 5000, message, config.colors.no, "`" + message.author.tag + "`" + " You must join a Voice Channel")
        
        //if they are not in the same channel, return error
        if (message.member.voice.channel.id != message.guild.me.voice.channel.id) return functions.embedbuilder(client, 5000, message, config.colors.no, "`" + message.author.tag + "`" + " You must join my Voice Channel: " + ` \`${message.guild.me.voice.channel.name ? message.guild.me.voice.channel.name : ""}\``)
        
        //if Bot is paused, return error
        if (client.distube.isPaused(message)) return functions.embedbuilder(client, "null", message, config.colors.no, "Already paused!")

        //send information message
        functions.embedbuilder(client, 3000, message, config.colors.yes, "Paused!")

        //pause
        return client.distube.pause(message);
    }
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
