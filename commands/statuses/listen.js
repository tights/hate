exports.run = (client, message, args) => {
    if (!args.length) return;
    
    const g = args.slice(0).join(" ");
    client.user.setActivity(`${g}`, {type: 'LISTENING'}).catch(console.log(`Listening to ${g}`));
    message.delete();
}