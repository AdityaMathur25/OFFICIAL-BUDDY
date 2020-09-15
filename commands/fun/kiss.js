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
  'https://lh4.googleusercontent.com/proxy/8cW5PUzqxk3SXjyyYbODYJoEz6ahBhXjSEGrtlK5AC5mdkWo07PlZB4qZxbj06VqOvv9zg-dHXw=w500-h281'
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