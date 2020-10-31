const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
name: "ticket",
description: "Make a support ticket",
   category: "support",
run: async (client, message, args) => {
  const reason = args.join(" ")
if (!reason){
  return message.channel.send("Must provide a vaild reason!")
  }
  ticket.makeTicket(message, reason, "it must a little bit late to contact support!")
}}