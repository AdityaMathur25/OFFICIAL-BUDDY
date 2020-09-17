
  const Discord = require('discord.js')
  const Canvas = require('canvas');

module.exports = {
  name:"canvas",
  category:"",
run: async (bot, message, args) => {
  
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext('2d'); 	

  const background = await Canvas.loadImage(''); 	
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '30px Helvetica';
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillText(`NAME: ${message.author.username}`, 240, 100, );


  ctx.strokeStyle = '#74037b'; 
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();	
	ctx.arc(125, 125, 80, 0, Math.PI * 2, true);
	ctx.closePath();	
	ctx.clip();
	
	const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

  const imagem = new Discord.MessageAttachment(canvas.toBuffer(), 'foto.png');

let embed = new Discord.MessageEmbed()
.setColor('#8b6eff')
.attachFiles([imagem]).setImage('attachment://foto.png');

message.channel.send(embed)
  
}
}
  