const { MessageEmbed } = require("discord.js");

const db = require("quick.db");

const Color = `RANDOM`;

 

module.exports.run= async(client, message) => {

  let Channel = await db.fetch(`Logging_${message.guild.id}`);

  if (Channel === null) return;

  let Embed = new MessageEmbed()

    .setColor(Color)

    .setTitle(`Message Deleted!`)

    .setDescription(`A Message Is Deleted | Author : <@${message.author.id}>`)

    .addField(`Message`, message.content, true)

    .setTimestamp();

  return client.channels.cache.get(Channel).send(Embed);

} 