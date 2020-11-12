const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { discord, MessageAttachment, MessageEmbed } = require("discord.js")


module.exports.run = async (client, member, message) => {
  
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
  
  let msg = db.get(`welmsg_${member.guild.id}`)
  if(msg === null)
    msg = `WELCOME TO THE SERVER ${member.user},have a nice with other members !`
    let newmsg = msg.replace("{user:mention}", member.user);
   let newmg = newmsg.replace("{user:name}", member.user.username);
    let hg = newmg.replace("{server}", member.guild.name);
    let ffg = hg.replace("{member:count}", member.guild.memberCount);
  
  let image = db.get(`enabel_${member.guild.id}`)
 
  const attach = new MessageAttachment(data, "welcome.png")
  
  if(!image) {
    console.log(`${member.guild.name} Doesn't have a welcome banner`);
  } else {
    const ss2 = new MessageEmbed()
          .setDescription(ffg)
          .attachFiles(attach)
          .setImage("attachment://welcome.png")
          .setColor("BLUE")
          .setTimestamp()
    client.channels.cache.get(chx).send(ss2)
  }
let role = db.push(`aurole_${message.guild.id}`) 
if(!role) return;
var roles = member.guild.roles.cache.find(role => role.id === role)
member.roles.add(roles);
 
   
 
}; 
  
