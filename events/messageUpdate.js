const {MessageEmbed} = require("discord.js");

const db = require("quick.db");

module.exports.run = async (client, newMessage, oldMessage) => {

    // In before, this will help you to fetch or get the previous content since the bot get started.

    let modlog = db.get(`moderation.${oldMessage.guild.id}.modlog`);

    if (!modlog) return;

    // Return if it's not enabled.

    if (oldMessage.channel.id === modlog.channel) return;

    // This will prevent any chaos when deleting some message inside the modlog.

    let toggle = modlog.toggle;

    if (!toggle || toggle == null || toggle == false) return;

    const embed = new MessageEmbed()

.setThumbnail(oldMessage.author.displayAvatarURL({dynamic: true}) )

    .setTitle("Message EDITED")

    .setDescription(`Message deleted in <#${oldMessage.channel.id}>`)
    .addField("BEFORE :", `\n> ${newMessage.content}`, true)
    .addField("AFTER :", `\n> ${oldMessage.content}`, true)
   
    .setTimestamp()

.setFooter(oldMessage.guild.name+ " | EDITOR: " + oldMessage.author.username)

    .setColor("RANDOM")

    return client.channels.cache.get(modlog.channel).send(embed);

}