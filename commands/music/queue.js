  
  module.exports = {
run:  (client, message, args) => {

  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("There is nothing playing.");
  const queue = new MessageEmbed();
  queue.setAuthor("QUEUE SONGS!", message.author.displayAvatarURL({dynamic: true}))
  queue.setColor("GREEN")
  queue.setDescription(`${serverQueue.songs.map((song) => `**-** ${song.title}`).join("\n")}
  queue.setFooter("REQUESTED BY ", message.author.username)
  queue.setTimestamp();
  return message.channel.send(queue);
**Now playing:** ${serverQueue.songs[0].title}`)
const MessageEmbed = require("discord.js")
}
  }