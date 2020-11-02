const ytdl = require('ytdl-core-discord');

var scrapeYt = require("scrape-yt");

const discord = require('discord.js')

module.exports = {
  name: "play",
  category: "music",
  description: "play and feel the song",
  aliases: ["p"],
run: async (client, message, args) => {
if(!args[0]) return message.channel.send('You didn\'t provide a song to play!')
    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send('You need to join a voice channel to play a music!')

    if (!channel.permissionsFor(message.client.user).has("CONNECT")) return message.channel.send('I don\'t have permission to join the voice channel')
    if (!channel.permissionsFor(message.client.user).has("SPEAK"))return message.channel.send('I don\'t have permission to speak in the voice channel')


    const server = message.client.queue.get(message.guild.id);
    let video = await scrapeYt.search(args.join(' '))
    let result = video[0]

    const song = {
        id: result.id,
        title: result.title,
        url:`https://www.youtube.com/watch?v=${result.id}`,
        duration: result.duration,
        thumbnail: result.thumbnail,
        upload: result.uploadDate,
        views: result.viewCount,
        requester: message.author,
        channel: result.channel.name,
        channelurl: result.channel.url,
      
      };

    var date = new Date(0);
    date.setSeconds(song.duration); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);

      if (server) {
        server.songs.push(song);
        console.log(server.songs);
        let embed = new discord.MessageEmbed()
        .setTitle('Added to queue!')
        .setColor('#67ffff')
        .addField('Name', `**[${song.title}](${song.url})**`, true)
        .setThumbnail(song.thumbnail)
        
        .setFooter(`REQUESTED BY ${message.author.tag}`)
        .addField('Duration', timeString, true)
        .setTimestamp()
        return message.channel.send(embed)
    }

    const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: channel,
        connection: null,
        songs: [],
        volume: 100,
        playing: true,
      loop: false,
    };
    message.client.queue.set(message.guild.id, queueConstruct);
  queueConstruct.songs.push(song);


    const play = async song => {
        const queue = message.client.queue.get(message.guild.id);
        if (!song) {
            queue.voiceChannel.leave();
            message.client.queue.delete(message.guild.id);
          let g = new discord.MessageEmbed()
          .setTitle("MUSIC-QUEUE! | "+ message.guild.name)
          .setThumbnail(message.guild.iconURL())
          .setColor("BLUE")
          .setDescription("MUSIC QUEUE ENDED!")
          .setFooter("REQUESTD BY "+message.author.username)
          .setTimestamp()
            message.channel.send(g)
            return;
        }

        const dispatcher = queue.connection.play(await ytdl(`https://youtube.com/watch?v=${song.id}`, {
            filter: format => ['251'],
            highWaterMark: 1 << 25
        }), {
            type: 'opus'
        })
            .on('finish', () => {
                queue.songs.shift();
                play(queue.songs[0]);
            })
        
            .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(queue.volume / 100);
        let noiceEmbed = new discord.MessageEmbed()
        .setTitle("<a:music:771636033753186315>" + "STARTED PLAYING"+ "<a:music:771636033753186315>")
        .setThumbnail(song.thumbnail)
        .addField('Name',`[${song.title}](${song.url})`,true)
        .setFooter(`REQUESTED BY ${message.author.tag}`)
 .setColor("#00FFFF")
        .addField('Duration', timeString, true)
        .setTimestamp()
        queue.textChannel.send(noiceEmbed);
    };


     
   
    try {
        const connection = await channel.join();
        queueConstruct.connection = connection;
        play(queueConstruct.songs[0]);
    } catch (error) {
        console.error(`I could not join the voice channel`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send(`I could not join the voice channel: ${error}`);
    }
}}