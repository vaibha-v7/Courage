import dotenv from 'dotenv';
dotenv.config();

import { Client, Events, GatewayIntentBits, SlashCommandBuilder, EmbedBuilder, ActivityType} from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


// Array reply karne k liye
//HI reply


const poeticReplies = [
    "Hii Sweet Heart ❤️✨",
    "Hello there!! 🦋🌸",
    "Hey, shining star ✨💖",
    "Greetings, my moonlight 🌙💫",
    "Ahoy, gentle soul 🌿🌷",
    "Hola, dreamy one ☁️💜",
    "Salutations, radiant being 🌞🌻",
    "Hi there, lovely sunshine ☀️🌼",
    "Oh hey, my starlit muse 🌠💙",
    "Hello, spark of joy 🔥💛"
];


function getRandomNumber() {
    return Math.floor(Math.random() * poeticReplies.length);
}

client.on('ready',(c)=>{
    client.user.setActivity({                                                   //setting status
        name:"/encourage",
        type: ActivityType.Listening,
    })
})


client.on('messageCreate', (message) => {
    if (message.author.bot) return;


    const greetings = ["hi", "hello", "hey", "hola", "sup", "yo","hlo"];


    if (greetings.some(greeting => message.content.toLowerCase().startsWith(greeting))) {   //lowercase and startchecking!!
        let randomIndex = getRandomNumber();
        message.reply({
            content: poeticReplies[randomIndex]
        });
    }
});


