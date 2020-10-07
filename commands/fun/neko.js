const { Random } = require("random-thing-for-discord");
const random = new Random();
const got = require("got");
module.exports = {
  name: "neko",
  category: "fun",
  description: "Get Fresh Neko Images :D",
  run: async (client, message, args) => {
    if (message.author.bot) return;
    let nekos = await Random.getNeko();
    message.channel.send(nekos);
  }

  // This code is for Index.js code
};
