const Discord = require('discord.js');
const { prefix } = require('../../config.json');

let other = [
    `* *${prefix}help* - shows help`,
    `* *${prefix}avi* - shows <@/users> avatar`,
    `* *${prefix}id* - shows <@/users> id`,
    `* *${prefix}user* - shows </@users> info`,
    `* *${prefix}cum* - <@/users> do it`,
    `* *${prefix}setavi* - </@users> or paste a link to set avatar`,
    `* *${prefix}cl* - clears messages`,
    `* *${prefix}clap* - adds 👏 inbetween your messages`,
    `* *${prefix}ip* - ip lookup`,
    `* *${prefix}members* - tags all members in a server`,
    `* *${prefix}roles* - tags all roles in a server`,
    `* *${prefix}ping* - shows your ping`,
    `* *${prefix}reddit* - browse reddit`,
    `* *${prefix}server* - shows server info`,
];

let statuses = [
    `* *${prefix}clear* - clears the statuses`,
    `* *${prefix}stream* - sets to **Streaming**`,
    `* *${prefix}play* - sets to **Playing**`,
    `* *${prefix}watch* - sets to **Watching**`,
    `* *${prefix}listen* - sets to **Listening to**`,
    `* *${prefix}online* - sets to online`,
    `* *${prefix}idle* - sets to idle`,
    `* *${prefix}dnd* - sets to dnd`,
    `* *${prefix}invisible* - sets to invisible`
];

exports.run = (client, message, args) => {
    if (!args.length) {
        const help = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor(`RANDOM`)
        .addField(`Other`, other)
        .addField(`Statuses`, statuses)
        .setFooter(`Prefix: ${prefix} - made with 💕 by ly`)
        message.channel.send(help);
    } else
    if (args[0] === `e`) {
        message.edit(`${message.author.username} \nOther \n${other.join(' \n')} \nStatuses \n${statuses.join(' \n')} \nPrefix: ${prefix}`)
    }
}
