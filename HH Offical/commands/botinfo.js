const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()

    .setDescription("Bot Information")
    .setAuthor("Created By: Lord Bidoof!")
    .setColor("#003182")
    .addField("Bot Name", bot.user.username)
    .setThumbnail(bicon)
    .addField("Created On", bot.user.createdAt)

    return message.channel.send(botEmbed);
}

module.exports.help = {
  name: "botinfo"
}
