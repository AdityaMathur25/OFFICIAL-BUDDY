const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "invite",
  description: "invite the bot xd",
  category: "info",
  run: async ( message, args) => {
    let Embed = new MessageEmbed();
    Embed.setitle("INVITE THE BOT")
    Embed.setcolor("YELLOW")
    Embed.setdescription(`[CLICK TO INVITE ME]`())