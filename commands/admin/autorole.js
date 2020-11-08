const  db = require("quick.db")
module.exports = {
name: "autorole",
  category: "Administration",
  description: "give role to new user In server",
  alises: ["ar"],
  usage: "ar enable/disabe role maximum 3 roles.",
   authorPermission: ["MANAGE_ROLES"],
  run: async(client, message, args) =>{
    let enable = args.join(" ").includes("enable")
    if(!enable){
     return message.channel.send("invalid arguments do : enable/disable")
      }
    let role = message.mentions.roles.first();
    if(!role){
      return message.channel.send("INVALID ARGUMENT: MENTION ROLE FOR AUTOROLE!")
      }
   db.set(`aurole_${message.guild.id}`, [{role:role.id}])
    return message.channel.send("successfully setup auto-role !")
    
    
  
  }}