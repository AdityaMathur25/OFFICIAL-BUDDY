






      
      
      
        "100% right"
        "Answer is uncertain.",
        "As I see it, yes.",
        "As you wish.",
        "Ask again later.",
        "Better ask yourself.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "Eat less, move more.",
        "Fire.",
        "Gold.",
        "Indeed.",
        "Just do it.",
        "Mabye no.",
        "Maybe no.",
        "Maybe yes.",
        "Maybe",
        "Most likely.",
        "My reply is no.",
        "My sources say no.",
        "Never.",
        "Outlook good.",
        "Outlook not so good.",
        "Reply hazy, try again.",
        "Signs point to yes.",
        "Sorry, but this is really stupid question.",
        "That is sure as hell.",
        "Try to be usefull.",
        "Try to be usefull.",
        "Very bad idea.",
        "Very doubtful.",
        "Watch the birds.",
        "Water.",
        "We can not be never sure.",
        "We can not be never sure.",
        "Yes - definitely.",
        "Yes.",
        "You already know the Answer.",
        "You are the master of your life",
        "You know what my answer is...",
        "You may rely on it.",
        "lmao no",
        "lmao yes",
        "your question is not a question",
        `It is certain.`,
        `It is decidedly so.`,
        `Without a doubt.`,
      .setColor(Color)
      .setDescription(result)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
      .setTitle(`Answer Is`)
      //End
      //Start
      ];
      const embed = new MessageEmbed()
      if (!args[0]) return message.channel.send(`Please Give Me Question!`);
      if (!message.content.endsWith("?")) return message.channel.send(`Please Give A Valid Question & Add ? At The End!`);
      let Answers = [
      let result = Answers[Math.floor(Math.random() * Answers.length)];
      message.channel.send(embed)
    accessableby: "everyone",
    aliases: null,
    category: "fun",
    description: "8ball!",
    name: "8ball",
    run: async (client, message, args) => {
    usage: "8ball <Question>",
  }
const Discord = require("discord.js");
const { Color } = require("../../config.json");
const { MessageEmbed } = require("discord.js");
module.exports = {
};