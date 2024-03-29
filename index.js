const { Client, Intents } = require('discord.js');

const client = new Client({intents: [Intents.FLAGS.GUILDS] });

client.on('ready', async () => {
    console.log('Commandes supprimés.')
    await client.application.commands.set([]);
})

client.login("mettez votre token ici");