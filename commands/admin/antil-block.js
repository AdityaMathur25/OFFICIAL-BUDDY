const D = require('easy-json-database')
const db = new D("./black.json")
module.exports = {

  name: "blocklist",

  category: "settings",

  usage: "antilink block list @channel>",

  description: "Set the welcome message, use {user} to ping new user , {server} to show server name , {members} to show member count",

  aliases:["anl"],
run: async (client, message, args ) => {
 const  m = message.mentions.channels.first();
  if (!m) return 
  message.channel.send("mention channel first")
  db.set(`${message.guild.id}`,`${m.id}`)
  await message.channel.send(`${m} is now black-list channel for anti-links!`)
}}