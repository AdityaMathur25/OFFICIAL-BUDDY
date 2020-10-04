











          play(queue.songs[0]);
          queue.songs.shift();
        .on("error", (error) => console.error(error));
        .on("finish", () => {
        .play(ytdl(song.url))
        message.client.queue.delete(message.guild.id);
        queue.voiceChannel.leave();//If you want your bot stay in vc 24/7 remove this line :D
        return;
        sendError("Leaving the voice channel because I think there are no songs in the queue. If you like the bot stay 24/7 in voice channel go to `commands/play.js` and remove the line number 61\n\nThank you for using my code! [GitHub](https://github.com/SudhanPlayz/Discord-MusicBot)", message.channel)
        })
      .addField("Duration", song.duration, true)
      .addField("Duration", song.duration, true)
      .addField("Name", song.title, true)
      .addField("Name", song.title, true)
      .addField("Requested by", song.req.tag, true)
      .addField("Requested by", song.req.tag, true)
      .setAuthor("Song has been added to queue", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      .setAuthor("Started Playing Music!", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      .setColor("BLUE")
      .setColor("YELLOW")
      .setFooter(`Views: ${song.views} | ${song.ago}`)
      .setFooter(`Views: ${song.views} | ${song.ago}`)
      .setThumbnail(song.img)
      .setThumbnail(song.img)
      ago: songInfo.ago,
      await channel.leave();
      channel.guild.voice.setSelfDeaf(true)
      connection: null,
      console.error(`I could not join the voice channel: ${error}`);
      const connection = await channel.join();
      const dispatcher = queue.connection
      const queue = message.client.queue.get(message.guild.id);
      dispatcher.setVolumeLogarithmic(queue.volume / 20);
      duration: songInfo.duration.toString(),
      id: songInfo.videoId,
      if (!song) {
      img: songInfo.image,
      let thing = new MessageEmbed()
      let thing = new MessageEmbed()
      message.client.queue.delete(message.guild.id);
      play(queueConstruct.songs[0]);
      playing: true,
      queue.textChannel.send(thing);
      queueConstruct.connection = connection;
      req: message.author
      return message.channel.send(thing);
      return sendError(`I could not join the voice channel: ${error}`, message.channel);
      serverQueue.songs.push(song);
      songs: [],
      textChannel: message.channel,
      title: Util.escapeMarkdown(songInfo.title),
      url: songInfo.url,
      views: String(songInfo.views).padStart(10, ' '),
      voiceChannel: channel,
      volume: 100,
      }
    aliases: ["p"],
    const channel = message.member.voice.channel;
    const permissions = channel.permissionsFor(message.client.user);
    const play = async (song) => {
    const queueConstruct = {
    const sendError = message.channel.send
    const song = {
    description: "To play songs :D",
    if (!channel)return message.channel.send("I'm sorry but you need to be in a voice channel to play music!", message.channel);
    if (!permissions.has("CONNECT"))return message.channel.send("I cannot connect to your voice channel, make sure I have the proper permissions!", message.channel);
    if (!permissions.has("SPEAK"))return message.channel.send("I cannot speak in this voice channel, make sure I have the proper permissions!", message.channel);
    if (!searchString)return message.channel.send("You didn't poivide want i want to play", message.channel);
    if (serverQueue) {
    if(searched.videos.length === 0)return message.channel.send("Looks like i was unable to find the song on YouTube", message.channel)
    message.client.queue.set(message.guild.id, queueConstruct);
    name: "play",
    queueConstruct.songs.push(song);
    try {
    usage: "<song_name>",
    var searchString = args.join(" ");
    var searched = await yts.search(searchString)
    var serverQueue = message.client.queue.get(message.guild.id);
    var songInfo = searched.videos[0]
    }
    }
    } catch (error) {
    };
    };
    };
  run: async  (client, message, args) => {
  }
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const { Util, MessageEmbed } = require("discord.js");
module.exports = {
};