const db = require("quick.db")
module.exports = {
  
 name: "setafk",
  description: "",
  aliases: [""],
  category: "utility",
  run: async(client, message, args) =>{
    client.on('message', async message => {

     let prefix = '#'

     if(message.content.startsWith(prefix + 'afk')) {

let args = message.content.slice(prefix.length).trim().split(/ +/)

           if(args[0] === null) args[0] = "None";

         db.set(`afk_${message.guild.id}_user_${message.author.id}`, message.author)

         db.set(`afk_${message.guild.id}_reason_${message.author.id}`, args[1])

         db.set(`afk_${message.guild.id}_f_${message.author.id}`, message.author.id)

         message.channel.send(`${message.author} You'r Afk With ${args[1]} Reason.!`)

      }

 })

 