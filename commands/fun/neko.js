const { Random } = require("something-random-on-discord")
const random = new Random();
 const got = require("got")
module.exports = {
  name: "neko",
   category: "fun",
 description: "Get Fresh Neko Images :D",
run: async (client, message, args) => {

if (message.author.bot)  {
got("https://nekos.life/api/v2/img/neko").then(r => {
let nekos = JSON.parse(r.body).url
message.channel.send(nekos)
})
}

// This code is for Index.js code
}
}
 