//encourage command ->
const encouragementLines = [
    "Rise like the sun, fierce and bright, chasing the shadows, igniting the night. 🌅🔥",
    "The storm may roar, the winds may weep, but mighty rivers carve valleys deep. 🌊⛰️",
    "Stars are born in endless night—shine your light and burn so bright. 🌟✨",
    "Mountains bow to those who climb, step by step, one breath at a time. 🏔️🚶‍♂️",
    "Even the smallest spark can ignite a flame that lights the dark. 🔥💡",
    "The ocean roars, the tides may turn, but steady hearts will never burn. 🌊❤️",
    "Dreams take flight on wings unseen, trust the wind and chase the dream. 🌬️🕊️",
    "Roots grow deep where tempests rage; strength is forged on life's great stage. 🌳⚔️",
    "No night can last, no storm can stay—dawn will break in golden rays. 🌄🌤️",
    "The caterpillar weeps cocooned in night, yet wakes with wings to kiss the light. 🐛🦋",
    "A single drop may seem so small, yet rivers rise when raindrops fall. 💧🌧️",
    "Let your courage bloom like spring—soft yet strong in everything. 🌸💪",
    "The fire inside may flicker low, but even embers fiercely glow. 🔥🕯️",
    "Heavy clouds may block the sky, but light still dances in your eye. ☁️✨",
    "Walk through the fog, step through the rain—on the other side, hope remains. 🌫️🌧️🌈",
    "Your voice is thunder, your heart a drum—march to its beat, no matter the hum. ⚡🥁",
    "In broken glass, the light still plays—beauty shines in shattered ways. 💎✨",
    "Each step you take, no matter how small, leads you onward through it all. 👣🚶‍♀️",
    "The river bends, the path may twist, but onward still, it must persist. 🌊🔄",
    "Stars still shine though clouds conceal—believe in what you cannot feel. 🌟☁️",
    "The flame may wane, the ember dim, but deep inside, your light won’t end. 🔥🕯️",
    "The seed must break to touch the sky—growth is pain, yet wings will fly. 🌱🦅",
    "Storms may rage, but roots hold tight—strength is born in endless fight. ⛈️🌳",
    "A whisper soft, a breath so light—courage grows in silent might. 🤫💪",
    "You are more than what you see—hidden roots birth mighty trees. 🌳🌿",
    "The tides may pull, the waves may call, but steady hearts will never fall. 🌊❤️",
    "Fire may fade, but ashes tell of phoenix wings that rose and fell. 🔥🦅",
    "The darkest paths may twist and turn, but in the end, the stars still burn. 🌌✨",
    "No mountain high, no valley deep—just one more step, and strength will keep. 🏔️🚶‍♂️",
    "Let the echoes of your heart resound—your voice, your soul, a battle ground. 🗣️⚔️",
    "Fear may whisper, doubt may cry, but courage roars and learns to fly. 🦁🦅",
    "A single flame defies the dark—a tiny spark, a blazing heart. 🔥❤️",
    "The dawn will rise, the night will fade—hold on tight, don’t be afraid. 🌅🌌",
    "Trust the silence, hear the beat—your heart still moves, your soul still speaks. 🤫❤️",
    "Clouds may cover, winds may moan, but even lost, you’re not alone. ☁️🌬️",
    "You are ink upon the page—write your story, bold and brave. ✍️📖",
    "The climb is steep, the air is thin, but heights are reached by those who begin. 🏔️🚶‍♂️",
    "The waves may crash, the sea may wail, but steadfast hearts will never fail. 🌊❤️",
    "Even the sky was once a dream, waiting for wings to break the seam. 🌌🦅",
    "Broken wings still find the sky—healing comes when you dare to try. 🦋✨",
    "A whisper, a wish, a soft refrain—hope returns like gentle rain. 🌧️💧",
    "Shadows flee where torches burn—be the light and watch them turn. 🔦✨",
    "Even the longest road must end, so take each step and round the bend. 🛣️🚶‍♀️",
    "Let your heart be bold and free—like rivers rushing to the sea. 🌊❤️",
    "The thunder roars, the lightning calls, but even storms must learn to fall. ⚡⛈️",
    "Like ancient stone, like rooted trees, you stand through time with silent ease. 🪨🌳",
    "The past may whisper, but don’t turn back—your future waits beyond the track. 🕰️🛤️",
    "Some dreams may break, but not the soul—your fire still burns, you’re still whole. 🔥❤️",
    "The sky may weep, the earth may shake, but hope is something time won’t take. 🌧️⏳",
    "The night is long, the road is wide, but dreams still bloom where hearts abide. 🌌🛤️",
    "Your voice is thunder, your heart a star—never forget how bright you are. ⚡🌟",
    "Stand like the oak, bend like the reed—both find strength in what they need. 🌳🎋",
    "The mountain waits, the path is steep—but every step is yours to keep. 🏔️🚶‍♂️",
    "Chase the wind, dance with the sea—live as wild as you can be. 🌬️🌊",
    "No rain, no bloom, no frost, no fire—growth is born through each desire. 🌧️🔥",
    "The path you walk may twist and break, but onward still, you’ll find your way. 🛤️🚶‍♀️",
    "A broken wing may heal with time, but only if you dare to climb. 🦅⏳",
    "Darkness comes, but so does light—hold on tight through endless night. 🌌✨",
    "The stars don’t ask, they simply shine—so take your place, for it is time. 🌟⏳",
    "The echoes call, the past may cry, but forward still, you touch the sky. 🗣️🦅",
    "Time may slip like grains of sand, but hope still lingers in your hand. ⏳🤲",
    "A whisper, a dream, a step untold—your story waits, so make it bold. 🤫📖",
    "The sky is endless, wild, and free—so spread your wings and dare to be. 🌌🦅",
    "You are thunder, you are light—roar aloud and chase the night. ⚡🌌",
    "Even the deepest wounds will mend—hearts will heal and spirits bend. ❤️🦋",
    "You are the song, the verse, the line—sing your truth and make it shine. 🎶✨",
    "The road is rough, the path is steep, but strength is found where shadows weep. 🛤️😢",
    "The wind may howl, the trees may break, but roots endure what time may take. 🌬️🌳",
    "In silent dark, the stars still gleam—never forget you hold a dream. 🌟🌌",
    "No storm can last, no night remains—each dawn will wipe away the pain. ⛈️🌅",
    "Rise again like golden beams—chase the sky, pursue your dreams. 🌅✨",
    "The river knows the way to go—let your heart’s tide freely flow. 🌊❤️",
    "A single voice can move the sea—believe in yourself and set it free. 🗣️🌊",
    "You are a flame, you are the spark—shine your light and leave your mark. 🔥✨",
    "Strength is not in never falling, but in rising every time you do. 💪🦁",
    "Embrace the journey, cherish the fight—greatness is born in darkest night. 🌌⚔️",
    "The waves may crash, the storm may rage, but you are stronger than the cage. 🌊⚔️",
    "Through the darkest night, the stars will guide—keep your faith and walk with pride. 🌟🚶‍♂️",
    "Like the tide, you rise and fall—but through it all, you stand tall. 🌊🦁",
    "Strength is forged in fire and fight—let your courage burn so bright. 🔥⚔️",
    "Hope is the whisper that never fades, the ember glowing beneath the waves. 🌊🔥",
    "Every step forward, no matter how small, is a victory worth it all. 👣🏆",
    "Let the echoes of your dreams resound—the world is waiting for your sound. 🗣️🌍",
    "A tree stands tall because its roots run deep—ground yourself, and strength you'll keep. 🌳🌱",
    "Even in silence, your heart still sings—a melody of hope on golden wings. 🤫🎶",
    "The storm will pass, the sky will clear—hold on tight, your dawn is near. ⛈️🌅",
    "Even the smallest step is a stride toward greatness—keep moving forward. 👣🚶‍♀️",
    "The waves may toss, the winds may cry, but you were born to touch the sky. 🌊🦅",
    "Turn your scars into stories, your pain into power—this is your hour. ⚔️🦁",
    "Every challenge is a lesson in disguise—embrace it, rise, and claim your prize. 🎓🏆",
    "Like a river carving stone, persistence shapes the strongest throne. 🌊👑",
    "Beneath the weight of struggle grows the strength of mountains. ⛰️💪",
    "The sky may darken, the night may weep, but dreams still bloom when faith runs deep. 🌌🌸",
    "You are the dawn, the golden light—break through the dark and claim your might. 🌅✨",
    "A warrior's heart beats in your chest—never give up, give it your best. ⚔️❤️",
    "Even the longest winter must give way to spring—hope is always blossoming. ❄️🌸",
    "Each sunrise is proof that endings are beginnings in disguise. 🌅🔄",
    "Fear may stand at the door, but courage is the key—unlock your destiny. 🗝️🚪",
    "You are not lost; you are simply finding a new path to your dreams. 🛤️✨",
    "Let the fire in your soul light the way when the world feels dark. 🔥🕯️",
    "You were made for greatness—step into the light and own your power. 🌟💪",
    "Your journey is a masterpiece—every brushstroke, a part of your story. 🎨📖",
    "No matter the storm, your heart is the anchor that keeps you steady. ⚓❤️",
    "Let your hope be a lighthouse that shines through every storm. 🏮⛈️",
    "The climb may be hard, but the view is worth every step. 🏔️👀",
    "Stand tall, even in the wind—your roots are stronger than the storm. 🌬️🌳",
    "The horizon calls, a promise anew—every sunrise is a gift just for you. 🌅🎁",
    "Through the cracks, the light will spill—even broken things can heal and fill. 💡🩹",
    "The wind may howl, the earth may quake, but your spirit is a force no storm can break. 🌬️⚔️",
    "Like the moon, you wax and wane, yet still you rise through joy and pain. 🌙🦋",
    "The stars above, though far and few, shine brightest when the night is through. 🌟🌌",
    "Your heart is a compass, your soul a map—trust the journey, don’t look back. 🧭🗺️",
    "The fire within is yours to tend—let it burn, let it mend. 🔥❤️",
    "Even the desert blooms with rain—your struggles will not be in vain. 🌵🌧️",
    "The world may spin, the skies may gray, but your light will never fade away. 🌍✨",
    "Like a phoenix, you’ll rise from the ash—stronger, wiser, bold, and brash. 🦅🔥",
    "The echoes of your dreams will guide—let them be the wind at your side. 🗣️🌬️",
    "The night is vast, but so are you—your dreams are endless, your heart is true. 🌌❤️",
    "The waves may crash, the sands may shift, but your soul is an eternal gift. 🌊🎁",
    "The stars are not afraid to shine—neither should you, for you’re divine. 🌟✨",
    "The path may twist, the road may bend, but every step will lead to the end. 🛤️🚶‍♀️",
    "Your scars are stories, your pain a song—sing it loud, for you are strong. 🎶💪"
];

