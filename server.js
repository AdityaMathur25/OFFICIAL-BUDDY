const { Client, Collection, MessageAttachment } = require("discord.js");
const { config } = require("dotenv");
const { default_prefix, token } = require("./config.json");
const db = require("quick.db")
const fs = require("fs");
const discord = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { addexp } = require("./handlers/xp.js");



let random = Math.floor(Math.random() * 2);
//for image ?
const client = new Client({
  disableEveryone: true
})
// for not taging everyone.
// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands");

// Run the command loader
["command"].forEach(handler => { //some error here
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  client.user.setActivity(db.get(`status`), {type : "WATCHING"})

  console.log('ready to fuck xd')
  });
//
client.on("message", async message => {
if(!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;
  if(!message.content.startsWith(prefix)) return;
  
  
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
  if(command) {  
    command.run(client, message, args)
  return addexp(message)
    }

  }) 

client.on("guildMemberAdd", async member => { //usage of welcome event
  let chx = db.get(`welchannel_${member.guild.id}`);
  //defining var
 if(!chx) return; 
  //u not define at random for image ?
  var images = ["https://wallpapercave.com/wp/wp6081521.jpg", "https://wallpapercave.com/wp/wp5128415.jpgcimage"]
let random = Math.floor(Math.random() * 2);
    let data = await canva.welcome(member, { link:  `${images[random]}`} )
    const attachment = new discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 client.channels.cache.get(chx).send(`Welcome to the server, ${member.user.username}!`,
      attachment) //get channel and send embed 
  });

client.on("guildMemberRemove", async member => { //usage of welcome event
  let chx = db.get(`leavchannel_${member.guild.id}`);
  //defining var
    let data = await canva.welcome(member, { link: random , blur: false  })
    //its leave .
    const attachment = new discord.MessageAttachment(
      data,
      "leave-image.png"
    );
 client.channels.cache.get(chx).send(` ${member.user.username} JUST LEFT THE SERVER !`,
      attachment) //get channel and send embed
});

    client.login(token);