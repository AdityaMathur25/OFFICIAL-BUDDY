const { client }  = require("./server.js")
const { Discord, message } = require('discord.js')




//----- montioring -----
const db = require("quick.db")
const fetch = require("node-fetch") 
let url = db.get(`url`)
  
setInterval(async () => {

  await fetch(url).then(

    console.log("website ping!")

  );

}, 60000);
