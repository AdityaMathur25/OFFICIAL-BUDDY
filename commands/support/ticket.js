const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
name: "ticket",
description: "Make a support ticket",
   category: "support",
run: async (client, message, args) => {
  const reason = args.join(" ")

  ticket.makeTicket(message, reason)
}}