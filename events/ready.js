function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " old";
};

module.exports = (client) => {
    console.log()
    console.log(`BOT > ${client.user.tag} | ${client.user.friends.size} friends`);
    console.log(`BOT > ${client.user.id} | ${client.user.createdAt.toUTCString().substr(0, 16)} (${checkDays(client.user.createdAt)})`)
    console.log(`BOT > You're in ${client.guilds.size} guilds`)
    console.log()
}