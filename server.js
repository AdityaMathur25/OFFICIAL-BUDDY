























 
 
     
        .setColor("GREEN")
        .setColor("GREEN")
        .setDescription(` YOU ARE NOT ALLOWED TO SEND BAD WORDS HERE!`)
        .setDescription(` YOU ARE NOT ALLOWED TO SEND link HERE!`)
        .setFooter("STOP USING BAD WORDS")
        .setFooter("STOP USING LINKS")
        .setTimestamp();
        .setTimestamp();
        .setTitle("**ANTI-BADWORD**")
        .setTitle("**ANTI-LINK**")
        confirm = true;
        confirm = true;
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor("RANDOM")
      .setDescription(`HEY, MY PREFIX IN THIS SERVER IS **${prefix}**`)
      .setFooter(`REQUESTED BY ${message.author.username}`);
      .setTitle("PREFIX HELP! ")
      if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
      if (message.content.toLowerCase().includes(oks[i].toLowerCase()))
      let gp = new MessageEmbed()
      let gp = new MessageEmbed()
      message.delete();
      message.delete();
      name: sta,
      return message.channel.send(gp);
      return message.channel.send(gp);
      type: "PLAYING"
    .addField("Server Members :", guild.memberCount)
    .addField("Server Members :", guild.memberCount)
    .addField("Server Name :", guild.name)
    .addField("Server Name :", guild.name)
    .addField("Server Owner :", guild.owner)
    .addField("Server Owner :", guild.owner)
    .addField("VERIFICATION LEVEL :", guild.verificationLevel);
    .addField("VERIFICATION LEVEL :", guild.verificationLevel);
    .setColor("#00FFFF")
    .setColor("RED")
    .setThumbnail(guild.iconURL())
    .setTitle("LEFT FROM SERVER")
    .setTitle("New Server Joined")
    //NOW WE WILL USE FOR LOOP
    //NOW WE WILL USE FOR LOOP
    activity: {
    client.user.setPresence({
    const luck = new MessageEmbed()
    for (i = 0; i < badwords.length; i++) {
    for (i = 0; i < oks.length; i++) {
    if (confirm) {
    if (confirm) {
    let confirm = false;
    let confirm = false;
    return message.channel.send(luck);
    status: "idle",
    var i;
    var i;
    }
    }
    }
    }
    }
  //START
  //START
  //some error here
  Client,
  Collection,
  MessageAttachment,
  MessageEmbed
  client.channels.cache.get("748936869022007376").send(join);
  client.channels.cache.get("748936869022007376").send(join1);
  console.log("LEFT FROM SERVER" + guild.name);
  console.log("NEW SERVER JOIN" + guild.name);
  disableEveryone: true
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
  if (message.author.bot) return;
  if (message.author.bot) return;
  if (message.mentions.has("@everyone")) return;
  if (message.mentions.has(client.user)) {
  if (prefix === null) prefix = default_prefix;
  let join = new MessageEmbed()
  let join1 = new discord.MessageEmbed()
  let prefix = await db2.get(`prefix_${message.guild.id}`);
  let sta =  await db.fetch(`status`)
  require(`./handlers/${handler}`)(client);
  }
  }
  });
  }})
// Collections
// Run the command loader
// for not taging everyone.
//Stupid kid!
//define message lol
//for image ?
//ok im stupid u do it thank you ! mam
["command", "events"].forEach(handler => {
client.aliases = new Collection();
client.canvas = require("canvacord");
client.categories = fs.readdirSync("./commands");
client.commands = new Collection();
client.login(process.env.ass);
client.on("guildCreate", guild => {
client.on("guildDelete", guild => {
client.on("message", async message => {
client.on("message", async message => {
client.on("message", async message => {
client.on("ready", async () => {
client.queue = new Map();
console.log("ready as badass");
const canva = new CanvasSenpai();
const client = new Client({
const db = require("wio.db")
const db2 = require('quick.db')
const fs = require("fs");
const project = require("project-uptimer");
const {
const { CanvasSenpai } = require("canvas-senpai");
const { addexp } = require("./handlers/xp.js");
const { badwords } = require("./data.json");
const { config } = require("dotenv");
const { default_prefix, token, COLOR, ownerid } = require("./config.json");
const { discord, message } = require("discord.js");
const { oks } = require("./link.json");
let cooldown = {};
let random = Math.floor(Math.random() * 4);
project.url("ajbdwk", 20000) //default is 1m (not required)
} = require("discord.js");
});
});
});
});
});
});
});