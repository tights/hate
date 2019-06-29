const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!args.length) {
        const user = message.mentions.users.first() || message.author;

        const avatarEmbed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setAuthor(`${user.tag}’s avatar`)
        .setImage(user.displayAvatarURL);
        message.edit(avatarEmbed);
    } else
    if (args[0] === `e`) {
        const user = message.mentions.users.first() || message.author;

        message.edit(`${user.tag}’s avatar \n${user.avatarURL}`)
    }
}
