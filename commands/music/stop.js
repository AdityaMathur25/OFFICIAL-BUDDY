const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json");



const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stop the music and take rest ;)",
  category: "music",
  aliases: ["s","st"],
  run:(client, message, args) => {
    
    
let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL :/")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("There is nothing playing that i could stop")
      return message.channel.send(embed);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  message.react("750762554418135151")
  channel.leave();
    
  }
}
    
  

