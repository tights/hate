exports.run = (client, message) => {
    client.user.setStatus("idle").catch(console.log(`Changed to idle`));
    message.delete();
}