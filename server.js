const emotfe = require("./emojis.json");

const {
  Client,

  Collection,

  MessageAttachment,

  MessageEmbed
} = require("discord.js");
const webhook = require("./upvote.js")
const { config } = require("dotenv");

const {
  default_prefix,
  token,
  COLOR,
  CHANNEL_ID,
  SERVER_CHANNEL_ID
} = require("./config.json");

const fs = require("fs");

const fetch = require("node-fetch");

const { discord, message } = require("discord.js");

const { CanvasSenpai } = require("canvas-senpai");

const canva = new CanvasSenpai();

const { addexp } = require("./handlers/xp.js");

const db = require("quick.db");
const { Intents } = require("discord.js");
const myIntents = new Intents();
myIntents.add(
  "GUILDS",
  "GUILD_MEMBERS",
  "GUILD_INTEGRATIONS",
  "GUILD_MESSAGES",
  "GUILD_PRESENCES"
);
const Got = require("got");
const { badwords } = require("./data.json");

let random = Math.floor(Math.random() * 4);

let cooldown = {};

//for image ?

const client = new Client({ partials: ["message", "CHANNEL", "REACTION"] });

// for not taging everyone.

// Collections

client.canvas = require("canvacord");
client.vote = new Map();

client.commands = new Collection();

client.aliases = new Collection();

client.categories = fs.readdirSync("./commands");

client.queue = new Map();
const path = require('path');
	const {
  GiveawaysManager
} = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#ff0000",
    reaction: "🎊"
  }
});
client.giveawaysManager = manager;
// Run the command loader

["command", "events"].forEach(handler => {
  //some error here

  require(`./handlers/${handler}`)(client);
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
  let join1 = new MessageEmbed()

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
      let g = await db.get(`${message.guild.id}`);
      if (g === null) return;
      if (g === true) return;

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

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {

  if (member.user.bot) return;

  let conditionRole;

  let conditionsRoles = require(path.resolve(path.join(__dirname + 'commands/giveaway/database/conditionRole.json')));

  if (conditionsRoles[giveaway.messageID]) {

    conditionRole = conditionsRoles[giveaway.messageID].conditionRole;

  }

  if (conditionRole != 'none') {

    if (member.roles.cache.find(r => r.id === conditionRole)) {

      member.send(

        new MessageEmbed()

        .setAuthor(member.user.tag, member.user.displayAvatarURL({

          format: 'png',

          dynamic: 'true'

        }))

        .setColor('GREEN')

        .setDescription(`Your entry for [this giveaway](https://discordapp.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${giveaway.messageID}) has been approved. **Good luck !**`)

        .setFooter(`Giveaway by ${reaction.message.author.tag}`)

        .setTimestamp()

      );

      return;

    } else {

      reaction.users.remove(member.id)

      let role = reaction.message.guild.roles.cache.find(r => r.id === conditionRole);

      member.send(

        new MessageEmbed()

        .setAuthor(member.user.tag, member.user.displayAvatarURL({

          format: 'png',

          dynamic: 'true'

        }))

        .setColor('RED')

        .setDescription(`Your entry for [this giveaway](https://discordapp.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${giveaway.messageID}) has been denied. To enter, you need the \`${role.name}\` role.`)

        .setFooter(`Giveaway by ${reaction.message.author.tag}`)

        .setTimestamp()

      );

      return;

    }

  }
  })

client.login(process.env.token);
