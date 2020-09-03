const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const { message  } = require("discord.js")

module.exports = {
  
    name: "play",
  category: "music",
    description: "To play songs :D",
    usage: "<song_name>",
    aliases: ["p"],
  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    const vc = new MessageEmbed();
    vc.setAuthor(message.author.username, message.author.displayAvatarURL())
vc.setTitle("ERROR ON PLAYING")
vc.setDescription("I AM SORRY BUT YOU HAVE TO BE IN VOICE CHANNEL TO PLAY MUSIC !")
vc.setColor("RED")
vc.setTimestamp();
vc.setFooter(`REQUESTED BY${message.author.username}`)

    if (!channel)return message.channel.send(vc, message.channel);
     const connect = new MessageEmbed();
connect.setAuthor(message.author.username, message.author.displayAvatarURL())
.setTitle("ERROR ON PLAYING")
.setDescription("I CAN NOT SPEAK TO YOUR VOICE CHANNEL MAKE SURE I HAVE PROPER PERMISSION")
.setColor("RED")
.setTimestamp();
    const speak = new MessageEmbed();
speak.setAuthor(message.author.username, message.author.displayAvatarURL())
speak.setTitle("ERROR ON PLAYING")
speak.setDescription("I CAN NOT SPEAK ON VOICE CHANNEL MAKE SURE I HAVE PROPER PERMISSION")
speak.setColor("RED")
speak.setTimestamp();

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))return message.channel.send(connect, message.channel);
    if (!permissions.has("SPEAK"))return message.channel.send(speak, message.channel);

    var searchString = args.join(" ");
    const nplay = new MessageEmbed();
nplay.setAuthor(message.author.username, message.author.displayAvatarURL())
nplay.setTitle("ERROR ON PLAYING")
nplay.setDescription("YOU NOT PROVIDED WHAT I WANT TO PLAY")
nplay.setColor("RED")
nplay.setTimestamp();

    if (!searchString)return message.channel.send(nplay, message.channel);

    var serverQueue = message.client.queue.get(message.guild.id);
const fgplay = new MessageEmbed();
fgplay.setAuthor(message.author.username, message.author.displayAvatarURL())
fgplay.setTitle("ERROR ON PLAYING")
fgplay.setDescription("LOOKS LIKE I WAS UNABLE TO FIND SONG ON YOUTUBE")
fgplay.setColor("RED")
fgplay.setTimestamp();

    var searched = await yts.search(searchString)
    if(searched.videos.length === 0)return message.channel.send(fgplay, message.channel)
    var songInfo = searched.videos[0]

    const song = {
      id: songInfo.videoId,
      title: Util.escapeMarkdown(songInfo.title),
      views: String(songInfo.views).padStart(10, ' '),
      url: songInfo.url,
      ago: songInfo.ago,
      duration: songInfo.duration.toString(),
      img: songInfo.image,
      req: message.author
    };

    if (serverQueue) {
      serverQueue.songs.push(song);
      let thing = new MessageEmbed()
      .setAuthor("Song has been added to queue", song.req.displayAvatarURL({ dynamic: true }))
      .setThumbnail(song.img)
      .setColor("YELLOW")
      .addField("Name", song.title, true)
      .addField("Duration", song.duration, true)
      .addField("Requested by", song.req.tag, true)
      .setFooter(`Views: ${song.views} | ${song.ago}`)
      return message.channel.send(thing);
    }

    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: channel,
      connection: null,
      songs: [],
      volume: 100,
      playing: true,
    };
    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);

    const play = async (song) => {
      const queue = message.client.queue.get(message.guild.id);
      if (!song) {
        const end = new MessageEmbed();
        end.setAuhtor(message.auhtor.username, message.auhtor.displayAvatarURL({dynamic: true}))
        end.setDescription("MUSIC QUEUE IS ENDED !")
        end.setColor("aqua")
        end.setFooter(`REQUESTED BY ${message.author.username}`)
        message.channel.send(end, message.channel)
        queue.voiceChannel.leave();//If you want your bot stay in vc 24/7 remove this line :D
        message.client.queue.delete(message.guild.id);
        return;
      }

      const dispatcher = queue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
          queue.songs.shift();
          play(queue.songs[0]);
        })
        .on("error", (error) => console.error(error));
      dispatcher.setVolumeLogarithmic(queue.volume / 100);
      let thing = new MessageEmbed()
      .setAuthor("Started Playing Music!", song.req.displayAvatarURL({ dynamic: true }))
      .setThumbnail(song.img)
      .setColor("BLUE")
      .addField("Name", song.title, true)
      .addField("Duration", song.duration, true)
      .addField("Requested by", song.req.tag, true)
      .setFooter(`Views: ${song.views} | Ago: ${song.ago}`)
      queue.textChannel.send(thing);
    };

    try {
      const connection = await channel.join();
      queueConstruct.connection = connection;
      channel.guild.voice.setSelfDeaf(true)
      play(queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
    return message.channel.send(`I could not join the voice channel: ${error}`, message.channel);
    
    }
  }
  }

