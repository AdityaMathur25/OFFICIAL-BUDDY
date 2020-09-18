const Discord = require("discord.js")
 
module.exports = {
  name: "eval",
  description:"check command",
  category:"owner",
  run: async (client, message, args) => {
 
let process = args.join(" ");
if(!process) {
return message.channel.send("Please give a code to evaluate!");
  }
if(!message.author.id === "Your User ID") {
  return message.channel.send("You do not have permissions to use this command")
  }
let e;
 try {
e = eval(process)
} catch(err) {
e = err
  }
let embed = new Discord.MessageEmbed()
.setTitle("Eval Command")
.setColor("aaaaaa")
.addField("Input", "```" + process + "```")
.addField ("Output", "```" + e + "```")
.addField("Type Of",`\`\`\`${typeof(e)}\`\`\``)
message.channel.send(embed)
  }
 }