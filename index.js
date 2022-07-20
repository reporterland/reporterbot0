
const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const keepAlive = require('./keep_alive.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '$';
const fs = require('fs');
const { Server } = require('http');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./src/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('ReporterBot is online.');
});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'test'){
        client.commands.get('test').execute(message, args);
    }else if(command === 'hack'){
        client.commands.get('hack').execute(message, args);
    }else if(command === 'help'){
        message.channel.send('Warning!There is commands after spam command.If you didn\'t see it,Please be patient.It will load.');
        message.channel.send('Commands: ');
        message.channel.send('test: testing bot');
        message.channel.send('hack: hacking? ');
        message.channel.send('help: showing commands');
        message.channel.send('spam: spamming');
        message.channel.send('kick: Kicking da User out of the House.');
        message.channel.send('ban: Killing da User.');
        message.channel.send('msginfo: Shows message from the system.');
    }else if(command ==='spam'){
        message.channel.send('get rekt noob');
        message.channel.send('get rekt noob');
        message.channel.send('get rekt noob');
        message.channel.send('get rekt noob');
        message.channel.send('get rekt noob');
    }else if(command ==='kick'){ 
        let member = message.mentions.members.first();
if(!member) return message.reply("MENTION A VALID MEMBER FIRST YOU IDIOT.");
if(!member.kickable) return message.reply("This user is Unkickable.Beg them to leave bruh.");

member.kick();
    }else if(command ==='ban'){
        let member = message.mentions.members.first();
if(!member) return message.reply("MENTION A VALID MEMBER FIRST YOU IDIOT!!");
if(!member.bannable) return message.reply("This member has more power than you..");

member.ban("You are banned from Server.")
    }else if(command === 'msginfo'){
        message.channel.send('Token is Ready');
        message.channel.send('Current Date By System:' + Date.now());
        message.channel.send('Logged as ReporterBot');
        message.channel.send('Server launched.You can sleep now.');
        message.channel.send('ReporterBot is online.');
    }
});
keepAlive();
console.clear()
client.login("OTk3NzgxNzEwMTYwODAxNzkz.GW4jQV.qfWhrUmmmiAWzvE0jVElJ2QCJf9s2sE43_7hDE");
console.log('Token is Ready')
console.log('Current Date By System:' + Date.now())
console.log('Logged as ReporterBot.')