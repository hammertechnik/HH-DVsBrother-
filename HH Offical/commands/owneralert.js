const Discord = require("discord.js");
const botconfig = require("../storage/botconfig");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
message.channel.send("🔴 RED ALERT 🔴 THE OWNER HAS APPEARED 🔴 THIS IS NOT A DRILL 🔴 RUN FOR YOUR LIFE 🔴")
}

module.exports.help = {
  name: "owneralert"
}
