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
const db = require("wio.db")
const db2 = require('quick.db')

const project = require("project-uptimer");
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
  let sta =  await db2.fetch(`status`)
 
    client.user.setPresence({
    status: "idle",
    activity: {
      name: sta,
      type: "PLAYING"
    }
  });
});
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
  if (message.author.bot) return;
  //START
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
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
        .setFooter("STOP USING BAD WORDS")
        .setColor("GREEN")
        .setTimestamp();
      return message.channel.send(gp);
    }
  }
});
client.on("message", async message => {

  let prefix = await db2.get(`prefix_${message.guild.id}`);

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

  }})

const { oks } = require("./link.json");
client.on("message", async message => {
  if (message.author.bot) return;
  //START
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    let confirm = false;
    //NOW WE WILL USE FOR LOOP
    var i;
    for (i = 0; i < oks.length; i++) {
      if (message.content.toLowerCase().includes(oks[i].toLowerCase()))
        confirm = true;
    }

    if (confirm) {
      message.delete();
     
      let gp = new MessageEmbed()
        .setTitle("**ANTI-LINK**")
        .setDescription(` YOU ARE NOT ALLOWED TO SEND link HERE!`)
        .setFooter("STOP USING LINKS")
        .setColor("GREEN")
        .setTimestamp();
      return message.channel.send(gp);
    }
  }
});


//default is 1m (not required)


client.login(process.env.ass);
