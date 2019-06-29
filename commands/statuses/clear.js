exports.run = (client, message) => { 
    client.user.setActivity(null).catch(console.log(`Cleared`));
    client.user.setStatus("dnd").catch(console.log);
    message.delete();
}