exports.run = (client, message, args) => {
    const user = message.mentions.users.first()

    if (!args.length) {
        return;
    } else {
        client.user.setAvatar(`${args}`);
        message.delete();
        console.log(`BOT > Changed avatar to ${args}.`);
    }

    if (user) {
        client.user.setAvatar(`${user.displayAvatarURL}`);
        message.delete();
        console.log(`BOT > Changed to ${user.tag}’s avatar.`);
    }
}