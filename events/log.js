const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { discord, MessageEmbed } = require("discord.js")


module.exports.run = async (client, member, message, args) => {

client.on('messageDelete', async message=> {
  if(message.author.bot) return;
  const looog = db.get(`logchannel_${message.guild.id}`)
  if(!looog) return;
  let ap = new MessageEmbed()
  .setAuthor(message.member.username)
  .setTitle("MESSAGE DELETED !")
  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`❯ MESSAGE : ${message}`)
  .addField("❯ CHANNEL :", message.channel, true)
  .setColor("RANDOM")
  .setFooter("LOG MESSAGES")
client.channels.cache.get(looog)
.send(ap)
})
client.on('channelCreate', async channel =>{
  const int = db.get(`logchannel_${channel.guild.id}`)
  if(!int) return;
  let me = new MessageEmbed()
  .setTitle('CREATED CHANNEL')
  .setAuthor(client.user.username)
  .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
  .addField("❯ CHANNEL :", channel.name, true)
  .addField("❯ CHANNEL TYPE:", channel.type, true)
  .setColor('AQUA')
  .setFooter("LOG MESSAGES !")
  client.channels.cache.get(int).send(me)
}
         )
client.on('channelDelete', async channel =>{
  const int = db.get(`logchannel_${channel.guild.id}`)
  if(!int) return;
  let me = new MessageEmbed()
  .setTitle('CHANNEL DELETED!')
  .setAuthor(client.user.username)
  .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
  .addField("❯ CHANNEL :", channel.name, true)
  .addField("❯ CHANNEL TYPE:", channel.type, true)
  .setColor('AQUA')
  .setFooter("LOG MESSAGES !")
  client.channels.cache.get(int).send(me)
}
         )
client.on('messageUpdate', async (oldMessage,newMessage) =>{
  const int = db.get(`logchannel_${oldMessage.guild.id}`)
  if(!int) return;
  let me = new MessageEmbed()
  .setTitle('MESSAGE EDITED !')
  .setAuthor(oldMessage.author.username)
  .setThumbnail(oldMessage.author.displayAvatarURL({dynamic: true}))
  .addField("❯ Old Message :", oldMessage, true)
  .addField("❯ NEW Message :", newMessage, true)
  .setColor('RANDOM')
  .setFooter("LOG MESSAGES !")
  client.channels.cache.get(int).send(me)
})
  client.on('roleCreate', async role =>{
  const int = db.get(`logchannel_${role.guild.id}`)
  if(!int) return;
  let me = new MessageEmbed()
  .setTitle('CREATED ROLE !')
  .setAuthor(client.user.username)
  .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
  .addField("❯ ROLE NAME :", role, true)
  .setColor('RANDOM')
  .setFooter("LOG MESSAGES !")
  client.channels.cache.get(int).send(me)
}
         )
client.on('roleDelete', async role =>{
  const int = db.get(`logchannel_${role.guild.id}`)
  if(!int) return;
  let me = new MessageEmbed()
  .setTitle('DELETED ROLE !')
  .setAuthor(client.user.username)
  .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
  .addField("❯ Role Name :", role, true)
  .setColor('AQUA')
  .setFooter("LOG MESSAGES !")
  client.channels.cache.get(int).send(me)
}
      )}