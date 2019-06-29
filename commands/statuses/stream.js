const { stream_name } = require('../../config.json')

exports.run = (client, message, args) => {
    if (!args.length) return;
    
    const g = args.slice(0).join(" ");
    client.user.setActivity(`${g}`, {type: 'STREAMING', url: `https://twitch.tv/${stream_name}`}).catch(console.log(`Streaming ${g}`));
    message.delete();
}