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
 

  require(`./handlers/${handler}`)(client);
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
