const Discord = require('discord.js');

module.exports ={
  name:"punch",
  description:"punch some one",
  category:"fun",
  
  run: async (client, message, args) => {

var list = [
"https://tenor.com/view/toradora-punch-gif-10769541",
"https://tenor.com/view/anime-smash-lesbian-punch-wall-gif-4790446",
"https://tenor.com/view/anime-naruto-punch-fight-gif-12911685",
"https://tenor.com/view/anime-punch-knockout-wasted-smack-gif-11451829",
"https://tenor.com/view/die-anime-punch-kill-angry-gif-8932977",
"https://tenor.com/view/rin243109-blue-exorcist-anime-punch-gif-13785833",
"https://tenor.com/view/shy-punch-anime-aki-adagaki-gif-12003970",
"https://tenor.com/view/naruto-sasuke-punch-snicker-anime-gif-7380310",
"https://tenor.com/view/stay-down-punch-naruto-gif-5211928",
"https://tenor.com/view/fight-anime-punch-gif-16681456",
"https://tenor.com/view/azumanga-daioh-azumanga-anime-punch-uppercut-gif-17075114",
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('remember to mention a valid user to punch!');
}
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('PUNCH')
        .setColor('RANDOM')
        .setDescription(`${message.author} Punched ${user}👊`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`REQUESTED BY ${message.author.username}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
}