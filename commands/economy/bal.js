const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bal",
    description: "know your balance",
category: "economy",
    async run (client, message, args) {

        let user = message.mentions.users.first() || message.author;

        let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if (bal === null) bal = 0;
const embed = new Discord.MessageEmbed();
      embed.setTitle("CHECK YOUR BALANCE")
     embed.setColor("	#00FFFF")
      embed.setDescription(`${user} YOU HAVE TOTAL ${bal}$ MONEY!`)
      embed.setTimestamp();
      embed.setFooter("ECONOMY SYSTEM!")
        message.channel.send(embed)
    }
}