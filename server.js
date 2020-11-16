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
client.on("message", async (message) => {

    if(message.author.bot) return;

    let substringArray = get_substrings_between(message.content, ":", ":");

    let msg = message.content;

    if(!substringArray.length) return;

    substringArray.forEach(m => {

        let emoji = client.emojis.cache.find(x => x.name === m);

        var replace = `:${m}:`;

        var rexreplace = new RegExp(replace, 'g');

        if(emoji && !msg.split(" ").find(x => x === emoji.toString()) && !msg.includes(`<a${replace}${emoji.id}>`)) msg = msg.replace(rexreplace, emoji.toString());

    })

    

    if(msg === message.content) return;

    let webhook = await message.channel.fetchWebhooks();

    webhook = webhook.find(x => x.name === "NQN2");

    if(!webhook) {

        webhook = await message.channel.createWebhook(`NQN2`, {

            avatar: client.user.displayAvatarURL({dynamic: true})

        });

    }

    await webhook.edit({

        name: message.member.nickname ? message.member.nickname : message.author.username,

        avatar: message.author.displayAvatarURL({dynamic: true})

    })

    message.delete().catch(m => {})

    webhook.send(msg).catch( m => {});

    await webhook.edit({

        name: `NQN2`,

        avatar: client.user.displayAvatarURL({dynamic:true})

    })})

 

client.login(process.env.token);

//--------------------------------------------------- F U N C T I O N S --------------------------------------

function get_substrings_between(str, startDelimiter, endDelimiter) {

    var contents = [];

    var startDelimiterLength = startDelimiter.length;

    var endDelimiterLength = endDelimiter.length;

    var startFrom = contentStart = contentEnd = 0;

  

    while (false !== (contentStart = strpos(str, startDelimiter, startFrom))) {

      contentStart += startDelimiterLength;

      contentEnd = strpos(str, endDelimiter, contentStart);

      if (false === contentEnd) {

        break;

      }

      contents.push(str.substr(contentStart, contentEnd - contentStart));

      startFrom = contentEnd + endDelimiterLength;

    }

  

    return contents;

  }

  

  

  function strpos(haystack, needle, offset) {

    var i = (haystack + '').indexOf(needle, (offset || 0));

    return i === -1 ? false : i;

  }