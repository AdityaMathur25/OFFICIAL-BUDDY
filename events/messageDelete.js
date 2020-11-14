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

    const embed = new MessageEmbed()
.setThumbnail(message.author.displayAvatarURL({dynamic: true}) )
    .setTitle("Message Deleted")

    .setDescription(`Message deleted in <#${message.channel.id}`)
.addField(`by **${message.author.tag}${message.content}`)

    .setTimestamp()

    .setColor("RANOM")

    return client.channels.cache.get(modlog.channel).send(embed);

}