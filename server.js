const { Client, Collection, MessageAttachment, MessageEmbed } = require("discord.js");
const { config } = require("dotenv");
const { default_prefix, token, COLOR } = require("./config.json");
const db = require("quick.db");
const fs = require("fs");
const discord = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const { addexp } = require("./handlers/xp.js");

let random = Math.floor(Math.random() * 4);
//for image ?
const client = new Client({
  disableEveryone: true
});
// for not taging everyone.
// Collections
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
  //usage of welcome event
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
  let random = Math.floor(Math.random() * 4); //no i dont want 4 image 1 omly
  let data = await canva.welcome(member, { link: `${images[random]}` });
  const attachment = new discord.MessageAttachment(data, "welcome-image.png");
  client.channels.cache
    .get(chx)
    .send(`Welcome to the server, ${member.user.username}!`, attachment);
}); //get channel and send embed

client.on("guildMemberRemove", async member => {
  //usage of welcome event
  let chx = db.get(`leavchannel_${member.guild.id}`);
  //defining 
  //its leave 
  const seen = new MessageEmbed()
  .setTitle("SAY-GOODBYE")
  .setDescription(`@${member.user.username} SAY-GOODBYE MEET YOU SOON!`)
  .setTimestamp()
  .setFooter(member.user.username, "just left server !")
    client.channels.cache.get(chx).send(seen)
  //get channel and send embed  
  
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
client.on("guildRemove", guild => {
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
       
  if(message.mentions.has(client.user)) {
    const luck = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTitle("PREFIX HELP! ")
    .setDescription(`HEY, MY PREFIX IN THIS SERVE IS **${prefix}**`)
    .setColor("RANDOM")
    .setFooter(`REQUESTED BY ${message.author.username}`)
   return message.channel.send(luck)
        } 
});

 client.login(token);  
  
  