const Discord = require ("discord.js");
module.exports = {
 name:"punch",
  description:"punch some one",
  category:"fun",
  run: async (client, message, arg) => {
       var member= message.mentions.members.first();
        var image[ "",
"https://tenor.com/view/anime-smash-lesbian-punch-wall-gif-4790446",
"https://tenor.com/view/anime-naruto-punch-fight-gif-12911685",
"https://tenor.com/view/anime-punch-knockout-wasted-smack-gif-11451829",
"https://tenor.com/view/die-anime-punch-kill-angry-gif-8932977",
"https://tenor.com/view/rin243109-blue-exorcist-anime-punch-gif-13785833",
"https://tenor.com/view/shy-punch-anime-aki-adagaki-gif-12003970",
"https://tenor.com/view/naruto-sasuke-punch-snicker-anime-gif-7380310",
"https://tenor.com/view/stay-down-punch-naruto-gif-5211928",
"https://tenor.com/view/fight-anime-punch-gif-16681456",
"https://tenor.com/view/azumanga-daioh-azumanga-anime-punch-uppercut-gif-17075114" ];
        var image = Math.floor(Math.random() * images.length);
        if(!member) return message.channel.send("you need to mention someone")
        let HugEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} you can't punch yourself `)
          .setColor("RANDOM")
         let hugembed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} PUNCHED ${member.user.username},`)
          .setImage(String([images[image]]))
          .setColor("RANDOM")
          .setFooter(`REQUESTED BY ${message.author.username}`)
         return message.channel.send(hugembed)
  }
}


