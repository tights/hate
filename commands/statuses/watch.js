exports.run = (client, message, args) => {
    if (!args.length) return;
    
    const g = args.slice(0).join(" ");
    client.user.setActivity(`${g}`, {type: 'WATCHING'}).catch(console.log(`Watching ${g}`));
    message.delete();
}