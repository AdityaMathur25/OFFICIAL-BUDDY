const emotfe = require('./emojis.json')

const {
  Client,

  Collection,

  MessageAttachment,

  MessageEmbed
} = require("discord.js");

const { config } = require("dotenv");

const { default_prefix, token, COLOR, ownerid } = require("./config.json");

const fs = require("fs");

const fetch = require("node-fetch");

const { discord, message } = require("discord.js");

const { CanvasSenpai } = require("canvas-senpai");

const canva = new CanvasSenpai();

const { addexp } = require("./handlers/xp.js");

const db = require("quick.db");
const jsondb = require("easy-json-database")
const json = new jsondb("./black.json")


const { badwords } = require("./data.json");

let random = Math.floor(Math.random() * 4);

let cooldown = {};

//for image ?

const client = new Client({ partials: ['message', 'CHANNEL', 'REACTION'] });

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
  const main = await db.get(`status`);
  var activities_list = [
    `${main}`,
    " BUDDY'S SERVER",
    "!help for commands",
    "Stay Home , Stay Safe.",
    `Over ${client.guilds.cache.size} Server's`,
    `BEST MUSIC BOT !`,
    `in ${client.channels.cache.size} channel's`
  ];
 var stream_list = [

    "PLAYING",
    "STREAMING",
    "WATCHING",
    "LISTENING"

  ];


 setInterval(() => {
        const index = Math.floor(Math.random() * activities_list.length ); // generates a random number between 1 and the length of the activities array list (in this case 5).
        const stat = Math.floor(Math.random() * stream_list.length ); // generates a random number between 1 and the length of the activities array list (in this case 5).
   client.user.setActivity(activities_list[index], {type: stream_list[stat]}); // sets bot's activities to one of the phrases in the arraylist.
    }, 5000); //
  client.user.setStatus(`idle`);
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
      let g = await db.get(`${message.guild.id}`)
      if (g === null) return;
      if (g === true ) return 
       
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

setInterval(async () => {
  await fetch("https://crystal-panoramic-litter.glitch.me").then(
    console.log("Pinged!")
  );
}, 240000);
client.on('message', async message => { 
    if(message.channel.name ==='global' && !message.author.bot){
      client.guilds.cache.forEach(guild=>{
        if(guild == message.guild) return;
        let channel = guild.channels.cache.find(ch=>ch.name === 'global');
        if(!channel) return;
        let embed = new MessageEmbed()
        .setAuthor(message.author.tag +" ", message.author.displayAvatarURL())
        .setColor("#00c1ff")
        .setDescription(message.content)
        .setFooter(message.guild.name, (message.guild.iconURL({ dynamic: true })))
        .setTimestamp()
        channel.send(embed)
      })
    }
   })

//default is 1m (not required)

client.login(process.env.ass);
