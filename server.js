const { Client, Collection, MessageAttachment } = require("discord.js");
const { config } = require("dotenv");
const { default_prefix, token } = require("./config.json");
const db = require("quick.db");
const fs = require("fs");
const discord = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const { addexp } = require("./handlers/xp.js");

let random = Math.floor(Math.random() * 4);
//for image ?
const client = new Client({
  disableEveryone: true
});
// for not taging everyone.
// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands");

// Run the command loader
["command"].forEach(handler => {
  //some error here
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  client.user.setActivity(db.get(`status`), { type: "WATCHING" });

  console.log(client.user.tag);
});
//

client.on("guildMemberAdd", async member => {
  //usage of welcome event
  let chx = db.get(`welchannel_${member.guild.id}`);
  //defining var
  if (!chx) return;
  //u not define at random for image ?
  var images = [
    "https://wallpapercave.com/wp/wp6081521.jpg",
    "https://wallpapercave.com/wp/wp5128415.jpg",
    "https://wallpapercave.com/wp/wp5128398.jpg",
    "https://wallpapercave.com/wp/wp5700007.jpg",
    "https://wallpapercave.com/wp/wp5243211.jpg"
  ];
  let random = Math.floor(Math.random() * 4); //no i dont want 4 image 1 omly
  let data = await canva.welcome(member, { link: `${images[random]}` });
  const attachment = new discord.MessageAttachment(data, "welcome-image.png");
  client.channels.cache
    .get(chx)
    .send(`Welcome to the server, ${member.user.username}!`, attachment); //get channel and send embed
});

client.on("message", async message => {
  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  if (!message.content.startsWith(prefix)) return;

  //YOUR CODE

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  switch (message.guild.verificationLevel) {
    case 0:
      var vLevel = "None";
      break;
    case 1:
      var vLevel = "Low";
      break;
    case 2:
      var vLevel = "Medium";
      break;
    case 3:
      var vLevel = "(╯°□°）╯︵ ┻━┻";
      break;
    case 4:
      var vLevel = "┻━┻︵  (°□°）/ ︵ ┻━┻";
      break;
  }
  switch (message.guild.explicitContentFilter) {
    case 0:
      var cFilter = "Dont Scan any messages";
      break;
    case 1:
      var cFilter = "Scan messages from members without a role";
      break;
    case 2:
      var cFilter = "Scan messages sent by all members";
      break;
  }

  client.on("guildCreate", guild => {
    let join = new discord.MessageEmbed()
      .setColor(0x00ffff)
      .setTitle("Server Joined")
      .addField("Server Name :", guild.name)
      .addField("Server Owner :", guild.owner.user.tag)
      .setThumbnail(guild.iconURL)
      .addField("Server ID :", guild.id)
      .addField("Server Members :", guild.memberCount)
.addField
"VerificationLevel", `${vLevel}`    
client.channels.cache.get("748936869022007376").send(join);
    console.log("Joined a new guild: " + guild.name);
  });
  //mention the guild owner not tag. LOL YOU CANT MENTION THEN BZ THEY ARE NOT IN YOUR SERVER

  client.on("guildDelete", guild => {
    let join = new discord.MessageEmbed()
        .setColor(0x00ffff)    .setTitle("Server Joined")
      .addField("Server Name :", guild.name)
      .addField("Server Owner :", guild.owner.user.tag)
      .setThumbnail(guild.iconURL)
      .addField("Server ID :", guild.id)
      .addField("Server Members :", guild.memberCount);
    client.channels.cache.get("748936869022007376").send(join);
    console.log("Left Server: " + guild.name);
  });
  //define message lol
});
// wait  dont do anything

//what is used for v12 in ? for guildCreate i dont no that why
client.login(token);
//not get.
