const db = require("quick.db")
const { discord, MessageEmbed }= require("discord.js")
module.exports = {
  name: "montior",
   category: "info",
   usage: " montior your url ",
   description: "monitor your website",
  run: async(client, message, args ) => {
    let url = args.join(" ").includes("https://")
    if(!url){
      return message.channel.send("PLEASE PROVIDE VAILD url")
      }
    
    db.set(`url_${message.author.id}`, url)
   return message.channel.send(`added your website to montioring!`)
    
    }}