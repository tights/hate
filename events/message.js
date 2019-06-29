const { prefix } = require('../config.json');

module.exports = (client, message) => {

    if (message.isMentioned(client.user)) {
        return console.log(`[MENTIONS] ${message.guild.name} > ${message.author.tag} > ${message.content}`)
    } else
    if (message.channel.type === `dm`) {
        if (message.content.startsWith(prefix)) {
            console.log()
        }
        console.log(`[DM] ${message.author.tag} > ${message.content}`)
    }
    
    if (message.author.id !== client.user.id) return;
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
  
    if (!cmd) return;
    cmd.run(client, message, args);
};
