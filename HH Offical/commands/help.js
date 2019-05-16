const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let oPing = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
message.channel.send(`Someone Needs a help command MAKE ONE!`)
}

module.exports.help = {
  name: "help"
}
