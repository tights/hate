const Discord = require('discord.js');
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {
    if (!args.length) return;
    
    const g = args.slice(0).join(" ");
    const { body } = await snekfetch.get(`https://www.reddit.com/r/${g}.json?sort=top&t=week`).query({ limit: 800 });
    const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
    if (!allowed.length) return;
    
    const randomnumber = Math.floor(Math.random() * allowed.length)
    const embed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setTitle(`${allowed[randomnumber].data.title}`)
    .setImage(allowed[randomnumber].data.url)
    .setFooter(`/r/${g} • 👍 ${allowed[randomnumber].data.ups} • 📝 ${allowed[randomnumber].data.num_comments}`)
    message.edit(embed)
            
}