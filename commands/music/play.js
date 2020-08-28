const { MessageEmbed } = require("discord.js")




const { Util } = require("discord.js");
const { YOUTUBE_API_KEY, COLOR } = require("./config.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const { play } = require("../system/music.js");
module.exports = {
  name: "play",
  description: "Play the song and feel the music",
  category:"",
  async execute(client, message, args) {
    let embed = new MessageEmbed()
.setColor(COLOR);


    if (!args.length) {

      embed.setAuthor("WRONG SYNTAX : Type `play <URL> or text`")
      return message.channel.send(embed);
    }

    const { channel } = message.member.voice;
        
    if (!channel) {
  
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL :eyes: ")
      return message.channel.send(embed);
    }

  

    const targetsong = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const urlcheck = videoPattern.test(args[0]);

    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      embed.setAuthor("I am Unable To Play Playlist for now")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };
    
    const voteConstruct = {
      vote: 0,
      voters: []
    }

    let songData = null;
    let song = null;
let url = null;
    if (urlcheck) {
      try {
       let songinfo = await ytdl.getInfo(url);
let song = {
    title: songinfo.videoDetails.title,
    url: songinfo.videoDetails.video_url,



          duration: songData.length_seconds
        };
      } catch (error) {
        if (message.include === "copyright") {
          return message
            .reply("THERE IS COPYRIGHT CONTENT IN VIDEO -_-")
            .catch(console.error);
        } else {
          console.error(error);
        }
      }
    } else {
      try {
        const result = await youtube.searchVideos(targetsong, 1);
   let songinfo = await ytdl.getInfo(result[0].url);
        song = {
          
    title: songinfo.videoDetails.title,
    url: songinfo.videoDetails.video_url,


      
        };
      } catch (error) {
        console.log(error)
        if(error.errors[0].domain === "usageLimits") {
          return message.channel.send("Your YT API limit is over and it will be restored under 24 hours")
        }
      }
    }

    if (serverQueue) {
        if(serverQueue.songs.length > Math.floor(QUEUE_LIMIT - 1) && QUEUE_LIMIT !== 0) {
      return message.channel.send(`You can not add songs more than ${QUEUE_LIMIT} in queue`)
    }
      serverQueue.songs.push(song);
      embed.setDescription(`\`${song.title}\`, Song Added to queue`)
      embed.setFooter(`${song.duration} Seconds`)
      embed.setThumbnail(client.user.displayAvatarURL())
      
      return serverQueue.textChannel
        .send(embed)
        .catch(console.error);
    } else {
      queueConstruct.songs.push(song);
    }

    if (!serverQueue)
      message.client.queue.set(message.guild.id, queueConstruct);
       message.client.vote.set(message.guild.id, voteConstruct);
    if (!serverQueue) {
      try {
        queueConstruct.connection = await channel.join();
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(`Could not join voice channel: ${error}`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel
          .send({
            embed: {
              description: `😭 | Could not join the channel: ${error}`,
              color: "#ff2050"
            }
          })
          .catch(console.error);
      }
    }
  }
};
