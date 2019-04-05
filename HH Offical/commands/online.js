const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let oicon = bot.user.displayAvatarURL;
    let onlineEmbed = new Discord.RichEmbed()

    .setDescription("DVTest is now Online")
    .setColor("#003182")
    .addField("Bot Name", bot.user.username)
    .setThumbnail(oicon)
    .addField("Created On", bot.user.createdAt)
    .addField("Bot Version", "2.1.1");

    message.delete().catch(O_o=>{});
    return message.channel.send(onlineEmbed);
}

module.exports.help = {
  name: "onlinesaviorfu"
}
