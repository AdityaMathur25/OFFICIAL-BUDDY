const Discord = require("discord.js")
const   mongoose  = require('quickmongo');
const db = new mongoose.Database("mongodb+srv://Buddy:12345@cluster0.qqght.gcp.mongodb.net/test");

const MessageEmbed = require('discord.js')
module.exports = {
  name: "setverificationc",
  category: "Administration",
  usage: "verification <#channel>",
  description: "Set the verification channel",
  run: async (client, message, args) => {
    
    let channel = message.mentions.channels.first() //mentioned channel
    if (!message.member.hasPermission("MANAGE_MESSAGES")){
      return message.channel.send("YOU DON'T HAVE PERMISSION TO USE THIS COMMAND!")
    }
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    await db.set(`Vchannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`verification Channel is seted as ${channel}`)
    
    let gb = await db.fetch(`Vchannel_${message.guild.id}`)//send success message
    let r =  await db.get(`Vrchannel_${message.guild.id}`)
  const gg = new Discord.MessageEmbed()
  .setTitle('SERVER VERIFICATION')
  .setDescription('IF U WANT ACCESS TO FULL SERVER REACT ✅')
  .setThumbnail(message.client.user.displayAvatarURL({dynamic: true}))
  .setColor('AQUA')
  .setTimestamp()
  .setFooter(message.guild.name)
  let m = await message.client.channels.cache.get(gb).send(gg)
  m.react(`✅`)
   const filter = (reaction, user) => {
    return reaction.emoji.name === '✅' && user.id === message.author.id;
};
let role = message.guild.roles.cache.get(r); 
    const adds = m.createReactionCollector(filter)
    adds.on('collect', g => {
      message.member.roles.add(role)
      
    })}}