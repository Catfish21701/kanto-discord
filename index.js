const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === 'Hi') {
        message.channel.send('Hello');
    }
});

client.login(process.env.token ? process.env.token : config.token);