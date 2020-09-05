const Discord = require("discord.js")
 const { MessageEmbed, client } = require("discord.js")
module.exports = {
  name: "uptime",
  description: "Show the bot uptime",
  category: "info",
  aliases: ["up"],
run: async (bot, message, args) => {
 
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds.`
    }
  const embed = new MessageEmbed();
  embed.setAuthor( message.author.username)
  embed.setTitle("I HAVE BEEN ONLINE FOR :")
  embed.setDescription(`${duration(bot.uptime)}`)
embed.setColor("GREEN")
  embed.setFooter(`Requested By ${message.author.username}`)
    message.channel.send(embed)
}
}