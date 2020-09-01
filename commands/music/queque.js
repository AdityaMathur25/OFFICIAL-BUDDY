const MessageEmbed = require("discord.js")
module.exports = {
  name: "queue",
  category: "music",
  description: "show queue music ",
run:  (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("There is nothing playing.");
  const queue = new MessageEmbed();
  queue.setAuthor("QUEUE SONGS!", message.author.displayAvatarURL({dynamic: true}))
  queue.setDescription(`${serverQueue.songs.map((song) => `**-** ${song.title}`).join("\n")}
**Now playing:** ${serverQueue.songs[0].title}`)
  queue.setColor("GREEN")
  queue.setTimestamp();
  queue.setFooter("REQUESTED BY ", message.author.username)
  return message.channel.send(queue);
  
}
}