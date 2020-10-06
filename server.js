const {
  Client,
  Collection,
  MessageAttachment,
  MessageEmbed
} = require("discord.js");
const { config } = require("dotenv");
const { default_prefix, token, COLOR, ownerid } = require("./config.json");
const db = require("quick.db");
const fs = require("fs");
const { discord, message } = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const { addexp } = require("./handlers/xp.js");
const { badwords } = require("./data.json");
const AntiSpam = require("discord-anti-spam");
let random = Math.floor(Math.random() * 4);
let cooldown = {};
//for image ?
const client = new Client({
  disableEveryone: true
});
// for not taging everyone.
// Collections
client.db = require("quick.db");
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
let xx = `${db.get(`status`)}`

client.on("ready", async () => {
client.user.setPresence({
status: "idle", 
activity: { 
name: `${xx}`, 
type: "WATCHING" 
} 
})})


//Stupid kid!
//define message lol
//ok im stupid u do it thank you ! mam
client.on("guildCreate", guild => {
  let join = new discord.MessageEmbed()
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
  let join = new discord.MessageEmbed()
    .setColor("RED")
    .setTitle("LEFT FROM SERVER")
    .addField("Server Members :", guild.memberCount)
    .addField("Server Name :", guild.name)
    .addField("Server Owner :", guild.owner)
    .addField("VERIFICATION LEVEL :", guild.verificationLevel);
  client.channels.cache.get("748936869022007376").send(join);
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

let hh = "buddy-log";
// This runs the filter on any mes
const antiSpam = new AntiSpam({
  warnThreshold: 5, // Amount of messages sent in a row that will cause a warning.
  kickThreshold: 8, // Amount of messages sent in a row that will cause a ban.
  banThreshold: 10, // Amount of messages sent in a row that will cause a ban.
  maxInterval: 3500, // Amount of time (in milliseconds) in which messages are considered spam.
  warnMessage: "{@user}, PLEASE STOP SPAMMING, IF U DONT STOP YOU GOT PUNISHED", // Message that will be sent in chat upon warning a user.
  kickMessage: "**{user_tag}** has been kicked for spamming.", // Message that will be sent in chat upon kicking a user.
  banMessage: "**{user_tag}** has been banned for spamming.", // Message that will be sent in chat upon banning a user.
  maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
  exemptPermissions: ["ADMINISTRATOR"], // Bypass users with any of these permissions.
  ignoreBots: true, // Ignore bot messages.
  verbose: true, // Extended Logs from module.
  ignoredUsers: ["𝙭𝘿 乛BUDDYgfx🔥#0824"] // Array of User IDs that get ignored.
  // And many more options... See the documentation.
});
client.on("message", message => antiSpam.message(message));
//sta
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
  client.channels.cache.get(int).send(me);
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
  client.channels.cache.get(int).send(me);
});
client.on("message", message => antiSpam.message(message));
//sta
client.on("messageDelete", async message => {
  if (message.author.bot) return;
  const looog = db.get(`logchannel_${message.guild.id}`);
  if (!looog) return;
  let ap = new MessageEmbed()
    .setAuthor(message.member.username)
    .setTitle("MESSAGE DELETED !")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`❯ MESSAGE : ${message}`)
    .addField("❯ CHANNEL :", message.channel, true)
    .setColor("RANDOM")
    .setFooter("LOG MESSAGES");
  client.channels.cache.get(looog).send(ap);
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
  client.channels.cache.get(int).send(me);
});
client.on("channelDelete", async channel => {
  const int2 = db.get(`logchannel_${channel.guild.id}`);
  if (!int2) return;
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
  return client.channels.cache.get(int3).send(me);
});

client.login(process.env.ass);
