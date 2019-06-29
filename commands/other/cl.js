module.exports.run = async (client, message, args) => {
    if (!args[0]) args.push(9999)
    if (isNaN(args[0])) return;
    let messagecount = parseInt(args[0]++);
        
    message.channel.fetchMessages({
        limit: 100
    }).then(messages => {
        let msg_array = messages.array();
        msg_array = msg_array.filter(m => m.author.id === client.user.id);
        msg_array.length = messagecount;
        msg_array.map(m => m.delete().catch(e => {
        }));
    });
}