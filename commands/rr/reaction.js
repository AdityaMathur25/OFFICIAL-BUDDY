const{ Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
  
  name: "rradd",
  description: "Add a reaction role",
  category: "reactionroles",
  /**
   * @param {Client} bot
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (bot, message, args, client) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(`You do not have permissions!`);
    if (!args[0])
      return message.channel.send(`You did not specify your channel id.`);
    if (!args[1])
      return message.channel.send(`You did not specify you role id.`);
    if (!args[2])
      return message.channel.send(`You did not specify your reaction.`);
    function isCustomEmoji(emoji) {
      return emoji.split(":").length == 1 ? false : true;
    }
   const r = message.mentions.roles.first(args[1])
   if (!r) 
  return message.channel.send(`That role does not exist in this guild!`);
    if (isCustomEmoji(args[2]))
      return message.channel.send(`That is a custom emoji!`);
    let ch = message.mentions.channels.first(args[0]);
    if (!ch)
      return message.channel.send(`That channel does not exist in this guild!`);
   
    const msg = await message.channel.send(
      new MessageEmbed({
        title: `Reaction role menu`,
        timestamp: Date.now(),
        description: `Reactions:
            ${args[2]} - ${r}
            `.trim(),
        color: `RANDOM`,
      })
    );
    await msg.react(args[2]);
   db.set(`emoji_${message.guild.id}`, args[2])
    db.set(`id_${msg.id}`)
    db.set(`role_${message.guild.id}`, args[1])
  },
}