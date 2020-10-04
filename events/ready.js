const db = require("quick.db")

module.exports.run = (client) => {
  console.log(client.user.tag + "ready")
  let xx = `${db.get(`status`)}`
  client.user.setActivity(db.get(`status`), { type: "WATCHING" });
  client.user.setPresence({
status: "idle", 
activity: { 
name: `${xx}`, 
type: "WATCHING" 
} 
})

}