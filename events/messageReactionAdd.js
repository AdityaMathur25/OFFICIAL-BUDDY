const db = require('quick.db')

const { addexp } = require("../handlers/xp.js");

const { MessageEmbed, discord} = require('discord.js')

const { ownerID, ownerID2, default_prefix } = require("../config.json");

const { badwords } = require("../data.json") 

let cooldown = {}

const emotfe = require('../emojis.json')

module.exports.run = async (client, message, reaction, user) => {

   if(user.partial) await user.fetch();

  if(reaction.partial) await reaction.fetch();

  if(reaction.message.partial) await reaction.message.fetch();

  if(user.bot) return;

   let emote = await db.get(`emoteid_${reaction.message.guild.id}_${reaction.emoji.id}`)

  if(!emote) return;

  let messageid = await db.get(`message_${reaction.message.guild.id}_${reaction.emoji.id}`)

  if(!messageid) return;

  let role = await db.get(`role_${reaction.message.guild.id}_${reaction.emoji.id}`)

  if(!role) return;

  if(reaction.message.id == messageid && reaction.emoji.id == `${emote}`) {

  reaction.message.guild.members.fetch(user).then(member => {

    let embed = new discord.MessageEmbed()

    .setAuthor(user.username , user.displayAvatarURL())

    .setDescription(`${emotfe.attention} **It's Looks You Already Have ${reaction.message.guild.roles.cache.get(role).name}** `)

    .setFooter(reaction.message.guild.name , reaction.message.guild.iconURL())

    .setTimestamp()

    if(member.roles.cache.has(role)) return user.send(embed)

    let sucsses = new discord.MessageEmbed()

    .setAuthor(user.username, user.displayAvatarURL())// made by darkboy (discord.gg/devs)

    .setDescription(`${emotfe.loading} **${reaction.message.guild.roles.cache.get(role).name}** Has Been added to you on ${reaction.message.guild.name}`)

    .setFooter(reaction.message.guild.name , reaction.message.guild.iconURL())

    .setTimestamp()

    member.roles.add(role) 

    return user.send(sucsses)

  })

  }}