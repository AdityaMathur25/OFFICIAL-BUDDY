const Discord = require("discord.js")

const   mongoose  = require('quickmongo');
const db = new mongoose.Database("mongodb+srv://Buddy:12345@cluster0.qqght.gcp.mongodb.net/test");

module.exports = {

  name: "setwimg",

  category: "settings",

  usage: "setwelcomeimage <@enable>",

  description: "say enable to enable welcome image",

  aliases:["en"],

  run: (client, message, args) => {

    

    let Content = message.mentions.channels.first();//mentioned channel

    //NOO

//U DO VERIFY 

         if(!Content) { //if channel is not mentioned

      return message.channel.send("give channel for sending welcome image")

    }

    

    //Now we gonna use quick.db

    

    db.set(`image_${message.guild.id}`, Content.id) //set id in var

    

    message.channel.send(`welcome image channel is seted as  ${Content}`) //send success message

  }

}