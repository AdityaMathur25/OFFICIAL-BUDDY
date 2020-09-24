const { Client, Collection, MessageAttachment, MessageEmbed } = require("discord.js");
const { config } = require("dotenv");
const { default_prefix, token, COLOR } = require("./config.json");
const db = require("quick.db");
const fs = require("fs");
const discord = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const { addexp } = require("./handlers/xp.js");
const { badwords } = require("./data.json");
const antispam = require('antispam-guard'); 
let random = Math.floor(Math.random() * 4);
//for image ?
const client = new Client({
  disableEveryone: true
});
// for not taging everyone.
// Collections
client.db = require("quick.db");
client.canvas = require("canvacord")
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands");

 
    

// Run the command loader
["command"].forEach(handler => {
  //some error here
  require(`./handlers/${handler}`)(client);
});

client.on("ready", async () => {
  client.user.setActivity(db.get(`status`), { type: "WATCHING" });
  client.user.setPresence({
status: "dnd", 
activity: { 
name: `${db.get(`status`)}`, 
type: "WATCHING" 
} 
})

  console.log("ready as badass");
});
client.config = {
  api: process.env.api
};
client.queue = new Map();
client.on("message", async message => {
  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  if (!message.content.startsWith(prefix)) return;

  //YOUR CODE

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it y alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  // If a command is finally found
  if (command) {
    command.run(client, message, args);
    return addexp(message);
  }
});


client.on("guildMemberAdd", async member => {
   let chx = db.get(`welchannel_${member.guild.id}`);
  //defining var
  if (!chx) return;
  //u not define at random for image ?
  var images = [
    "https://wallpapercave.com/wp/wp6081521.jpg",
    "https://wallpapercave.com/wp/wp5128415.jpg",
    "https://wallpapercave.com/wp/wp5128398.jpg",
    "https://wallpapercave.com/wp/wp5700007.jpg",
    "https://wallpapercave.com/wp/wp5243211.jpg"
  ];
  let random = Math.floor(Math.random() * 5); //no i dont want 4 image 1 omly
  let data = await canva.welcome(member, { link: `${images[random]}` });
  const attachment = new discord.MessageAttachment(data, "welcome-image.png");
  let msg = db.get(`welmsg_${member.guild.id}`)
  if(msg === null)
    msg = `WELCOME TO THE SERVER ${member.user},have a nice with other members !`
    let newmsg = msg.replace("{user}", member.user);
    let hg = newmsg.replace("{server}", member.guild.name);
    let ffg = hg.replace("{members}", member.guild.memberCount);
    client.channels.cache
    .get(chx)
  .send(`${ffg}`)
  
  let dumb = await db.fetch(`welchannel_${member.guild.id}`)
  let gg = client.channels.cache.get(dumb)
  return gg.send( attachment )
}); //get channel and send embed

client.on("guildMemberRemove", async member => {
  //usage of welcome event
  let lul =  await db.fetch(`leechannel_${member.guild.id}`);
  //defining 
//lol i already do but u seted leavechannel😫 all done
  //make ur browser to desktop cuz .. //its leave 
  const nobiya = new MessageEmbed()
  .setTitle("SAY-GOODBYE")
  .setColor("RANDOM")
  .setDescription(`${member.user.username} SAY-GOODBYE MEET YOU SOON!`)
  .setTimestamp()
  .setFooter(`${member.user.username} just left the server !`) 
  const channel = client.channels.cache.get(lul)
  return channel.send(nobiya);
   // i setde db hmmmm... i understand kk //get channel and send embed  
//WAIT
  //error at leave od send :/ see log  log of send is un define  
  });
  client.on("message", async message => {
  if (message.author.client) return;

  if (message.content.indexof(default_prefix) !== 0) return;
  const args = message.content
    .slice(default_prefix.length)
    .tirm()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
});

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
       let prefix = await db.get(`prefix_${message.guild.id}`) 
       if(prefix === null) 
         prefix = default_prefix; 
     if(message.mentions.has("@everyone")) return;  
  if(message.mentions.has(client.user)) {
    const luck = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTitle("PREFIX HELP! ")
    .setDescription(`HEY, MY PREFIX IN THIS SERVER IS **${prefix}**`)
    .setColor("RANDOM")
    .setFooter(`REQUESTED BY ${message.author.username}`)
   return message.channel.send(luck)
  }
     }
               )
  client.on("message", async message => {
  function Check(str) {
    if (
      client.emojis.cache.find(emoji => emoji.name === str) ||
      message.guild.emojis.cache.find(emoji => emoji.name === str)
    ) {
      return true;
    } else {
      return false;
    }
  }
  if (message.content.startsWith(":") && message.content.endsWith(":")) {
    let EmojiName = message.content.slice(1, -1);

    if (Check(EmojiName) === true) {
      const channel = client.channels.cache.get(message.channel.id);
      try {
        let webhooks = await channel.fetchWebhooks();
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

        await webhook.send(`${client.emojis.cache.get(emoji)}`, {
          username: message.author.username,
          avatarURL: message.author.avatarURL({ dynamic: true })
        });
        message.delete();
      } catch (error) {
        console.log(`Error :\n${error}`);
      }
    
    
    }}})
function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if(regexp.test(str)) {
    return true;
  } else {
    return false;
  }
  
}
client.on("message", async message => {
  if (message.author.bot) return;  
  //START
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    
  
    let confirm = false;
    //NOW WE WILL USE FOR LOOP
    var i;
    for(i = 0;i < badwords.length; i++) {
      
      if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
      
    }
    
    if(confirm) {
      message.delete();
      let gp = new MessageEmbed()
      .setTitle("**ANTI-BADWORD**")
      .setDescription(`${message.user} YOU ARE NOT ALLOWED TO SEND BAD WORDS HERE!`)
      .setFooter("IF U DON'T STOP GOT PUNISHED")
      .setColor("GREEN")
      .setTimestamp();
      return message.channel.send(gp)
    }    
    
    
  }})
 // This runs the filter on any mes

const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 1000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});
 
 
client.on('message', (message) => antiSpam.message(message)); 

client.on("message", async message => { 
  if(message.author.bot) return; 
  //start

  const globalMsg = new MessageEmbed()
  .setTitle(`${message.author.tag}`) 
  .setDescription(message.content) 
  .setColor("RANDOM") 
  .setThumbnail(message.author.avatarURL({format: 'png', dynamic: true}))
  .setFooter(`From: ${message.guild.name}`) 
  .setTimestamp() 
  if(message.channel.name!== "global-chat")return;
  return await Promise.all(client.channels.cache.filter(c => c.name === 'global-chat').map(c => c.send(globalMsg)))

});

client.login(process.env.ass);  
  
  