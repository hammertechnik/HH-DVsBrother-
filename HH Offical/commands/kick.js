const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kuser) return message.channel.send("Can't find User!");
        let kreason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You do not have the proper permissions!");
        if(kuser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can not kick this member!");

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("~Kick~")
        .setColor("#c18413")
        .addField("Kicked User", `${kuser} with ID: ${kuser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID: ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", kreason);

        let kickChannel = message.guild.channels.find(`name`, "logs");
        if(!kickChannel) return message.channel.send("Can't find Logs Channel!")

        message.guild.member(kuser).kick(kreason);

        kickChannel.send(kickEmbed);

        return;
}

module.exports.help = {
  name: "kick"
}
