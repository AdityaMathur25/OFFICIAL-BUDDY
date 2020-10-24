const d = require("easy-json-database")
const db = new d("./black.json")
module.exports = {
  name: "blocklist",
  description: "block channel for Antilnks!",
  aliases: ["blc"],
  category: "settings",
  usage: ",blocklisr <#channel>",
  run: async (client, message, args) => {
     let channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`black_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`${channel} is now blacklist channel for Anti-Links!`) //send success message
  
  }}




  