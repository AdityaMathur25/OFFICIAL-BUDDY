const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  aliases: ["h","hl"],
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
      
        return message.channel.send("Unknown Command: " + args[0]);
      message.react("750762554418135151")
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Not Provided :(")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("GREEN")
         .setTimestamp()
        .setFooter("MADED BY BUDDY", client.user.displayAvatarURL())
      
      return message.channel.send(embed);
      message.react("750762554418135151");
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription("HELP MENU", client.user.displayAvatarURL())
        .setColor("BLUE")
        .setFooter("MADED BY BUDDY", client.user.displayAvatarURL(), )
        .setThumbnail(client.user.displayAvatarURL());
        emx.setTimestamp();

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }

      return message.channel.send(emx);
      message.react("750762554418135151")
    
      
    }
  }
};
