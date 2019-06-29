exports.run = (client, message, args) => {
    if (!args.length) return;
    
    const g = args.slice(0).join(" ");
    client.user.setActivity(`${g}`, {type: 'PLAYING'}).catch(console.log(`Playing ${g}`));
    message.delete();
}