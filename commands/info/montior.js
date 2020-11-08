const  db = require("quick.db")
module.exports = {

    name: "monitor",

    description: "montor your website ",

    category: "info",

  
 run: async (client, message, args ) => {
      let url = args.join("").includes("https://")
      if (!url){
        return message.channel.send(`not provided a vaild url`)
   }
    db.set(`url_${message.author.id}`, url)

  
   return message.channel.send("Successfully Added Your website To Monitoring")
   
   }}