const { MessageAttachment } = require("discord.js");
const db = require("quick.db")
module.exports = {
  name:"level",
  description:"know your level",
  category:"info",
  aliases:["lv"],
run: async (client, message, args) => {
  let user =
    message.mentions.users.first() ||
    client.users.cache.get(args[0]) ||
    match(args.join(" ").toLowerCase(), message.guild) ||
    message.author;

  let level = client.db.get(`level_${user.id}`) || 0;
  level = level.toString();
  let exp = client.db.get(`xp_${user.id}`) || 10;
  let neededXP = Math.floor(Math.pow(level / 1.2, 2));

  let every = client.db
    .all()
    .filter(i => i.ID.startsWith("xp_"))
    .sort((a, b) => b.data - a.data);
  let rank = every.map(x => x.ID).indexOf(`xp_${user.id}`) + 1;
  rank = rank.toString();
      let imagine = await client.canvas.rank({
        username: user.username,
        discrim: user.discriminator,
        status: user.presence.status,
        currentXP: exp.toString(),
        neededXP: neededXP.toString(),
        rank,
        level,
        avatarURL: user.displayAvatarURL({format: "png"}),
        color: "white"
    })
    return message.channel.send(new Discord.MessageAttachment(image, "rank".png))
  
function match(msg, i) {
  if (!msg) return undefined;
  if (!i) return undefined;
  let user = i.members.cache.find(
    m =>
      m.user.username.toLowerCase().startsWith(msg) ||
      m.user.username.toLowerCase() === msg ||
      m.user.username.toLowerCase().includes(msg) ||
      m.displayName.toLowerCase().startsWith(msg) ||
      m.displayName.toLowerCase() === msg ||
      m.displayName.toLowerCase().includes(msg)
  );
  if (!user) return undefined;
  return user.user;
}
}
}