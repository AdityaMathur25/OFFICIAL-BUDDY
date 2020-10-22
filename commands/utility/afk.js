const db = require('quick.db')
const Discord = require('discord.js')
const MessageEmbed = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
  name: "setafk",
  description: "set ur profile  to afk mode",
  alises: ["afk"],
  category: "utility",
  run: async (client, message , args ) => {
   const setStatus = message.content.split(' ');

    if(setStatus[1] === 'afk'){
        client.user.setAFK(true);
        message.channel.send("Your status has been set to afk!");
    }

    else if(setStatus[1] === 'notafk'){
        client.user.setAFK(false);
        message.channel.send(`Welcome back ${message.author}`);
    }

    else if(!setStatus[1] || setStatus[1] === undefined){
        message.channel.send("You did not choose afk or notafk as current status!");
    }

    else{
        message.channel.send("You did not choose afk or notafk as current status!");
    }
 }
    
    }