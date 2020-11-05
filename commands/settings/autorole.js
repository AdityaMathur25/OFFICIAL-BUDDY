 
// autorole.jsconst Discord = require("discord.js");
const { stat } = require("fs");
 const db = require('quick.db')
 const prefix = "$"
 module.exports = {
    name: "autorole",
    description: "set auto-partner channel",
    run: async (client, message, args) => {
        let missing = new Discord.MessageEmbed()
.setTitle(`**Missing Permissions**`)
.setDescription(`
 You Must Have **ADMINISTRATOR** To Use That Command.
`)   
.setFooter(message.guild.name , message.guild.iconURL())
.setTimestamp()
 
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(missing)
let command = args[0];
let embed = new Discord.MessageEmbed()
.setTitle(`**Auto Role Command**`)
.setDescription(`
 
**Usage**
${prefix}autorole enable/disable | To Disable Or enable auto role
${prefix}autorole add [@role | role id | role name] | To Add Role to auto role
${prefix}autorole delete [@role | role id | role name]
${prefix}autorole list | To show list of the auto role
`)   
.setFooter(message.guild.name , message.guild.iconURL())
.setTimestamp()
if(!command) return message.channel.send(embed);
 
if(command.toLowerCase() === 'list') {
 
let database = await db.get(`autorole-${message.guild.id}`)
let empty = new Discord.MessageEmbed()
.setTitle(`**Database Empty**`)
.setDescription(`
It's looks your guild dont have any autorole roles.
`)   
.setFooter(message.guild.name , message.guild.iconURL())
.setTimestamp()
 
if(!database) return message.channel.send(empty)
let embed = new Discord.MessageEmbed()
.setTitle(`${message.guild.name} AutoRole List`)
.setThumbnail(message.guild.iconURL())
.setFooter(message.author.username, message.author.displayAvatarURL())
if(database && database.length) {
  let array =[]
    database.forEach(m => {
    array.push(`<@&${m.roleid}>`)
  })
  embed.setDescription(`${array.join("\n")}`)
}
message.channel.send(embed)
return;
}
if(command.toLowerCase() === 'add') {
    let status = await db.get(`autorole-status-${message.guild.id}`)
    let disable = new Discord.MessageEmbed()
.setTitle(`**Auto-role Is disabled.**`)
.setDescription(`
To Enable auto role
${prefix}autorole enable
`)   
.setFooter(message.guild.name , message.guild.iconURL())
.setTimestamp()
 
    if(status === 'disable') return message.channel.send(disable)
 let rolename = args.slice(1).join(" ");
let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name == `${rolename}`) || message.guild.roles.cache.find(r => r.id == `${args[1]}`);
let empty = new Discord.MessageEmbed()
.setTitle(`**Role Required.**`)
.setDescription(`
${prefix}autorole add [@role | role name | role id]
`)   
.setFooter(message.guild.name , message.guild.iconURL())
.setTimestamp()
 
 
if(!role) return message.channel.send(empty);
let botrole = message.guild.roles.cache.find(r => r.name === `${client.user.username}`)
 
if(role.position > botrole.position){
    return message.channel.send("I can't access that role, place me above other roles that you want me to manage.")
}
 
let added = new Discord.MessageEmbed()
.setTitle(`**Role Added.**`)
.setDescription(`
Added ${role || role.name} To AutoRole
`)   
.setFooter(message.guild.name , message.guild.iconURL())
.setTimestamp()
let data = {
 roleid: role || role.id
}
db.push(`autorole-${message.guild.id}`, data)
return message.channel.send(added)
 
}
if(command.toLowerCase() === 'delete') {
    let status = await db.get(`autorole-status-${message.guild.id}`)
    let disable = new Discord.MessageEmbed()
.setTitle(`**Auto-role Is disabled.**`)
.setDescription(`
To Enable auto role
${prefix}autorole enable
`)   
.setFooter(message.guild.name , message.guild.iconURL())
.setTimestamp()
 
    if(status === 'disable') return message.channel.send(disable)
     let database = await db.get(`autorole-${message.guild.id}`)
    let empty = new Discord.MessageEmbed()
    .setTitle(`**Database Empty**`)
    .setDescription(`
    It's looks your guild dont have any autorole roles.
    `)   
    .setFooter(message.guild.name , message.guild.iconURL())
    .setTimestamp()
     if(!database) return message.channel.send(empty)
    let rolename = args.slice(1).join(" ");
    let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name == `${rolename}`) || message.guild.roles.cache.find(r => r.id == `${args[1]}`);
let rolerequired = new Discord.MessageEmbed()
.setTitle(`**Role Required.**`)
.setDescription(`
${prefix}autorole add [@role | role name | role id]
`)   
.setFooter(message.guild.name , message.guild.iconURL())
.setTimestamp()
 
 
if(!role) return message.channel.send(rolerequired);
 
let data = database.find(x => x.roleid === role.id || role)
if(database) {
    let unabletofind = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(`
    ** unable to find that role on database!** 
    `)
    .setFooter(message.guild.name, message.guild.iconURL())
 
      if(!data) return message.channel.send(unabletofind)
 
  let value = database.indexOf(data)
  delete database[value]
 
  var filter = database.filter(x => {
    return x != null && x != ''
  })
 
  db.set(`autorole-${message.guild.id}`, filter)
let deleted = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL())
.setDescription(`
**Deleted ${role || role.id} Role From Auto-role!** 
`)
.setFooter(message.guild.name, message.guild.iconURL())
 
  return message.channel.send(deleted)
 
 
} else {
    let okelse = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.setDescription(`
** Sorry but i am unable to find that role!** 
`)
.setFooter(message.guild.name, message.guild.iconURL())
 
  return message.channel.send(okelse)
}   
}
if(command.toLowerCase() === 'enable') {
    db.set(`autorole-status-${message.guild.id}`, 'enable')
let enable = new Discord.MessageEmbed()
.setTitle(`**Auto Role Enabled**`)
return message.channel.send(enable)
}
if( command.toLowerCase() === 'disable') {
    db.set(`autorole-status-${message.guild.id}`, 'disable')
let enable = new Discord.MessageEmbed()
.setTitle(`**Auto Role Disabled**`)
return message.channel.send(enable)
 
 }
    }}