const { Random } = require("something-random-on-discord")

const random = new Random();

module.exports = {
  name: "meme",
  category: "fun",
  description: "Get fresh meme :D",
  run: async (client, message, args) => {
    
    let data = await random.getMeme()
    message.channel.send(data)
  }
}