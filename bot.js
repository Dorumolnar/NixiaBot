const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'nb!gdpsdownload') {
    	message.reply('For PC: http://www.mediafire.com/file/z41c0vgndpcxpwf/NixiaGDPS+2.11.zip');
        message.reply('For android: http://www.mediafire.com/file/hfgfhgo5ac015z0/NixiaGDPS+2.11.apk');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
