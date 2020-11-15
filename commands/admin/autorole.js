const  db = require("quick.db")
const {MessageEmbed} = require("discord.js")
module.exports = {
name: "autorole",
  category: "Administration",
  description: "give role to new user In server",
  alises: ["ar"],
  usage: "ar enable/disabe role maximum 3 roles.",
   authorPermission: ["MANAGE_ROLES"],
  run: async(client, message, args) =>{
   
    let toggling = ["disable", "enable"];

    if (!toggling.includes(args[0])) {
let wrong = new MessageEmbed()
.setTitle("❌ WRONG USAGE")
.setDescription("INVALID ARGUMENT: YOU NEED TO TYPE- /n> Enable Either /n> Disable")
.setColor("RED")
.setTimestamp()
.setFooter("❌ Enable/disable AutoRole")
return message.channel.send(wrong)
      }
     if (args[0] === "enable") {
     let men = new MessageEmbed()
let role = message.mentions.roles.first()
.setTitle("❌ WRONG USAGE")

.setDescription("INVALID ARGUMENT: YOU NEED TO MENTION A ROLE  Or type: /n> Disable")

.setColor("RED")

.setTimestamp()

.setFooter("❌ Mention role ")

if(!role) 
return message.channel.send(men)
 await db.set(`ar_${message.guild.id}`, role.id) 
       }
    
    
  
  }}