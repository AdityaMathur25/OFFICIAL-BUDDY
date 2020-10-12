const {
  Client,
  Collection,
  MessageAttachment,
  MessageEmbed
} = require("discord.js");
const { config } = require("dotenv");
const { default_prefix, token, COLOR, ownerid } = require("./config.json");
const fs = require("fs");
const { discord, message } = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const { addexp } = require("./handlers/xp.js");
const   mongoose  = require('quickmongo');
const db = new mongoose.Database("mongodb+srv://Buddy:12345@cluster0.qqght.gcp.mongodb.net/test")
const { badwords } = require("./data.json");
let random = Math.floor(Math.random() * 4);
let cooldown = {};
//for image ?
const client = new Client({
  disableEveryone: true
});
// for not taging everyone.
// Collections
client.canvas = require("canvacord");
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands");
client.queue = new Map();

// Run the command loader
["command", "events"].forEach(handler => {
  //some error here
  require(`./handlers/${handler}`)(client);
});

console.log("ready as badass");

client.on("ready", async () => {
  let sta = await db.get(`status`)
client.user.setPresence({
status: "idle", 
activity: { 
name: sta, 
type: "PLAYING" 
} 
})})


//Stupid kid!
//define message lol
//ok im stupid u do it thank you ! mam
client.on("guildCreate", guild => {
  let join = new MessageEmbed()
    .setColor("#00FFFF")
    .setTitle("New Server Joined")
    .addField("Server Members :", guild.memberCount)
    .addField("Server Name :", guild.name)
    .setThumbnail(guild.iconURL())
    .addField("Server Owner :", guild.owner)
    .addField("VERIFICATION LEVEL :", guild.verificationLevel);
  client.channels.cache.get("748936869022007376").send(join);
  console.log("NEW SERVER JOIN" + guild.name);
});
client.on("guildDelete", guild => {
  let join1 = new discord.MessageEmbed()
    .setColor("RED")
    .setTitle("LEFT FROM SERVER")
    .addField("Server Members :", guild.memberCount)
    .addField("Server Name :", guild.name)
    .addField("Server Owner :", guild.owner)
    .addField("VERIFICATION LEVEL :", guild.verificationLevel);
  client.channels.cache.get("748936869022007376").send(join1);
  console.log("LEFT FROM SERVER" + guild.name);
});
client.on("message", async message => {
  let prefix = await db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  if (message.mentions.has("@everyone")) return;
  if (message.mentions.has(client.user)) {
    const luck = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setTitle("PREFIX HELP! ")
      .setDescription(`HEY, MY PREFIX IN THIS SERVER IS **${prefix}**`)
      .setColor("RANDOM")
      .setFooter(`REQUESTED BY ${message.author.username}`);
    return message.channel.send(luck);
  }
});
 
client.on("message", async message => {
  if (message.author.bot) return;
  //START
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    let confirm = false;
    //NOW WE WILL USE FOR LOOP
    var i;
    for (i = 0; i < badwords.length; i++) {
      if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
    }

    if (confirm) {
      message.delete();
      let gp = new MessageEmbed()
        .setTitle("**ANTI-BADWORD**")
        .setDescription(` YOU ARE NOT ALLOWED TO SEND BAD WORDS HERE!`)
        .setFooter("IF U DON'T STOP GOT PUNISHED")
        .setColor("GREEN")
        .setTimestamp();
      return message.channel.send(gp);
    }
  }
});
client.on("roleCreate", async role => {
  const int = db.get(`logchannel_${role.guild.id}`);
  if (!int) return;
  let me = new MessageEmbed()
    .setTitle("CREATED ROLE !")
    .setAuthor(client.user.username)
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .addField("❯ ROLE NAME :", role, true)
    .setColor("RANDOM")
    .setFooter("LOG MESSAGES !");
  let rol = await client.channels.cache.get(int)
  rol.send(me);
});
client.on("roleDelete", async role => {
  const int = db.get(`logchannel_${role.guild.id}`);
  if (!int) return;
  let me = new MessageEmbed()
    .setTitle("DELETED ROLE !")
    .setAuthor(client.user.username)
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .addField("❯ Role Name :", role, true)
    .setColor("AQUA")
    .setFooter("LOG MESSAGES !");
 let ff = await client.channels.cache.get(int)
  ff.send(me);
});
//sta
client.on("messageDelete", async message => {
  if (message.author.bot) return;
  const lpp = db.get(`logchannel_${message.guild.id}`);
  if (!lpp) return;
  let ap = new MessageEmbed()
    .setAuthor(message.member.username)
    .setTitle("MESSAGE DELETED !")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`❯ MESSAGE : ${message}`)
    .addField("❯ CHANNEL :", message.channel, true)
    .setColor("RANDOM")
    .setFooter("LOG MESSAGES");
  let jk = await client.channels.cache.get(lpp)
  jk.send(ap);
});
client.on("channelCreate", async channel => {
  const int = db.get(`logchannel_${channel.guild.id}`);
  if (!int) return;
  let me = new MessageEmbed()
    .setTitle("CREATED CHANNEL")
    .setAuthor(client.user.username)
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .addField("❯ CHANNEL :", channel.name, true)
    .addField("❯ CHANNEL TYPE:", channel.type, true)
    .setColor("AQUA")
    .setFooter("LOG MESSAGES !");
  let rr = await client.channels.cache.get(int)
  rr.send(me);
});
client.on("channelDelete", async channel => {
  const int2 = await db.get(`logchannel_${channel.guild.id}`);
  console.log("int2")
  let me = new MessageEmbed()
    .setTitle("CHANNEL DELETED!")
    .setAuthor(client.user.username)
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .addField("❯ CHANNEL :", channel.name, true)
    .addField("❯ CHANNEL TYPE:", channel.type, true)
    .setColor("AQUA")
    .setFooter("LOG MESSAGES !");
  client.channels.cache.get(int2).send(me);
});
client.on("messageUpdate", async (oldMessage, newMessage) => {
  })
client.login(process.env.ass)
                       