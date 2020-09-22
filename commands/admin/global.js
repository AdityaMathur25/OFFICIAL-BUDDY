module.exports = {
  name:"",
  category:"",
  description:"MAKE CHANNEL FOR GLOBAL CHAT NAME HIM #global",
  run: async (client, message, arg) => {
   
  
    if(message.channel.name == '' && !message.author.bot){
      client.guilds.cache.forEach(guild=>{
        if(guild == message.guild) return;
        let channel = guild.channels.cache.find(ch=>ch.name === 'iphone-network');
        if(!channel) return;
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag +" ", message.author.displayAvatarURL())
        .setColor("#00c1ff")
        .setDescription(message.content)
        .setFooter(message.guild.name, (message.guild.iconURL({ dynamic: true })))
        .setTimestamp()
        channel.send(embed)
      })
    }
   })
  
  
  
}
}