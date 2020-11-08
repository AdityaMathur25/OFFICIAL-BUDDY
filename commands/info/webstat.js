const  db = require("quick.db")

module.exports = {

    name: "webstat",

    description: "monitor info your website ",

    category: "info",

  

 run: async (client, message, args ) => {

 let g = db.fetch(`url_${message.author.id}`)
  message.channel.send(g) 

  }}