const   mongoose  = require('quickmongo');
const db = new mongoose.Database("mongodb+srv://Buddy:12345@cluster0.qqght.gcp.mongodb.net/test");
const MessageEmbed = require("discord.js")
module.exports.run = async(client, message, oldMessage, newMessage) => {
  const int3 = db.get(`logchannel_${message.guild.id}`);

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

  let hk = await client.channels.cache.get(int3)

  hk.send(me);
}
