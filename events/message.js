














































 
  
        message.delete().catch(err => {})
        message.delete().catch(err => {})
        return message.channel.send("You are not allowed to send links :/")
        return message.channel.send("You are not allowed to use (**" + m + "**) word here")
      if (!message.guild.me.hasPermission(p)) neededPerms.push("`" + p + "`")
      if (!message.member.hasPermission(p)) neededPerms.push("`" + p + "`")
      if (is_url(m)) {
      }
      } else if (badwords.find(x => x.toLowerCase() === m.toLowerCase())) {
    .slice(prefix.length)
    .split(/ +/g);
    .trim()
    command.authorPermission.forEach(p => {
    command.botPermission.forEach(p => {
    cooldown[message.author.id] = {}
    if (cmdy) message.channel.send(cmdy.responce)
    if (message.author.id !== ownerID) return message.channel.send("This command can only be use by owner :C")
    if (neededPerms.length) return message.channel.send(`I need ${neededPerms.join(", ")} permission(s) to execute the command!`)
    if (neededPerms.length) return message.channel.send(`You need ${neededPerms.join(", ")} permission(s) to execute the command!`)
    let cmdy = cmdx.find(x => x.name === cmd)
    let neededPerms = []
    let neededPerms = []
    message.content.split(" ").forEach(m => {
    message.member = await message.guild.members.fetch(message);
    return false;
    return true;
    uCooldown = cooldown[message.author.id]
    })
    })
    })
  // ---------------------------------------------O W N E R ----------------------------------------------------------
  // Get the command
  // If none is found, try to find it by alias
  //-------------------------------------------- P E R M I S S I O N -------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------COOLDOWN SYSTEM---------------------------------------------
  //NOW LETS TEST
  addexp(message);
  const args = message.content
  const cmd = args.shift().toLowerCase();
  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;
  if (!message.member)
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  if (!uCooldown) {
  if (cmd.length === 0) return;
  if (cmdx) {
  if (command) command.run(client, message, args);
  if (command.botPermission) {
  if (command.ownerOnly) {
  if (message.author.bot) return;
  if (prefix === null) prefix = default_prefix;
  if (time && (time > Date.now())) return message.channel.send(`You can again use this command in ${Math.ceil((time - Date.now()) / 1000)} second(s)`) //YOU CAN USE PARSE MS TO GET BETTER responce
  if(regexp.test(str)) {
  let cmdx = db.get(`cmd_${message.guild.id}`)
  let command = client.commands.get(cmd);
  let prefix = db.get(`prefix_${message.guild.id}`);
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  let time = uCooldown[command.name] || 0
  let uCooldown = cooldown[message.author.id];
  }
  }
  }
  }
  }
  }
  } else if (command.authorPermission) {
  } else {
//-------------------------------------------- F U N C T I O N ------------------------------------------
const db = require("quick.db")
const { addexp } = require("../handlers/xp.js");
const { badwords } = require("../data.json") 
const { ownerID, default_prefix } = require("../config.json");
function is_url(str) {
let cooldown = {}
module.exports.run = async (client, message) => {
}
}