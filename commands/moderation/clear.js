const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
    name: "clear",
    aliases: ["purge", "clearmsgs"],
    category: "moderation",
    description: "Clear Your Messages!",
    usage: "Clear <Message Amount>",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        //THIS IS THE CODE FOR THE COMMAND ONLY
 
    const messageArray = message.content.split(' ');
	

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Messages Deleted!`)
            .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Deleted Messages`, `${deleteAmount}`)
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp();
      message.reply(embed)
        

        //End

    }
};