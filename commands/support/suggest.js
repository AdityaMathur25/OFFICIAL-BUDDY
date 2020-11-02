
const Discord = require('discord.js')
const db = require("quick.db")
module.exports = {

    commands: 'suggest',

    description: 'Sends a suggestion to the suggestions channel',

    run: async(message, args) => {

        let { member, channel, client } = message

        const content = args.join(' ')

        if (channel != '738495918738767893') {
let channel = await db.get(`suggest${message.guild.id}`)
            message.channel.send(':Fail: You must type the command in <#738495918738767893> to send your suggestion.') //replace this with your bot commands channel

            return

        }

        if (!content) {

            message.channel.send(':Fail: Your suggestion was too short, maybe suggest something actually or learn to type...')

            return

        }

    

        message.delete()

        message.channel.send(':white_check_mark: Thank you for your suggestion, i have sent it in <#765232763552137274> to be voted on.') // change this with your suggestions channel

        

        

        const workPls = new Discord.MessageEmbed()

        .setFooter(`Suggestion from ${member.user.tag}`, member.user.displayAvatarURL())

        .setTitle(content, ':kek:')

        .setDescription('Type `-suggest` in <#738495918738767893>') // suggestions channel

        .setColor('#fff600') 

        .setTimestamp()

        const channelId = '765232763552137274' // suggestions channel

        channel = member.guild.channels.cache.get(channelId)

        channel.send(workPls)

          .then(message => {

            message.react('👍')

              .then(() => {

                  message.react('👎') 

              })

        }) 

    }

}