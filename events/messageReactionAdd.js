const { MessageReaction, User } = require("discord.js");

const db = require("quick.db")

/**

 *

 * @param {MessageReaction} reaction

 * @param {User} user

 */

module.exports = (reaction, user, message , msg) => {

  let member = reaction.message.guild.members.cache.get(user.id);

    db.get(`emoji_${message.guild.id}`)

    db.get(`id_${msg.id}`)

    db.get(`role_${message.guild.id}`),

    async (err, data) => {

      if (err) throw err;

      if (data) {

        if (!member.roles.cache.has(data.Role)) {

          member.roles.add(data.Role);

        } else {

        }

      }

    }

  

}