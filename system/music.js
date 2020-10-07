





  
          let lastsong = queue.songs.shift();
          module.exports.play(queue.songs[0], message);
          module.exports.play(queue.songs[0], message);
          queue.songs.push(lastsong);
          queue.songs.shift();
        .catch(console.error);
        .send(embed)
        console.error(error);
        highWaterMark: 1 << 25
        if (queue.loop) {
        module.exports.play(queue.songs[0], message);
        queue.songs.shift();
        return message.channel.send("THIS VIDEO CONTAINS COPYRIGHT CONTENT");
        }
        } else {
      .catch(err => message.channel.send("UNABLE TO PLAY SONG"));
      .on("error", console.error);
      .on("finish", () => {
      .play(stream, { type: "opus" })
      .send(embed)
      embed.setAuthor("MUSIC QUEUE IS ENDED NOW :/")
      if (error.message.includes === "copyright") {
      if (queue) {
      message.client.queue.delete(message.guild.id);
      queue.channel.leave();
      return queue.textChannel
      var stream = await ytdlDiscord(song.url, {
      }
      }
      } else {
      })
      });
    .setDescription(`**[${song.title}](${song.url})**`)
    .setFooter(`REQUESTED BY ${message.author.username}`)
    .setThumbnail(song.thumbnail)
    const dispatcher = queue.connection
    const queue = message.client.queue.get(message.guild.id);
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
    if (!song) {
    let put = nsk
    queue.textChannel
    try {
    }
    }
    } catch (error) {
  async play(song, message) {
  }
.setColor(COLOR);
//I WILL BE BACK AFTER 5 min
const prism = require("prism-media");
const ytdlDiscord = require("ytdl-core-discord");
const { MessageEmbed } = require("discord.js")
const { QUEUE_LIMIT, COLOR } = require("../config.json");
embed.setAuthor("Started Playing Song", message.author.displayAvatarURL({dynamic: true}))
let embed = new MessageEmbed()
module.exports = {
};