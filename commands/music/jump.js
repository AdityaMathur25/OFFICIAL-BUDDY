const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../../config.json");

module.exports = {

  name: "jump",

  description: "Jump to any song you like",
category: "music",
  run: async (client, message, args) => {

    

    if (!args.length)
      return message
        .reply(`Usage: ${message.client.prefix}${module.exports.name} <Queue Number>`)
        .catch(console.error);

    if (isNaN(args[0]))
      return message
        .reply(`Usage: ${message.client.prefix}${module.exports.name} <Queue Number>`)
        .catch(console.error);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);

    if (args[0] > queue.songs.length)
      return message.reply(`The queue is only ${queue.songs.length} songs long!`).catch(console.error);

    queue.playing = true;
    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
    queue.connection.dispatcher.end();
    let jump = new MessageEmbed()
    .setTitle(  message.author.username + " |  "+message.guild.name)
    .setDescription(`JUMP TO  - **${args[0]}th SONG!**`)
    .setFooter("REQUESTED BY " + message.author.username)
    .setTimestamp()
    .setColor("#00FFFF")
    queue.textChannel.send(jump).catch(console.error);
  }
}
    

  

