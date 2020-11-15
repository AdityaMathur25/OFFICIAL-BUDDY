const {MessageEmbed} = require("discord.js");

const db = require("quick.db");

module.exports.run = async (client, message) => {

    if (message.partial) await message.fetch();

    // In before, this will help you to fetch or get the previous content since the bot get started.

    let modlog = db.get(`moderation.${message.guild.id}.modlog`);

    if (!modlog) return;

    // Return if it's not enabled.

    if (message.channel.id === modlog.channel) return;

    // This will prevent any chaos when deleting some message inside the modlog.

    let toggle = modlog.toggle;

    if (!toggle || toggle == null || toggle == false) return;

  let Embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Message Deleted!`)
    .setDescription(`A Message Is Deleted | Author : <@${message.author.id}>`)
    .addField(`Message`, message.content, true)
    .setTimestamp();

    return client.channels.cache.get(modlog.channel).send(Embed);

}