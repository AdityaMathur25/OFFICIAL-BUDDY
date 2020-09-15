





/wtf....




    
                  
                  );
          }
        } 
       let prefix = await db.fetch(`prefix_${message.guild.id}`)
     client.on("message", async message => {   
    "https://wallpapercave.com/wp/wp5128398.jpg",
    "https://wallpapercave.com/wp/wp5128415.jpg",
    "https://wallpapercave.com/wp/wp5243211.jpg"
    "https://wallpapercave.com/wp/wp5700007.jpg",
    "https://wallpapercave.com/wp/wp6081521.jpg",
    .addField("Server Members :", guild.memberCount)
    .addField("Server Members :", guild.memberCount)
    .addField("Server Name :", guild.name)
    .addField("Server Name :", guild.name)
    .addField("Server Owner :", guild.owner)
    .addField("Server Owner :", guild.owner)
    .addField("VERIFICATION LEVEL :", guild.verificationLevel);
    .addField("VERIFICATION LEVEL :", guild.verificationLevel);
    .get(chx)
    .send(`Welcome to the server, ${member.user.username}!`, attachment);
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setColor("#00FFFF")
    .setColor("RED")
    .setColor(COLOR)
    .setDescription(`HEY, MY PREFIX IN THIS SERVE IS **${prefix}**`)
    .setFooter(`REQUESTED BY ${message.author.username}`)
    .setThumbnail(guild.iconURL())
    .setTitle("LEFT FROM SERVER")
    .setTitle("New Server Joined")
    .setTitle("PREFIX HELP! ")
    .slice(default_prefix.length)
    .slice(prefix.length)
    .split(/ +/g);
    .split(/ +/g);
    .tirm()
    .trim()
    client.channels.cache.get(chx).send(seen)
    command.run(client, message, args);
    const luck = new MessageEmbed()
    message.member = await message.guild.fetchMember(message);
    return addexp(message);
   return message.channel.send(luck)
  .setDescription(`@${member.user.username} SAY-GOODBYE MEET YOU SOON!`)
  .setFooter(member.user.username, "just left server !")
  .setTimestamp()
  .setTitle("SAY-GOODBYE")
  // Get the command
  // If a command is finally found
  // If message.member is uncached, cache it.
  // If none is found, try to find it y alias
  //YOUR CODE
  //defining 
  //defining var
  //get channel and send embed      
  //its leave 
  //some error here
  //u not define at random for image ?
  //usage of welcome event
  //usage of welcome event
  ];
  api: process.env.api
  client.channels.cache
  client.channels.cache.get("748936869022007376").send(join);
  client.channels.cache.get("748936869022007376").send(join);
  client.on("message", async message => {
  client.user.setActivity(db.get(`status`), { type: "WATCHING" });
  client.user.setPresence({
  console.log("LEFT FROM SERVER" + guild.name);
  console.log("NEW SERVER JOIN" + guild.name);
  console.log("ready as badass");
  const args = message.content
  const args = message.content
  const attachment = new discord.MessageAttachment(data, "welcome-image.png");
  const cmd = args.shift().toLowerCase();
  const command = args.shift().toLowerCase();
  const seen = new MessageEmbed()
  disableEveryone: true
  if (!chx) return;
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;
  if (!message.member)
  if (cmd.length === 0) return;
  if (command) {
  if (message.author.client) return;
  if (message.content.indexof(default_prefix) !== 0) return;
  if (prefix === null) prefix = default_prefix;
  if(message.mentions.has(client.user)) {
  let chx = db.get(`leavchannel_${member.guild.id}`);
  let chx = db.get(`welchannel_${member.guild.id}`);
  let command = client.commands.get(cmd);
  let data = await canva.welcome(member, { link: `${images[random]}` });
  let join = new discord.MessageEmbed()
  let join = new discord.MessageEmbed()
  let prefix = db.get(`prefix_${message.guild.id}`);
  let random = Math.floor(Math.random() * 4); //no i dont want 4 image 1 omly
  require(`./handlers/${handler}`)(client);
  var images = [
  }
 client.login(token);
// Collections
// Run the command loader
// for not taging everyone.
//Stupid kid!
//define message lol
//for image ?
//ok im stupid u do it thank you ! mam
["command"].forEach(handler => {
activity: { 
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands");
client.commands = new Collection();
client.config = {
client.on("guildCreate", guild => {
client.on("guildMemberAdd", async member => {
client.on("guildMemberRemove", async member => {
client.on("guildRemove", guild => {
client.on("message", async message => {
client.on("ready", async () => {
client.queue = new Map();
const canva = new CanvasSenpai();
const client = new Client({
const db = require("quick.db");
const discord = require("discord.js");
const fs = require("fs");
const { CanvasSenpai } = require("canvas-senpai");
const { Client, Collection, MessageAttachment, MessageEmbed } = require("discord.js");
const { addexp } = require("./handlers/xp.js");
const { config } = require("dotenv");
const { default_prefix, token, COLOR } = require("./config.json");
let random = Math.floor(Math.random() * 4);
name: `${db.get(`status`)}`, 
status: "dnd", 
type: "WATCHING" 
} 
})
});
});
});
});
});
});
});
});
}); //get channel and send embed
};