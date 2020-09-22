const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name:"leaderboard",
  category:"info",
  aliases:["le"],
run: async (bot, message, args) => {
const { getInfo } = require("../../handlers/xp.js")
  const {level, remxp, levelxp} = getInfo(level);
  

    let money = db.fetch(level
    let content = "";

    for (let i = 0; i < level.length; i++) {
        let user = bot.users.get(money[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${money[i].data}$\n`
    }

    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
    .setDescription(content)
    .setColor(0x51267)

    message.channel.send(embed)



}
}