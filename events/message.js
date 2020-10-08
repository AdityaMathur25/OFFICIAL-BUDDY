const db = require("quick.db");
const { discord, MessageEmbed } = require("discord.js")
const { addexp } = require("../handlers/xp.js");
const { ownerID, default_prefix } = require("../config.json");
const { badwords } = require("../data.json");
let cooldown = {};

module.exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  addexp(message);
  let antilink = db.get(`antilin_${message.guild.id}`)

  if (!message.member.hasPermission("ADMINISTRATOR")) {
    message.content.split(" ").forEach(m => {
      if (is_url(m)) {
        message.delete().catch(err => {});
        if (antilink === true)
        return message.channel.send("You are not allowed to send links ");
        if (antilink === false)
          return;
      } else if (badwords.find(x => x.toLowerCase() === m.toLowerCase())) {
        message.delete().catch(err => {});
        const bad = new MessageEmbed()
        .setTitle("ANTI- BADWORD")
        .setauthor(message.author.displayAvatarURL() + message.author.username)
        .setDescription("You can't send badwords here")
        .setFooter("Server Protected by" + client.user.username)
         .setThumbnail(message.guild.icon()) 
        
        return message.channel.send(
          "You are not allowed to use (**" + m + "**) word here"
        );
      }
    });
  }

  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.members.fetch(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let cmdx = db.get(`cmd_${message.guild.id}`);

  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd);
    if (cmdy) message.channel.send(cmdy.responce);
  }

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (!command) return;

  //-------------------------------------------- P E R M I S S I O N -------------------------------------------

  if (command.botPermission) {
    let neededPerms = [];

    command.botPermission.forEach(p => {
      if (!message.guild.me.hasPermission(p)) neededPerms.push("`" + p + "`");
    });

    if (neededPerms.length)
      return message.channel.send(
        `I need ${neededPerms.join(", ")} permission(s) to execute the command!`
      );
  } else if (command.authorPermission) {
    let neededPerms = [];

    command.authorPermission.forEach(p => {
      if (!message.member.hasPermission(p)) neededPerms.push("`" + p + "`");
    });

    if (neededPerms.length)
      return message.channel.send(
        `You need ${neededPerms.join(
          ", "
        )} permission(s) to execute the command!`
      );
  }

  // ---------------------------------------------O W N E R ----------------------------------------------------------

  if (command.ownerOnly) {
    if (message.author.id !== ownerID)
      return message.channel.send("This command can only be use by owner :)");
  }

  //------------------------------------------------------COOLDOWN SYSTEM---------------------------------------------

  let uCooldown = cooldown[message.author.id];

  if (!uCooldown) {
    cooldown[message.author.id] = {};
    uCooldown = cooldown[message.author.id];
  }

  let time = uCooldown[command.name] || 0;

  if (time && time > Date.now())
    return message.channel.send(
      `You can again use this command in ${Math.ceil(
        (time - Date.now()) / 1000
      )} second(s)`
    ); //YOU CAN USE PARSE MS TO GET BETTER responce

  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;

  //NOW LETS TEST

  //-----------------------------------------------------------------------------------------------------------------

  if (command) command.run(client, message, args);


//-------------------------------------------- F U N C T I O N ------------------------------------------
function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

function Check(str) {
    if (
      client.emojis.cache.find(emoji => emoji.name === str) ||
      message.guild.emojis.cache.find(emoji => emoji.name === str)
    ) {
      return true;
    } else {
      return false;
    }
  
  if (message.content.startsWith(":") && message.content.endsWith(":")) {
    let EmojiName = message.content.slice(1, -1);

    if (Check(EmojiName) === true) {
      const channel = client.channels.cache.get(message.channel.id);
      try {
        let webhooks =  channel.fetchWebhooks();
        let webhook = webhooks.first();
        if (webhook === undefined || null || !webhook) {
          let Created = channel
            .createWebhook("BUDDYISOP")
            .then(async webhook => {
              const emoji =
                client.emojis.cache.find(e => e.name == EmojiName).id ||
                message.guild.emojis.cache.find(e => e.name === EmojiName).id;

              await webhook.send(`${client.emojis.cache.get(emoji)}`, {
                username: message.author.username,
                avatarURL: message.author.avatarURL({ dynamic: true })
              });
              message.delete();
            });
        }

        const emoji =
          client.emojis.cache.find(e => e.name == EmojiName).id ||
          message.guild.emojis.cache.find(e => e.name === EmojiName).id;

       webhook.send(`${client.emojis.cache.get(emoji)}`, {
          username: message.author.username,
          avatarURL: message.author.avatarURL({ dynamic: true })
        });
        message.delete();
      } catch (error) {
        console.log(`Error :\n${error}`);
      }
    }
  }
}
}
