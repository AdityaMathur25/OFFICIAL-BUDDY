 const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {

    name: "suggest",

    description: "Make a suggestion and have the community vote",

    category: "support",

    usage: "i!suggest <suggestion>",

    run: async (client, message, args) => {

        let suggestion = args.slice(0).join(" ");
let channel =  db.get(`sschannel_${message.guild.id}`);
        let SuggestionChannel = client.channels.cache.get(channel)

      

      if(!suggestion) {

        return message.reply("Please describe what you want to suggest!")

      }

      

      

        const embed = new MessageEmbed()

            .setTitle("New Suggestion")

            .setDescription(suggestion)

            .setColor("RANDOM")

            .setFooter(`${message.author.tag} | ID: ${message.author.id}`)

            .setTimestamp()
 

   
        SuggestionChannel.send(embed).then(msg => {

            msg.react("✅")

            msg.react("❎")
          

        message.channel.send("Your suggestion has been sent!");

        });

    }

}