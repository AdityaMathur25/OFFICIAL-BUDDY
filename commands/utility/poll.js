const { MessageEmbed } = require("discord.js")
module.exports = {
 
  name: "poll",
  description: "poll in channel  for votes :)",
  usage: "poll <#channel> <$message>",
  category: "utility",
  run: async (client, message, args) =>{
            let pollChannel = message.mentions.channels.first();
    if(!pollChannel){
      return message.channel.send("Mention channel!")
      }
        let pollDescription = args.slice(1).join(' ');
if(!pollDescription){
  return message.channel.send("PROVIDE YOUR TEXT!")
  }
        let embedPoll = new MessageEmbed()
        .setTitle('NEW POLL! | '+ message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .setDescription(pollDescription)
        .setColor('RANDOM')
        .setTimestamp()
      let  chx =  client.channels.cache.get(pollChannel.id)
        let msgEmbed = await chx.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    return message.channel.send("SUCCESSFULLY ADDED POLL In"+ pollChannel)
    
    }}