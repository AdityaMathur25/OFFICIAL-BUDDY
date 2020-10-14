const   mongoose  = require('quickmongo');
const db = new mongoose.Database("mongodb+srv://Buddy:12345@cluster0.qqght.gcp.mongodb.net/test");


module.exports.run = (client) => {
  console.log(client.user.tag + "ready")
  let xx = `${db.get(`status`)}`



console.log(` ${client.user.username}has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} servers.`);
    client.user.setStatus('dnd')
    client.user.setPresence({
        game: {
            name:  xx,
            type: "Playing",
            url: "https://discordapp.com/"
        }
    });
}
