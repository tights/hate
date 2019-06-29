exports.run = (client, message) => {
    message.edit(message.guild.members.map(members => `${members}`).join(' '));
}