const Discord = require("discord.js")
module.exports = {
  name: "invite",
  description:
    "Get link of bot invite ",
  usage: "imvite bot",
  category: "info",
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed();
    embed.settitle( "BOT INVITE" )
 embed.setDescription("**INVITE LINK** - [OFFICIAL•BUDDY](Link here)")