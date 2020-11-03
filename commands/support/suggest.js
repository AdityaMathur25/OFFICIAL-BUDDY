 const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {

    name: "suggest",

    description: "Make a suggestion and have the community vote",

    category: "support",

    usage: "i!suggest <suggestion>",

    run: async (client, message, args) => {

        let suggestion = args.slice(0).join(" ");
let channel = db.get(``)
        let SuggestionChannel = message.guild.channels.cache.find(channel => channel.name === "『💡』suggestions");

      

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