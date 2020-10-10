const db = require("quick.db")
const MessageEmbed = require("discord.js")
module.exports.run = async(client, message, oldMessage, newMessage) => {
  const int3 = db.get(`logchannel_${oldMessage.guild.id}`);

  if (!int3) return;

  if (oldMessage.content === null || newMessage.content === null || oldMessage.content === newMessage.content) return;

  let me = new MessageEmbed()

    .setTitle("MESSAGE EDITED !")

    .setAuthor(oldMessage.author.username)

    .setThumbnail(oldMessage.author.displayAvatarURL({ dynamic: true }))

    .addField("❯ Old Message :", oldMessage.content || "No Content!", true)

    .addField("❯ NEW Message :", newMessage.content || "No Content!", true)

    .setColor("RANDOM")

    .setFooter("LOG MESSAGES !");

  let hk = client.channels.cache.get(int3)

  hk.send(me);
}
