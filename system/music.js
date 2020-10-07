//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");
const { MessageEmbed } = require("discord.js")
const { QUEUE_LIMIT, COLOR } = require("../config.json");
const prism = require("prism-media");
  

module.exports, args = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
let embed = new M
    let input = song.url
sageEmbed()
.setColor(COLOR);

    if (!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id);
      embed.setAuthor("MUSIC QUEUE IS ENDED NOW :/")
      return queue.textChannel
        .send(embed)
      const transcoder = new prism.FFmpeg({
    args: args,
  })
     
      
     .try({

const stream = input.pipe(transcoder).on("error", (error) => {

console.log("errorplaying")

  })
    })}
     catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      if (error.message.includes === "copyright") {
        return message.channel.send("THIS VIDEO CONTAINS COPYRIGHT CONTENT");
      } else {
        console.error(error);
      }
    }
    

    const dispatcher = queue.connection
      .play(stream,)
      .on("finish", () => {
        if (queue.loop) {
          let lastsong = queue.songs.shift();
          queue.songs.push(lastsong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", console.error);
  
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
embed.setAuthor("Started Playing Song", message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`**[${song.title}](${song.url})**`)
    .setThumbnail(song.thumbnail)
    .setFooter(`REQUESTED BY ${message.author.username}`)
    queue.textChannel
      .send(embed)
      .catch(err => message.channel.send("UNABLE TO PLAY SONG"));
  }
};
