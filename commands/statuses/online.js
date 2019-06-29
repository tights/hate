exports.run = (client, message) => {
    client.user.setStatus("online").catch(console.log(`Changed to online`));
    message.delete();
}