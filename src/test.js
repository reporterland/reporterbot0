module.exports = {
    name: 'test',
    description: 'Test command',
    execute(message, args) {
        message.channel.send("I'm working!")
    }
}