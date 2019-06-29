exports.run = (client, message) => {
    client.user.setStatus("invisible").catch(console.log(`Changed to invisible`));
    message.delete();
}