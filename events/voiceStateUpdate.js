const {MessageEmbed} = require("discord.js");

const db = require("quick.db");

module.exports.run = async (client, oldState, newState) => {

    // In before, this will help you to fetch or get the previous content since the bot get started.

    let modlog = db.get(`moderation.${oldState.guild.id}.modlog`);

    if (!modlog) return;

    // Return if it's not enabled.

    if (oldState.channel.id === modlog.channel) return;

    // This will prevent any chaos when deleting some message inside the modlog.

    let toggle = modlog.toggle;

    if (!toggle || toggle == null || toggle == false) return;
if(oldState){
    const embed = new MessageEmbed()
.setTitle("MEMBER JOIN VOICECHANNEL!")
    .setDescription(`${oldState.author} joined voice channel in \n> ${oldState.channel}`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(oldState.guild.name+" | NAME: "+ oldState.author.tag)
}
}