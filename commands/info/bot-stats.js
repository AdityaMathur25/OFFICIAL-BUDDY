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
      .setTitle(client.user.username, client.user.displayAvatarURL({dynamic: true}))
      .setColor(COLOR)
      .addField('BOT NAME', client.user.tag, true)
      .addField('ID', `${client.user.id}`, true)
      .addField('Status', statuses[client.presence.status], true)
    .addField('CREATED ON:','VPS/WINDOWS 10X', true)
    .setDescription(`**BOT OWNERS:**
<@480285300484997122>
<@539385330923601930>`)
       
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
    
  }
};