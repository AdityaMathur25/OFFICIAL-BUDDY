//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");
const { MessageEmbed } = require("discord.js")
const { QUEUE_LIMIT, COLOR } = require("../config.json");
const prism = require("prism-media");
const { streamConfig } = require("../../config.js")
                                 
module.exports = {
  async play(song, message, args) {
    const queue = message.client.queue.get(message.guild.id);
let embed = new MessageEmbed()
.setColor(COLOR);
    const transcoder = new prism.FFmpeg({

    args: args,

  });
    streamConfig.options.seek = seek;

    if (!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id);
      embed.setAuthor("MUSIC QUEUE IS ENDED NOW :/")
      return queue.textChannel
        .send(embed)
        .catch(console.error);
    }
    const ffmpegArgs = [

    "-analyzeduration",

    "0",

    "-loglevel",

    "0",

    "-f",

    "s16le",

    "-ar",

    "48000",

    "-ac",

    "2",

  ];

  const isStream = input instanceof ReadableStream;

  let d = isStream ? ffmpegArgs.slice() : ["-i", input, ...ffmpegArgs];

  args.unshift("-ss", String(seek));

    try {
      var input = song.url
      var stream = input.pipe(transcoder).on("error", (error) => {
    console.log(error);
        })
    } catch (error) {
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
      .play(stream, { type: "opus" })
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
