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
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds.`
    }

    

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
    .addField('SERVERS:', client.guilds.cache.size, true)
    .addField('MEMBERS:', client.users.cache.size,true)
    .addField('CHANNELS:', client.channels.cache.size, true)
    .addField('PLAYING MUSIC', `${client.voice.connections.size} Server !`, true )
    .addField('UPTIME:',`${duration(client.uptime)}`, true)
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