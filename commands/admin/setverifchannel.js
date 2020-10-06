const Discord = require("discord.js")
const db = require("quick.db")
const MessageEmbed = require('discord.js')
module.exports = {
  name: "setverificationc",
  category: "Administration",
  usage: "verification <#channel>",
  description: "Set the verification channel",
  run: async (client, message, member, args) => {
    
    let channel = message.mentions.channels.first() //mentioned channel
    if (!message.member.hasPermission("MANAGE_MESSAGES")){
      return message.channel.send("YOU DON'T HAVE PERMISSION TO USE THIS COMMAND!")
    }
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`Vchannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`verification Channel is seted as ${channel}`)
    
    let gb =  db.fetch(`Vchannel_${message.guild.id}`)//send success message
    let r = db.fetch(`Vrchannel_${message.guild.id}`)
  const gg = new Discord.MessageEmbed()
  .setTitle('SERVER VERIFICATION')
  .setDescription('IF U WANT ACCESS TO FULL SERVER REACT ✅')
  .setThumbnail(message.client.user.displayAvatarURL({dynamic: true}))
  .setColor('RED')
  .setTimestamp()
  .setFooter(message.guild.name)
  let m = await message.client.channels.cache.get(gb).send(gg)
  m.react(`✅`)
   const filter = (reaction, user) => {
    return reaction.emoji.name === '✅' && user.id === message.author.id;
};
let role = message.guild.roles.cache.find(role => role.name === `${r}`);
    const add = m.createReactionCollector(filter)
    add.on('collect', g => {
      member.roles.add(role)
      
    })}}