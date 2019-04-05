const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
    let sEmbed = new Discord.RichEmbed()

    .setDescription("Server Information")
    .setColor("#032359")
    .addField("Server Name", message.guild.name)
    .setThumbnail(sicon)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)

    return message.channel.send(sEmbed);
}

module.exports.help = {
  name: "serverinfo"
}
