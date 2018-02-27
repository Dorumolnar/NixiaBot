const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on('message', message => {
    if (message.content === 'nb!gdpsdownload') {
    	message.reply('For PC: http://www.mediafire.com/file/z41c0vgndpcxpwf/NixiaGDPS+2.11.zip');
        message.reply('For android: http://www.mediafire.com/file/hfgfhgo5ac015z0/NixiaGDPS+2.11.apk');
  	}
    if (message.content === 'nb!gdpstextures') {
        message.reply('Texture for gdps: http://www.mediafire.com/file/psg48o4fg733z5q/NixiaGDPS+2.11+Resources.zip');
    }
    if (message.content === 'gpdsmodapp') {
       message.reply('Mod app: https://goo.gl/forms/xGIJGTc3QNvbLQt72')   
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
