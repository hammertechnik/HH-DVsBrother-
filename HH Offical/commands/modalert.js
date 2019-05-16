const Discord = require("discord.js");
const botconfig = require("../storage/botconfig");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
message.channel.send("🔴 RED ALERT 🔴 A MODERATOR HAS APPEARED 🔴 THIS IS NOT A DRILL 🔴")
}

module.exports.help = {
  name: "modalert"
}
