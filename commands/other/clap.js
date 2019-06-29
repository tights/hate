exports.run = (client, message, args) => {
    if (!args.length) return;
    
    const g = args.slice(0).join(" 👏 ");
    message.edit(`${g}`);
}