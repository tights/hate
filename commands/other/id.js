exports.run = (client, message) => {
    const user = message.mentions.users.first() || message.author;
    message.edit(`${user.id}`)
}