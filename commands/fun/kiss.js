const Discord = require('discord.js');

module.exports ={
  name:"kiss",
  description:"kiss some one",
  category:"fun",
  
  run: async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://tenor.com/view/golden-time-anime-kiss-gif-6155657',
  'https://tenor.com/view/anime-kiss-making-out-kissing-gif-13658106',
  'https://tenor.com/view/anime-kiss-love-sweet-gif-5095865',
  'https://tenor.com/view/golden-time-anime-kiss-couple-lovers-gif-6155670',
  'https://tenor.com/view/love-anime-kiss-hot-damn-gif-9838409',
  'https://tenor.com/view/anime-kiss-gif-4829336',
  '',
  '',
  '',
  ''
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('remember to mention a valid user to kiss!');
}
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('RANDOM')
        .setDescription(`${message.author} kissed ${user}❤`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`REQUESTED BY ${message.author.username}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
}