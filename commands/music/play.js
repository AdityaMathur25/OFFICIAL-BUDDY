const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");

module.exports ={
 name:"play",
  category:"music",
  description: "play music",
  run: async  (client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel)
      return message.channel.send(
        "I'm sorry but you need to be in a voice channel to play music!"
      );
    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.channel.send(
        "I cannot connect to your voice channel, make sure I have the proper permissions!"
      );
    if (!permissions.has("SPEAK"))
      return message.channel.send(
        "I cannot speak in this voice channel, make sure I have the proper permissions!"
      );
    const youtube = new YouTube(client.config.api);
    var searchString = args.join(" ");
    if (!searchString)
      return message.channel.send("You didn't poivide want i want to play");
    const serverQueue = message.client.queue.get(message.guild.id);
    var videos = await youtube.searchVideos(searchString).catch(console.log);
    var songInfo = await videos[0].fetch().catch(console.log);

    const song = {
      id: songInfo.video_id,
      title: Util.escapeMarkdown(songInfo.title),
      url: songInfo.url,
      thumbnail: songInfo.thumbnails.high.url,
    };

    if (serverQueue) {
      serverQueue.songs.push(song);
      console.log(serverQueue.songs);
      const QUEUE = new MessageEmbed();
      QUEUE.setAuthor("SONG ADDED TO QUEUE!", message.author.displayAvatarURL({dynamic: true}))//queue also playing..
      QUEUE.setDescription(`[${song.title}]`)
      QUEUE.setThumbnail(song.thumbnail)
      QUEUE.setColor("RED")
      QUEUE.setFooter("maded by buddy")
      QUEUE.setTimestamp();
      message.channel.send(QUEUE);
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
        queue.voiceChannel.leave();
        message.client.queue.delete(message.guild.id);
        return;
      }

      const dispatcher = queue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
          queue.songs.shift();
          play(queue.songs[0]);
        })
        client.on("error", (error) => console.error(error));
      dispatcher.setVolumeLogarithmic(queue.volume / 100); 
      const playEmbed = new MessageEmbed() 
      .setAuthor("STARTED PLAYING", message.author.displayAvatarURL({dynamic: true})) 
      .setDescription(`[${song.title}]`) 
      .setThumbnail(song.thumbnail) 
      .setColor("#00FFFF")
       .setTimestamp();
        playEmbed.setFooter(`requested by ${message.author.username}`);
      queue.textChannel.send(playEmbed);
    }; //thumbnail works only in embed
//make a embed.
    try {
      const connection = await channel.join();
      queueConstruct.connection = connection;
      play(queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return message.channel.send(
        `I could not join the voice channel: ${error}`
      );
    }
}
  }