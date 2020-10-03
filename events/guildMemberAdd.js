const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { discord, MessageAttachment } = require("discord.js")


module.exports.run = async (client, member) => {
  
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
  const attachment = new MessageAttachment(data, "welcome-image.png");
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
}; 
  