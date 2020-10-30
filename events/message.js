const db = require('quick.db')
const { addexp } = require("../handlers/xp.js");
const { MessageEmbed, discord} = require('discord.js')
const { ownerID, ownerID2, default_prefix } = require("../config.json");
const { badwords } = require("../data.json") 
let cooldown = {}

module.exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.author) return;
  

  addexp(message);

  if (!message.member.hasPermission("ADMINISTRATOR")) {



    message.content.split(" ").forEach(m => {
      if (is_url(m)) {


      }
    })

  }

  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  if (message.mentions.has("@everyone")) return;

  if (message.mentions.has(client.user)) {
    const luck = new MessageEmbed()

      .setAuthor( "PREFIX ! | " + message.guild.name )

    

      .setDescription(`HEY, MY PREFIX IN THIS SERVER IS ` + "`" + prefix +"`")

      .setColor("ORANGE")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true }))

      .setFooter(`REQUESTED BY ${message.author.username}`);

    return message.channel.send(luck);
  }
   

 




  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member =  message.guild.members.fetch(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let cmdx = db.get(`cmd_${message.guild.id}`)

  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd)
    if (cmdy) message.channel.send(cmdy.responce)
  }

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));


  if (!command) return;

  //-------------------------------------------- P E R M I S S I O N -------------------------------------------



  if (command.botPermission) {
    let neededPerms = []

    command.botPermission.forEach(p => {
      if (!message.guild.me.hasPermission(p)) neededPerms.push("`" + p + "`")
    })

    if (neededPerms.length) return message.channel.send(`I need ${neededPerms.join(", ")} permission(s) to execute the command!`)
  } else if (command.authorPermission) {
    let neededPerms = []


    command.authorPermission.forEach(p => {
      if (!message.member.hasPermission(p)) neededPerms.push("`" + p + "`")
    })

    if (neededPerms.length) return message.channel.send(`You need ${neededPerms.join(", ")} permission(s) to execute the command!`)
  }

  // ---------------------------------------------O W N E R ------------590550961232019466----------------------------------------------

  if (command.ownerOnly) {
    let dickheads = ["480285300484997122", "576893842058641412", "590550961232019466"];
    if (!dickheads.includes(message.author.id)) return message.channel.send("This command can only be use by owner :)")
  }

  //------------------------------------------------------COOLDOWN SYSTEM---------------------------------------------

  let uCooldown = cooldown[message.author.id];

  if (!uCooldown) {
    cooldown[message.author.id] = {}
    uCooldown = cooldown[message.author.id]
  }

  let time = uCooldown[command.name] || 0

  if (time && (time > Date.now())) return message.channel.send(`You can again use this command in ${Math.ceil((time - Date.now()) / 1000)} second(s)`) //YOU CAN USE PARSE MS TO GET BETTER responce

  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;

  //NOW LETS TEST

  //-----------------------------------------------------------------------------------------------------------------

  if (command) command.run(client, message, args);
 






 
//------------------------------end--
  
  

//-------------------------------------------- F U N C T I O N ------------------------------------------
function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if(regexp.test(str)) {
    return true;
  } else {
    return false;
  }
     }
}
  