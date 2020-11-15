const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { discord, MessageAttachment, MessageEmbed } = require("discord.js")
const canvas = require('discord-canvas')
    const welcomeCanvas = new canvas.Welcome()
  const universalColor = "#00FFFF"
  

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
 //------ image ----
  let imagese = await welcomeCanvas

        .setUsername(member.user.username)

        .setDiscriminator(member.user.discriminator)

        .setMemberCount(member.guild.memberCount)

        .setGuildName(member.guild.name)

        .setAvatar(member.user.displayAvatarURL({

            format: 'png'

        }))

        .setColor("border", universalColor)

        .setColor("username-box", universalColor)

        .setColor("discriminator-box", universalColor)

        .setColor("message-box", universalColor)

        .setColor("title", universalColor)

        .setColor("avatar", universalColor)

        .setBackground(images)

        .toAttachment()

    let attachment = new MessageAttachment(imagese.toBuffer(), "welcome-image.png");
  
  
  
  
  //----------- end -------
  let msg = db.get(`welmsg_${member.guild.id}`)
  if(msg === null)
    msg = `WELCOME TO THE SERVER ${member.user},have a nice with other members !`
    let newmsg = msg.replace("{user:mention}", member.user);
   let newmg = newmsg.replace("{user:name}", member.user.username);
    let hg = newmg.replace("{server}", member.guild.name);
    let ffg = hg.replace("{member:count}", member.guild.memberCount);
  
  let image = db.get(`enabel_${member.guild.id}`)
 
  
  if(!image) {
    console.log(`${member.guild.name} Doesn't have a welcome banner`);
  } else {
    const ss2 = new MessageEmbed()
          .setDescription(ffg)
          .attachFiles(attachment)
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
  
