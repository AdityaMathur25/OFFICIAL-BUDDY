const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
name: "ticket-role",
description: "set support ticket role",
  category: "support",
run: async (client, message, args) => {
  const role = message.mentions.roles.first()

  ticket.setRole(message, role)
}
}