const canvacord = require ("canvacord")

const { MessageAttachment } = require("discord.js")
module.exports= {
  name:"triggered",
  description:"trigger some one",
  category:"fun",
  aliases: ["tg"],
run: async (client, message, args) => {
async function create() {
    let img = await canvacord.trigger("./image.png");
    canvacord.write(img, "triggered.gif");
 
    let color = await canvacord.color("#4E5D94");
    canvacord.write(color, "color.png");
}
 
create()

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let faceplam = await canvacord.trigger(user.displayAvatarURL({ format: "png", dynamic: true }));
    let attachment = new MessageAttachment(faceplam, "triggered.gif");
    return message.channel.send(attachment);
}

}
