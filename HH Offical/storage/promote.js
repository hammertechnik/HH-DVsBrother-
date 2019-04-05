module.exports.run = async (client, message, args) => {

    if (args == 0) message.reply("You forgot Something!")
var logging= true

let roleID = args[1].replace('<', '').replace('@', '').replace('&', '').replace('>', '')
let promoterole = message.guild.roles.find(role => role.id === roleID) //message.guild.roles.find(r => r.name === "Patreons");
let member = message.mentions.members.first();//args[0].replace('<', '').replace('@', '').replace('>', '')
if (logging) {
message.channel.send(`args0:${args[0]}`)
message.channel.send(`args1:${args[1]}`)
//message.channel.send(`args2:${args[2]}`)
message.channel.send(`member:${member}`)
message.channel.send(`role:${promoterole}`)
message.channel.send(`roleID:${roleID}`)
} else {}
member.addRole(promoterole)
message.channel.send(`Successfully gave ${member} the Role ${promoterole}!`)
}