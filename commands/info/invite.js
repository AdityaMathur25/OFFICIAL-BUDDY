const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    const Embed = new Discord.MessageEmbed();
    Embed.settitle()
 Embed.setDescription("**INVITE LINK** - [OFFICIAL•BUDDY](Link here)")