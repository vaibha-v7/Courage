import { REST, Routes, SlashCommandBuilder,EmbedBuilder } from 'discord.js';

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },

    {
      name: 'encourage',
      description: 'Will encourage you',
    },

    {
      name: 'about',
      description:'Know about me',
    },
    
    {
      name: 'joke',
      description:'Tell you a joke',
    },

    {
      name:'wouldyourather',
      description:"Asks Would you rather",
    },


];

const rest = new REST({ version: '10' }).setToken('MTM0MjIwMTc4NTMxNzg1MTI0OQ.GY8Bk8.rK0M8__5oaIuwLuwiwCGWWTXnWQyTgP3ElUeNs');

try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1342201785317851249'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }