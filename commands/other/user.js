const Discord = require('discord.js');

exports.run = (client, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };

    if (message.channel.type === `dm`) {
    const user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setAuthor(user.tag, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID", `${user.id}`, true)
    .addField("Status", `${user.presence.status}`, true)
    .addField("Game", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Created on", `${user.createdAt.toUTCString().substr(0, 16)} (${checkDays(user.createdAt)})`, true)
    message.edit(embed);

    } else {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };

    const user = message.mentions.users.first() || message.author;
    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(user.tag, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID", `${user.id}`, true)
    .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Status", `${user.presence.status}`, true)
    .addField("Server", message.guild.name, true)
    .addField("Game", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Joined at", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
    .addField("Created on", `${user.createdAt.toUTCString().substr(0, 16)} (${checkDays(user.createdAt)})`, true)
    .addField("Roles", member.roles.map(roles => `${roles}`).join(', '), true)
    message.edit(embed);
    }
}
