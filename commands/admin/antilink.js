const Discord = require("discord.js")

const db = require("quick.db")

module.exports = {

  name: "setantilink",

  category: "settings",

  usage: "setantilink <@type: enable>",
const Discord = require("discord.js")

const db = require("quick.db")

module.exports = {

  name: "setantilink",

  category: "settings",

  usage: "setantilink <@type: enable>",

  description: "Set anti link to Enable ! ",

  aliases:["anl"],

  run: async (client, message, args) => {

    let Content = message.content.includes("enable");//mentioned channel

    //NOO

//U DO VERIFY 

         if(!Content) { //if channel is not mentioned

      return message.channel.send("you don't provide a vaild word, type: enable")

    }

    

    //Now we gonna use quick.db

    

    db.set(`${message.guild.id}`, `anti-link`) //set id in var

    

 const m =  await message.channel.send(`ANTI-LINKS ARE NOW ENABLED `)//send success message
message.react("750762554418135151")
  }

}
  description: "Set anti link to Enable ! ",

  aliases:["anl"],

  run: async (client, message, args) => {

    let Content = message.content.includes("enable");//mentioned channel

    //NOO

//U DO VERIFY 

         if(!Content) { //if channel is not mentioned

      return message.channel.send("you don't provide a vaild word, type: enable")

    }

    

    //Now we gonna use quick.db

    

    db.set(`${message.guild.id}`, `anti-link`) //set id in var

    

 const m =  await message.channel.send(`ANTI-LINKS ARE NOW ENABLED `)//send success message
message.react("750762554418135151")
  }

}