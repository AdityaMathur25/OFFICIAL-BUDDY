const bot = require('lavaplayer')
const music = new bot.Client("yt-api-key")

 

module.exports = {

  name: "join",

  description: "join  the voice channel",

  category: "music",

  run: (client, message, args) => {

    music.join("joined vc ") // bot join the voice channel and play song 

}}