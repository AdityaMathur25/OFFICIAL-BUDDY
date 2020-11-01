const db = require("quick.db")
module.exports = {
  name: "setafj",
  category: "support",
  description: "if u are bussy use this command",
  usage: "!setafk <@reason>",
  aliases: ["afk"], 
  run: async(client, message, args ) => {
              if(args[0] === null) args[0] = "None";
         db.set(`afk_${message.guild.id}_user_${message.author.id}`, message.author)
         db.set(`afk_${message.guild.id}_reason_${message.author.id}`, args[1])
         db.set(`afk_${message.guild.id}_f_${message.author.id}`, message.author.id)

         message.channel.send(`${message.author} You'r Afk With ${args[1]} Reason.!`)

    
    
    }} 
  
    