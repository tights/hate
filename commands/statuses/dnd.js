exports.run = (client, message) => {
    client.user.setStatus("dnd").catch(console.log(`Changed to dnd`));
    message.delete();
}