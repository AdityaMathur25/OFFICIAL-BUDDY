const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../../config.json");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

module.exports = {
    name: "ascii",
    aliases: null,
    category: "fun",
    description: "Ascii!",
    usage: "Ascii <Text>",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        let Content = args.join(" ");

        if (!Content) return message.channel.send(`Please Give Me Text!`);

        if (Content.length > 20) return message.channel.send(`Please Make Shorter! | Limit : 20`);

        let Result = await figletAsync(Content);

        let embed = new MessageEmbed()
        .setColor(COLOR)
        .setDescription("```" + Result + "```")
        .setTimestamp();

        message.channel.send(embed);

        //End

    }
};