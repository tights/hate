const Discord = require('discord.js');
const snekfetch = require('snekfetch');

exports.run = (client, message, args) => {
    if (!args.length) {
        return;
    } else {
        snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {
        const iplookup = new Discord.RichEmbed()
        
        .setThumbnail(message.author.displayAvatarURL)
        .setTitle("IP Lookup")
        .setColor("RANDOM")
        .setDescription(`Showing information for **${args}** :eyes:`)
        .addField("Country", `${r.body.country !== undefined ? `${r.body.country}` : 'Private Area'}`, true)
        .addField("Country Code", `${r.body.countryCode !== undefined ? `${r.body.countryCode}` : 'Private Area'}`, true)
        .addField("City", `${r.body.city !== undefined ? `${r.body.city}` : 'Private Area'}`, true)
        .addField("Region", `${r.body.regionName !== undefined ? `${r.body.regionName}` : 'Private Area'}`, true)
        .addField("Timezone", `${r.body.timezone !== undefined ? `${r.body.timezone}` : 'Private Area'}`, true)
        .addField("ISP", `${r.body.isp !== undefined ? `${r.body.isp}` : 'Private Area'}`, true)
        .addField("ASN", `${r.body.as !== undefined ? `${r.body.as}` : 'Private Area'}`, true)
        .addField("Longitude", `${r.body.lan !== undefined ? `${r.body.lan}` : 'Private Area'}`, true)
        .addField("Latitude", `${r.body.lat !== undefined ? `${r.body.lat}` : 'Private Area'}`, true)
        message.edit(iplookup);

        });
    }
}