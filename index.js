const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const token = (process.env.token ? process.env.token : config.token);

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === 'Hi') {
        message.channel.send('Hello');
    }
});

client.login(token);