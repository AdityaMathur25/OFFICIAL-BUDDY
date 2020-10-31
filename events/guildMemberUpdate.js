const db = require("quick.db")
const { discord, MessageEmbed } = require("discord.js")
const  { COLOR } = require("../config.json")
module.exports.run = async(client, message, oldMember, newMember) => {
  let channel = await db.get(`logchannel_${message.guild.id}`)
 let avatar = new MessageEmbed()
 .setauthor(message.newMember.displayAvatarURL({dynamic: true }) + oldMember.username)
 .setdescription("CHANGE AVATAR ")
 .addfield("OLD AVATAR", `[OLD-AVATAR](${oldMember.displayAvatarURL()})`, true)
 .setFooter("AVATAR LOGS! " + "FROM: " + message.guild.name)
 .setTimestamp()
 .setColor(COLOR)
 client.channels.cache.get(channel).send(avatar)
  }