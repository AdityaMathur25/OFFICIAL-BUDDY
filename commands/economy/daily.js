const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');
module.exports = {
    name: "daily",
    description: "Receive a daily award of money",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 86400000;
        let amount = 100;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`You've already collected your daily award. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
const embed = new Discord.MessageEmbed();
          embed.setAuthor( message.user.displayAvatarURL(), message.user.username)
          embed.setTitle("DAILY")
          embed.setColor("AQUA")
          embed.Description(`YOU HAVE SUCCESSFULLY COLLECTED ${amount} MONEY!`)
          embed.setTimestamp()
          embed.setFooter("MADED BY BUDDY!")
            message.channel.send(embed)
        }
    }
}