const db = require("quick.db")

module.exports.run = (client) => {
  console.log(client.user.tag + "ready")
  client.user.setActivity(db.get(`status`)); 
}