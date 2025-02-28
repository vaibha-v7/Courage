import { REST, Routes, SlashCommandBuilder,EmbedBuilder, Options, ApplicationCommandOptionType } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

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
      options:[
        {
          name: 'mention',
          description:'mention the person u want to ask question',
          type: ApplicationCommandOptionType.User,
          // required:true,
          
        }
      ]
    },

    {
      name:'roast',
      description:'Roasts the person',
      options:[
        {
          name: 'target',
          description: "mention person you want to roast",
          type :  ApplicationCommandOptionType.User,
          required: true,
        }
      ]
    },


];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1342201785317851249'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }

  //joke working now