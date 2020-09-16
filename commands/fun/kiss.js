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
  'https://i.imgur.com/i1PIph3.gif',
  'https://i.imgur.com/WVSwvm6.gif',
  'https://i.imgur.com/0WWWvat.gifv',
  'https://i.imgur.com/YOQgZqY.gifv',
  'https://i.imgur.com/709chb9.gifv',
  'https://i.imgur.com/e4bi40y.gifv',
  'https://tenor.com/view/kiss-anime-love-gif-9158317',
  'https://tenor.com/view/yes-love-couple-kiss-in-love-gif-15009390',
  'https://tenor.com/view/anime-kiss-love-mwah-gif-16687888',
  
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