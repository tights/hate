const Discord = require('discord.js');

exports.run = (client, message) => {
     
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa",
        "india": ":flag_in: India",
        "japan": ":flag_jp: Japan"
    };
    
    const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL || `https://img.icons8.com/cotton/2x/error.png`)
    .setColor(`RANDOM`)
    .addField("Name", message.guild.name, true)
    .addField("ID", message.guild.id, true)
    .addField("Owner", `${message.guild.owner.user.tag}`, true)
    .addField("Region", region[message.guild.region], true)
    .addField("Total | Humans | Bots", `${message.guild.members.size} tot | ${message.guild.members.filter(member => !member.user.bot).size} mem(s) | ${message.guild.members.filter(member => member.user.bot).size} bot(s)`, true)
    .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
    .addField("Channels", message.guild.channels.size, true)
    .addField("Roles", message.guild.roles.size, true)
    .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
    .setThumbnail(message.guild.iconURL || `https://img.icons8.com/cotton/2x/error.png`)
    message.edit(embed);
    
}