const Discord      = require("discord.js");
const Enmap        = require('enmap');
const { readdir }  = require('fs');
const { token }    = require('./config.json')


const client = new Discord.Client();
client.commands = new Enmap();

readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
  console.log(`BOT > Loaded ${files.length} events!`)
  readdir("./commands/statuses", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/statuses/${file}`);
      let commandName = file.split(".")[0];
      client.commands.set(commandName, props);
    });
    console.log(`BOT > Loaded ${files.length} commands in statuses!`)
    readdir("./commands/other", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/other/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
      });
      console.log(`BOT > Loaded ${files.length} commands in other!`)
    });
  });
});

client.login(token);