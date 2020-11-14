const { client }  = require("./server.js")
const { Discord, message } = require('discord.js')
const db = require("quick.db")
const fetch = require("node-fetch")

setInterval(async () => {

  await fetch("https://cosmic-humorous-fall.glitch.me").then(

    console.log("Pinged!")

  );

}, 120000);