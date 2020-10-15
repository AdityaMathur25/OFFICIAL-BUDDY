const JsonDB = require('json-database.js');
 
const db = new JsonDB({
    file: '../../uptime.json', /* Type there database file path */
    table: 'Montior-links' /* Users is example, type one you want */
});
 
 module.exports = {
   name: "monitor",
   category: "info",
   description: "",
   aliases: [""],
   run: async (client, message, args) => {
     let links = message.content.includes("https://", "www.")
     if (!links) return message.channel.send("only links to montior ur website")
     let user = message.author.name
     db.set(`${user}`, links )
     return
     message.channel.send("ADDED WEBSITE TO MONTIORING")
     
     
   }}