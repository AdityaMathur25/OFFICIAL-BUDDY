const db = require("quick.db")
const { discord, MessageEmbed } = require("discord.js")
module.exports.run = async(client, message, oldMember, newMember) => {
  let channel = await db.get(`logchannel_${message.guild.id}`)
 let avatar = new MessageEmbed()
 .setauthor(newMember.displayAvatarURL({dynamic: true }) + oldMember.username)
 .setdescription("CHANGE AVATAR ")
 
  }