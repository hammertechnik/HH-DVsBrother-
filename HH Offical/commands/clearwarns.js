const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  let cUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!cUser) return message.reply("Couldn't find them yo");

  warns[cUser.id].warns = 0 ;

};

module.exports.help = {
  name: "clearwarns"
};
