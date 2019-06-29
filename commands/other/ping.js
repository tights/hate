const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!args.length) {
        const pingMessage = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle("Ping! :ping_pong:")
        .addField("API Latency", `${Math.round(client.ping)}ms`, true)
    
        message.edit(pingMessage);
    } else 
    if (args[0] === `e`) {
        message.edit('```\nPing! \nAPI Latency \n' + Math.round(client.ping) + 'ms \n```');
    }
}