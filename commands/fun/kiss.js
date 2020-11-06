const Discord = require('discord.js');

module.exports ={
  name:"kiss",
  description:"kiss some one",
  category:"images",
  
  run: async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://imgur.com/i1PIph3.gif',
  'https://imgur.com/WVSwvm6.gif',
  'https://imgur.com/0WWWvat.gif',
  'https://imgur.com/YOQgZqY.gif',
  'https://imgur.com/zGFB0wJ.gif',
  'https://imgur.com/lmY5soG.gif',
  'https://imgur.com/IgGumrf.gif',
  "https://cdn.weeb.sh/images/Byh57gqkz.gif",
"https://cdn.weeb.sh/images/BydoCy9yG.gif",
"https://cdn.weeb.sh/images/ByiMna_vb.gif",
"https://cdn.weeb.sh/images/SJJUhpOD-.gif",
"https://cdn.weeb.sh/images/SJrBZrMBz.gif",
"https://cdn.weeb.sh/images/SJ--2auDZ.gif",
"https://cdn.weeb.sh/images/S1E1npuvb.gif",
"https://cdn.weeb.sh/images/r1VWnTuPW.gif",
"https://cdn.weeb.sh/images/ryEvhTOwW.gif",
"https://cdn.weeb.sh/images/r1mcJlFVz.gif"
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