function getRandomNumber2() {
    return Math.floor(Math.random() * encouragementLines.length);
}


async function getJoke(){
    try {
        let response =await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
        let data= await response.json();
        console.log(data);
        return(data.joke);
        
    } catch (error) {
        console.error('Error fetching the joke');
        
    }
}


async function getwur() {
    try {
        let response= await fetch("https://api.truthordarebot.xyz/api/wyr");
        let data =response.json();
        return(data.question);
        
    } catch (error) {
        console.log("error fetching would you rather"+error);
        
        
    }
    
}





client.on(Events.InteractionCreate, async interaction => {

    

    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {                                       //ping
        await interaction.reply('Pong!');
    }

    else if (interaction.commandName === 'encourage') {                                 //encourage
        let random_num=getRandomNumber2();

        const embed_en=new EmbedBuilder()
        .setColor("Random")
        .setTitle(`${encouragementLines[random_num]}`)

        interaction.reply({embeds:[embed_en]})

        
        // await interaction.reply(`${encouragementLines[random_num]}`);
    }

    else if(interaction.commandName === 'about'){
        const embed=new EmbedBuilder()
        .setColor(0x0099FF)
        
        .setAuthor({ name: 'I am Courage', iconURL: 'https://i.ibb.co/FLNT55Gg/courage-dog-dc-logo.jpg'})
        .setDescription("hello i am **Courage** a multi-purpose bot,I am developed by **VAIBHAV PATEL**.\n\nMy development is still in process so you might not find very exiting commands right now but you will surly get them in future       ")
        .setThumbnail('https://i.ibb.co/FLNT55Gg/courage-dog-dc-logo.jpg')

        .addFields({ name: 'GitHub', value: '[Click Here](https://github.com/vaibha-v7)', inline: true })
        .addFields({ name: 'Linkedin', value: '[Click Here](https://www.linkedin.com/in/vaibhav-patel-8417a6276/)', inline: true })
        
        .setImage('https://i.ibb.co/FLNT55Gg/courage-dog-dc-logo.jpg')
        .setTimestamp()
        .setFooter({ text: 'Made with 💖 & Discord.js by Vaibhav Patel ', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        interaction.reply({embeds:[embed]})
    }

    else if(interaction.commandName === 'joke'){
        let majak = await getJoke();
        // console.log(majak);

        const embed_joke=new EmbedBuilder()
        .setColor("Random")
        .setTitle(`${majak}`)

        await interaction.reply({embeds:[embed_joke]})
        // await interaction.reply(`${majak}`);     
    }

    else if(interaction.commandName==="wouldyourather"){
        let wur = await getwur();
        console.log(wur);
        
        const embed_wur= new EmbedBuilder()
        .setColor("Random")
        .setTitle(`${wur}`)

        await interaction.reply({embeds:[embed_wur]});
    }
});


client.login(process.env.TOKEN);


//bot appearance
//git push
//host
//developer title





