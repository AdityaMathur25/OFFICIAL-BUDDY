const db = require('quick.db')
const canva = require("canvas-senpai")
const  { discord, MessageAttachment } = require('discord.js')
const { getInfo } = require("../../handlers/xp.js")
module.exports = {
  name: "level",
  description: "Get the level of author or mentioned",
  usage: "level <user>",
  category: "info",
  run: (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    
    if(user.id === client.user.id) { //IF BOT
      return message.channel.send("😉 | I am on level 100")
    }
    
    if(user.bot) {
      return message.channel.send("Bot do not have levels")
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    if(xp === 0) return message.channel.send(`**${user.tag}** is out of the xp`)
    (
     {
       link: "https://i.pinimg.com/originals/76/0e/d7/760ed7f52c90870503762ac92db92adc.jpg",
       name: message.author.username,
       discriminator: message.author.discriminator,
       level: 10,
       rank: 6,
       currentXP: 679,
       fullXP: 1000,
       avatar: message.author.displayAvatarURL({ format: "png"})
     
     })
    const attachment = new discord.MessageAttachment(
     data,
      "welcome-image.png"
    );
  return message.channel.send(attachment);
}}
    

