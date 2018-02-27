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
    if (message.content === 'nb!gpdsmodapp') {
       message.reply('Mod app: https://goo.gl/forms/xGIJGTc3QNvbLQt72'); 
    }
    if (message.content === 'nb!discordmodapp') {
       message.reply('Discord mod app: https://goo.gl/forms/Eg8iTMerpuMG5aJj1');
    }
    if (message.content === 'nb!gdpsmodcmds') {
       message.reply('Here are the gdps commands!');
       message.reply(':fire:!rate na 0 0 0 to un-rate a level!');
       message.reply(':fire:!rate (Diff) (Stars 1-10) (Verifycoins 0=no 1=yes) (Feature 0=no 1=yes');
       message.reply(':fire:!feature (feature a level');
       message.reply(':fire:!epic (epic feature a level)');
       message.reply(':fire:!unepic (remove a level`s epic feature)');
       message.reply(':fire:!verifycoins (verify a level`s coins)');
       message.reply(':fire:!daily (make a level daily)');
       message.reply(':fire:!weekly ([make a level weekly (weekly demon)]');
       message.reply(':fire:!rename [name]');
       message.reply(':fire:!description [description]');
       message.reply(':fire:!pass (change the password of a level)');
       message.reply(':fire:!public (make a level public)');
       message.reply(':fire:!unlist (unlist a level)');
       message.reply(':fire:!sharecp (all creators will get cp if it`s a collab)');
       message.reply(':fire:!delete');
       message.reply(':fire:!setacc [name]');
    }
    if (message.content === 'nb!help') {
       message.reply('``Here are my commands!``');
       message.reply('``nb!gdpsdownload``');
       message.reply('``nb!gdpstextures``');
       message.reply('``nb!gdpsmodapp``');
       message.reply('``nb!discordmodapp``');
       message.reply('``nb!gdpsmodcmds``');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
