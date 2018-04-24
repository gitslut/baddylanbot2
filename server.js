const Discord = require('discord.js');
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDM4MDUzODgwODExNzQ5Mzc2.DcChKg.JyX1TAIjNn7daAF3sEeFzJN0Wy4';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('Fuck you dylan');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "rat porn"
  if (message.Attachment === 'image.png') {
// Delete a message
message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
	// Send "bad dylan" to the same channel
    message.channel.send('Bad dylan >:(');
  }
});

// Log our bot in
client.login(token);