const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../../config.json");

module.exports = {
  name: "botstats",
  aliases: ["stat", "bot"],
  category: "info",
  description: "Show bot Information!",
  usage: "botinfo",
  accessableby: "everyone",
  run: async (client, message, args) => {

    //Start

    

    const statuses = {
      online: 'Online',
      dnd: 'Do Not Disturb',
      idle: 'Idle',
      offline: 'Offline/Invisible',
    };
     const toxic = client.users.cache.get("480285300484997122");
 const yash = client.users.cache.get("539385330923601930");

    const embed = new MessageEmbed()
      .setTitle(client.user.username)
                .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
      .setColor(COLOR)
      .addField('OWNER ID:', "480285300484997122 & 539385330923601930" , true)
      .addField('BOT ID:', `${client.user.id}`, true)
      .addField('STATUS:', statuses[client.presence.status], true)
    .addField('BOT COUNT:',client.users.,)
    .addField('LIBRARY:', 'V12', true)
    .addField('CREATED ON:','VPS/WINDOWS 10X', true)
    .setDescription(`**AUTHOR:**
UDIT & YASH
**BOT OWNERS:**

<@480285300484997122>
<@539385330923601930>`)
       
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
    
  }
};