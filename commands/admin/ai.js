const   db = require('quick.db');
const fetch = require("node-fetch");


module.exports = {

  name: "chat",

  category: "utility",

  aliases: ["ai"],

  description: "chat with ai ",

  run: async (client, message, args) => {


   let mesg = args.join(" ");
    if (!mesg) return message.channel.send("Please say something.");
    
    // part one
    // fetch(`http://api.brainshop.ai/get?bid={YOUR_BRAIN_ID}&key={YOUR_API_KEY}&uid=1&msg=${encodeURIComponent(mesg)}`)
    // .then(res => res.json())
    // .then(data => {
    // message.channel.send(data.cnt);
    // });
    
    // part two
    fetch(`http://api.brainshop.ai/get?bid=154020&key=Z5K9gtE7WyGKTCdx&uid=[uid]&msg=[msg]/chatbot?message=${encodeURIComponent(mesg)}`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(data.response);
    });
}
}