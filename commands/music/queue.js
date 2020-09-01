  const { MessageEmbed }= require("discord.js")
  module.exports = {
    name: "queue",
    Description:"show playing music",
    category:"music",
run:  (client, message, args) => {
const serverQueue = message.client.queue.get(message.guild.id);
const NOT = new MessageEmbed();
  NOT.setTitle(`${message.author}`)
  NOT.setDescription("THERE IS NOTHING TO PLAY !")
  NOT.setColor("#00FFFF")
  NOT.setFooter("CREATED BY BUDDY")
  if (!serverQueue) 
    return message.channel.send(NOT);
  const MUSIC = new MessageEmbed();
  MUSIC.setAuthor("QUEUE SONGS!", message.author.displayAvatarURL({dynamic: true}))
  MUSIC.setColor("GREEN")
  MUSIC.setDescription(`${serverQueue.songs.map((song) => `**-** ${song.title}`).join("\n")}**Now playing:** ${serverQueue.songs[0].title}`)
  MUSIC.setFooter(`REQUESTED BY  ${message.author.username}`)
  MUSIC.setTimestamp();
  return message.channel.send(queue);
}
  }