const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "leadearboard",
  description: "show who have richest",
  category:"economy",
  aliases:["top"],
run: async (bot, message, args) => {


    let money = db.fetch(`money_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = bot.users.get(money[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${money[i].data}$\n`
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
    .setDescription(content)
    .setColor(0x51267)

    message.channel.send(embed)




}}