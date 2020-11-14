const {MessageEmbed} = require("discord.js");

const db = require("quick.db");

module.exports.run = async (client, oldState, newState) => {

    // In before, this will help you to fetch or get the previous content since the bot get started.

    let modlog = db.get(`moderation.${oldState.guild.id}.modlog`);

    if (!modlog) return;

    // Return if it's not enabled.


    // This will prevent any chaos when deleting some message inside the modlog.

    let toggle = modlog.toggle;

    if (!toggle || toggle == null || toggle == false) return;
if(oldState === true){
    const embed = new MessageEmbed()
.setTitle("MEMBER LEFT VC!")
    .setDescription(`${oldState.member} Left voice channel  \n> ${oldState.channel}`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(oldState.guild.name+" | NAME: "+ oldState.member.username)
    client.channels.cache.get(modlog.channel).send(embed)
}
   if(newState === true){

    const embed = new MessageEmbed()

.setTitle("MEMBER JOIN VC!")

    .setDescription(`${newState.member} Join voice channel  \n> ${newState.channel}`)

    .setColor("GREEN")

    .setTimestamp()

    .setFooter(newState.guild.name+" | NAME: "+ newState.member.username)

    client.channels.cache.get(modlog.channel).send(embed)

}
   
  }