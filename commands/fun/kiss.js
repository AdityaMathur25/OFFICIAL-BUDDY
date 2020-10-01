const canvacord = require ("canvacord")

const { MessageAttachment } = require("discord.js")
module.exports= {
  name:"kiss",
  description:"kiss some one",
  category:"fun",
  aliases: ["k"],
run: async (client, message, args) => {
async function create() {
    let img = await canvacord.kiss("./image.png");
    canvacord.write(img, "kiss.gif");
 
    let color = await canvacord.color("#4E5D94");
    canvacord.write(color, "color.png");
}
 
create()

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let attachment = new MessageAttachment( "kiss.gif");
    return message.channel.send(attachment);
}

}
