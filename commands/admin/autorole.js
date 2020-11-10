const  db = require("quick.db")
module.exports = {
name: "autorole",
  category: "Administration",
  description: "give role to new user In server",
  alises: ["ar"],
  usage: "ar enable/disabe role maximum 3 roles.",
   authorPermission: ["MANAGE_ROLES"],
  run: async(client, message, args) =>{
   
    let role = message.mentions.roles.first();
    if(!role){
      return message.channel.send("INVALID ARGUMENT: MENTION ROLE FOR AUTOROLE!")
      }
   db.set(`aurole_${message.guild.name}`, [{role:role.id}])
    return message.channel.send("successfully setup auto-role !")
    
    
  
  }}