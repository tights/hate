exports.run = (client, message) => {
    message.edit(message.guild.roles.map(roles => `${roles}`).join(' '));
}