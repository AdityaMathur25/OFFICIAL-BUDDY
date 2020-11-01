const db = require("quick.db")
const { discord, MessageEmbed } = require("discord.js")
const  { COLOR } = require("../config.json")
module.exports.run = async( oldMember, newMember) => {
  let channel = await db.get(`logchannel_${oldMember.guild.id}`)
 let avatar = new MessageEmbed()
 .setauthor(newMember.displayAvatarURL({dynamic: true }) + oldMember.username)
 .setdescription("CHANGE AVATAR ")
 .addfield("OLD AVATAR", `[OLD-AVATAR](${oldMember.displayAvatarURL()})`, true)
 .setFooter("AVATAR LOGS! " + "FROM: " + oldMember.guild.name)
 .setTimestamp()
 .setColor(COLOR)
 oldMember.guild.channels.cache.get(channel).send(avatar)
  }