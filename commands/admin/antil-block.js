const D = require('easy-json-database')
const db = new D("../../Black.json")
module.exports = {

  name: "blocklist",

  category: "settings",

  usage: "antilink block list @channel>",

  description: "Set the welcome message, use {user} to ping new user , {server} to show server name , {members} to show member count",

  aliases:["anl"],
run: async (client, message, args ) => {
  
}}