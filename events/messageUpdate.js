const { MessageEmbed } = require("discord.js");

const db = require("quick.db");

const Color = `RANDOM`;

 

module.exoprts.run = async( oldMessage, newMessage, client) => {



  if (oldMessage.content.toLowerCase() === newMessage.content.toLowerCase())

    return;

  let Channel = await db.fetch(`Logging_${oldMessage.guild.id}`);

  if (Channel === null) return;

  let Embed = new MessageEmbed()

    .setColor(Color)

    .setTitle(`Message Edited!`)

    .setDescription(`A Message Is Edited | Author : <@${oldMessage.author.id}>`)

    .addField(`Old`, oldMessage.content, true)

    .addField(`New`, newMessage.content, true)

    .setTimestamp();

  return client.channels.cache.get(Channel).send(Embed);

};