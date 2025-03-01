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

client.on('ready', (c) => {
    client.user.setActivity({                                                   //setting status
        name: "/encourage",
        type: ActivityType.Listening,
    })
})


client.on('messageCreate', (message) => {
    if (message.author.bot) return;


    const greetings = ["hi", "hello", "hey", "hola", "sup", "yo", "hlo"];


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


const wouldYouRatherQuestions = [
    "Would you rather marry someone who loves you deeply but you feel nothing for or someone you love deeply but they feel nothing for you?",
    "Would you rather stay in a toxic relationship forever or be single and lonely forever?",
    "Would you rather know your partner's every past romantic/sexual detail or never know anything about their past?",
    "Would you rather catch your partner cheating on you once but never again or never know but they cheat occasionally?",
    "Would you rather be madly in love but poor or rich but in a passionless marriage?",
    "Would you rather have a partner who never compliments you but is loyal or constantly compliments you but is a flirt?",
    "Would you rather have a partner who is overly clingy or emotionally distant?",
    "Would you rather find out your partner was in love with their ex the whole time or secretly had a huge crush on your best friend?",
    "Would you rather be in a long-distance relationship forever or live together but never feel emotionally connected?",
    "Would you rather be with someone who is great in bed but terrible at communication or emotionally perfect but zero physical chemistry?",
    "Would you rather break someone's heart badly or have your heart completely shattered?",
    "Would you rather be dumped in public or ghosted without explanation?",
    "Would you rather be with a partner who's never over their ex or one who cheats but still claims to love you?",
    "Would you rather know your relationship has an expiration date or be blindsided by a breakup?",
    "Would you rather be cheated on by your soulmate or never find real love?",
    "Would you rather date someone who constantly brings up their ex or someone who never opens up about their past at all?",
    "Would you rather stay friends with an ex who broke your heart or completely erase them from your memory?",
    "Would you rather get back with an ex who hurt you deeply or never be in love again?",
    "Would you rather forgive a cheater and try to rebuild trust or never be able to trust anyone again?",
    "Would you rather date someone who's always honest but brutal or someone who tells white lies to protect your feelings?",
    "Would you rather have your parents choose your spouse or never be allowed to marry at all?",
    "Would you rather have in-laws who completely control your marriage or a partner who never stands up for you?",
    "Would you rather marry someone your family hates but you love or someone your family loves but you feel nothing for?",
    "Would you rather have a perfect spouse but horrible in-laws or a difficult spouse but amazing in-laws?",
    "Would you rather have a partner who's obsessed with their family or one who completely ignores them?",
    "Would you rather never have kids but be with your true love or have kids but in an unhappy marriage?",
    "Would you rather adopt a child and raise them alone or stay childless in a relationship?",
    "Would you rather have a spouse who works all the time but provides well or one who's always around but financially struggling?",
    "Would you rather never argue in a relationship but have no deep connection or fight often but be madly in love?",
    "Would you rather be stuck in a loveless marriage for life or never be able to marry at all?",
    "Would you rather have a partner who never cheats but is constantly broke or one who provides everything but has cheated once?",
    "Would you rather be with someone who makes millions but never has time for you or someone who earns little but gives you all their time?",
    "Would you rather win the lottery but your partner leaves you or stay poor but happily in love?",
    "Would you rather work a miserable job for wealth and comfort or struggle financially while chasing your passion?",
    "Would you rather find out your partner is only with you for your money or is deeply in love but terrible at managing money?",
    "Would you rather share every cent with your partner or never be allowed to talk about money in your relationship?",
    "Would you rather marry for financial security or for love knowing you'll struggle financially forever?",
    "Would you rather pay off all your partner's debts or let them struggle but keep your own money safe?",
    "Would you rather have a partner who spends recklessly or one who controls every cent of your finances?",
    "Would you rather live in luxury but never be in love or live paycheck to paycheck but in the happiest relationship?",
    "Would you rather have a partner who keeps small secrets or one who overshares everything?",
    "Would you rather find out your partner lied about their entire past or that they lied about their feelings for you?",
    "Would you rather be with someone who loves you but is a compulsive liar or someone who is brutally honest but emotionally cold?",
    "Would you rather find out your partner is in love with someone else but stays with you or that they secretly have another family?",
    "Would you rather accidentally reveal your partner's deepest secret or have them reveal yours to the world?",
    "Would you rather be with a partner who flirts with everyone but never cheats or one who is cold in public but fully devoted to you?",
    "Would you rather find out your partner was in a secret relationship before you or that they are still secretly in contact with their ex?",
    "Would you rather have a partner who never apologizes even when wrong or one who apologizes too much but never changes?",
    "Would you rather know all of your partner's secrets but never be able to tell yours or keep all your own secrets but never know theirs?",
    "Would you rather forgive every lie your partner tells or never be able to lie in your relationship at all?",
    "Would you rather have a wild threesome or a mind-blowing one-night stand with someone out of your league?",
    "Would you rather have sex in front of a live audience or watch yourself on tape with your entire friend group?",
    "Would you rather be tied up and dominated or be the one in full control?",
    "Would you rather only be able to have angry, rough sex or only have slow, sensual lovemaking?",
    "Would you rather get caught having sex in public or accidentally send your boss a full nude?",
    "Would you rather be with someone who's into every kink except yours or someone with zero kinks at all?",
    "Would you rather have an orgasm every time someone touches you or never be able to orgasm again?",
    "Would you rather have to moan uncontrollably every time you talk or scream your partner's name every time you sneeze?",
    "Would you rather have sex in an airplane bathroom or in the middle of a crowded party?",
    "Would you rather have your partner dirty talk non-stop during sex or be completely silent the whole time?",
    "Would you rather have a one-night stand with your ex or let your current partner sleep with their ex?",
    "Would you rather only ever be a giver or only ever be a receiver in bed?",
    "Would you rather be caught watching adult content at work or have your browser history leaked to your parents?",
    "Would you rather be forced to make an adult film that gets leaked or have to watch your parents'?",
    "Would you rather scream out the wrong name during sex or hear your partner scream out someone else's?",
    "Would you rather get a tattoo of your worst hookup's name or never have sex again?",
    "Would you rather have sex in a glass room in public or never have sex again?",
    "Would you rather never use a condom again or never give oral again?",
    "Would you rather have sex with someone who only dirty talks in a cringe way or never speaks at all?",
    "Would you rather sleep with someone who is gorgeous but terrible in bed or average-looking but the best sex ever?",
    "Would you rather be forced to sext your boss or accidentally send your mom a full nude?",
    "Would you rather have sex with your biggest turn-off or have your partner tell you you're bad in bed?",
    "Would you rather have sex every day but never finish or only have sex once a year but with the best orgasm of your life?",
    "Would you rather roleplay as a stranger every time or always have to call your partner \"Daddy/Mommy\"?",
    "Would you rather be blindfolded for every sexual encounter or handcuffed every time?",
    "Would you rather have your nudes leaked to the entire internet or walk in on your parents having sex and have them see you?",
    "Would you rather have a partner who only talks dirty in baby voice or one who calls you by your full legal name in bed?",
    "Would you rather have sex in a freezing cold room or in a room that's way too hot?",
    "Would you rather only be able to have sex to cartoon theme songs or elevator music?",
    "Would you rather have to narrate your own sex life in real-time or have your best friend do it for you?",
    "Would you rather be forced to make an OnlyFans or never be able to watch adult content again?",
    "Would you rather have one-night stands with strangers forever or be stuck in a sexless relationship forever?",
    "Would you rather have to do it in front of a camera or have your partner describe it in full detail to your parents?",
    "Would you rather have to use food in the bedroom every time or never be allowed to use your hands?",
    "Would you rather be stuck with a partner who won't let you finish or one who finishes in 10 seconds?",
    "Would you rather have sex in the middle of a thunderstorm or while being watched by your ex?",
    "Would you rather have to moan like a pornstar every time or be completely silent no matter how good it is?",
    "Would you rather be walked in on by your best friend or your sibling while having sex?",
    "Would you rather have sex in a haunted house or a church confessional booth?",
    "Would you rather be locked naked outside overnight or accidentally send your entire contact list a full-body nude?",
    "Would you rather have to cheat on your partner once or be cheated on but never find out?",
    "Would you rather watch your best friend hook up with your ex or be forced to hook up with your ex one last time?",
    "Would you rather swap bodies with your partner for a week or swap sex drives with them forever?",
    "Would you rather be caught cheating in public or accused of cheating even though you're innocent?",
    "Would you rather have to tell your deepest, darkest secret to your enemy or be forced to tell your partner every bad thing you've ever done?",
    "Would you rather find out your partner has a secret second family or find out they've been lying about their entire past?",
    "Would you rather be forever trapped in a bad relationship with amazing sex or a perfect relationship with zero sex?",
    "Would you rather be forced to marry someone you hate or be single forever with no sex?",
    "Would you rather never be able to experience love or never be able to experience lust?",
    "Would you rather have every single lie you've ever told revealed or have to listen to everyone else's true thoughts about you?",
    "Would you rather know the exact date you'll die or know how you'll die but not when?",
    "Would you rather lose all your past memories or never be able to make new ones?",
    "Would you rather always feel extreme pain but never die or die instantly but painlessly right now?",
    "Would you rather have eternal life but everyone forgets you or a short but meaningful life where you're remembered forever?",
    "Would you rather be trapped in your worst nightmare forever or live a normal life but have a new fear haunt you every day?",
    "Would you rather be completely alone for the rest of your life or surrounded by fake people who secretly hate you?",
    "Would you rather be forced to watch your worst mistake replayed daily or never remember anything past yesterday?",
    "Would you rather be rich but everyone hates you or poor but everyone adores you?",
    "Would you rather restart your life from birth but keep all your current memories or skip 10 years into the future with $10 million?",
    "Would you rather have infinite knowledge but never be able to share it or be the dumbest person alive but everyone listens to you?",
    "Would you rather save a loved one but 100 strangers die or save 100 strangers but lose your loved one?",
    "Would you rather have to lie to your best friend every day or never be able to lie even when needed?",
    "Would you rather be the reason for someone's death or know someone died because you failed to act?",
    "Would you rather steal $1 million from a stranger or steal $100 from your best friend?",
    "Would you rather be hated for something you didn't do or loved for something you didn't deserve?",
    "Would you rather be able to stop all crime but never be happy or live in a crime-filled world but be personally happy?",
    "Would you rather always be morally right but hated or morally wrong but admired?",
    "Would you rather be responsible for destroying the world or be the only person who survives its destruction?",
    "Would you rather be able to save one person you love from death or prevent a massive disaster that kills thousands?",
    "Would you rather take full blame for a crime you didn't commit or let your best friend take the fall for something they didn't do?",
    "Would you rather have unlimited money but never feel love or deep love but always struggle financially?",
    "Would you rather have everything you touch turn to gold but never be able to touch another person, or be poor but loved by all?",
    "Would you rather have absolute power over the world for a year or be a regular person but truly happy forever?",
    "Would you rather be able to buy anything but never enjoy it or have the best experiences but never afford anything you want?",
    "Would you rather win the lottery but be forced to leave everyone you love behind or stay with them but always be broke?",
    "Would you rather have infinite wisdom but be unable to use it or have great wealth but lose all emotions?",
    "Would you rather work a miserable high-paying job or a dream job that barely pays the bills?",
    "Would you rather be loved by millions but secretly miserable or completely unknown but deeply content?",
    "Would you rather have a billion dollars but only live for 10 more years or be immortal but always poor?",
    "Would you rather be a successful fraud who never gets caught or an honest failure who is constantly judged?",
    "Would you rather know everyone's thoughts but never be able to turn it off, or have everyone know your thoughts all the time?",
    "Would you rather have to relive your most painful moment over and over or never feel happiness again?",
    "Would you rather be trapped in a time loop of the worst day of your life or be stuck reliving an average boring day forever?",
    "Would you rather be able to pause time but age normally or rewind time but lose a year of life every time you do?",
    "Would you rather be able to see the future but unable to change it or able to change the past but with unintended consequences?",
    "Would you rather be forced to relive every embarrassing moment of your life in a loop or have everyone see them on a public screen?",
    "Would you rather always say exactly what you're thinking or never be able to speak again?",
    "Would you rather erase your worst memory but lose a great one or keep all your memories, including the painful ones?",
    "Would you rather never sleep again but never feel tired or have to sleep 20 hours a day?",
    "Would you rather wake up as a completely different person with no memories or live your life knowing it was all a simulation?",
    "Would you rather be the only person who remembers the past or the only one who can see the future but no one believes you?",
    "Would you rather be able to live in any fictional world but never return or stay in reality but control everything around you?",
    "Would you rather be trapped in a video game world where death is permanent or stuck in a never-ending dream?",
    "Would you rather have the ability to read minds but go insane or control minds but lose your own identity?",
    "Would you rather be able to jump into any book and live its story or jump into any movie but never return to real life?",
    "Would you rather be able to swap bodies with anyone at will but only for 1 hour or live in someone else's body permanently?",
    "Would you rather wake up as the richest person alive but be hunted by assassins or become a superhero but have your family taken hostage?",
    "Would you rather gain superhuman intelligence but be completely alone or have a perfect life but lose 50 IQ points?",
    "Would you rather be able to teleport anywhere but never be able to stay in one place for more than a day or be invisible but only when no one is looking?",
    "Would you rather live forever but everyone forgets you exist or live a perfect life but die in 10 years?",
    "Would you rather have mind-blowing one-night stands forever or a committed relationship but average sex?",
    "Would you rather have a partner who is amazing in bed but toxic in life or loving and supportive but bad in bed?",
    "Would you rather be in a relationship where you can never touch each other or one where you can only touch but never emotionally connect?",
    "Would you rather never be able to finish but enjoy the build-up forever or get straight to the end every time but no build-up?",
    "Would you rather have a partner who is wild in private but reserved in public or one who is openly flirty but vanilla in private?",
    "Would you rather have passionate nights but no emotional connection or deep emotional intimacy but no physical intimacy?",
    "Would you rather only be able to do it in public places but never get caught or only in private but someone always hears?",
    "Would you rather always have to wear lingerie/boxers in public or never be able to wear underwear again?",
    "Would you rather be in a dominant-submissive relationship forever or have no control over your pleasure at all?",
    "Would you rather be with someone who is obsessed with trying new things constantly or only does the same routine every time?",
    "Would you rather have a secret affair that never gets discovered or be completely loyal but your partner always suspects you?",
    "Would you rather have your wildest secret exposed publicly or be forced to hear your partner's every past experience in detail?",
    "Would you rather have a sex tape of yours leaked or accidentally leak a close friend's tape?",
    "Would you rather never be able to self-pleasure again or never have a partner again?",
    "Would you rather have to describe every intimate experience to your parents or listen to them describe theirs?",
    "Would you rather have to send spicy texts to your boss or accidentally send a pic to your mom/dad?",
    "Would you rather have to walk around naked for an hour in your neighborhood or be handcuffed to an ex for 24 hours?",
    "Would you rather be a voyeur (watch but never touch) or an exhibitionist (do it while being watched)?",
    "Would you rather have a secret fling with your best friend's partner or have your best friend hook up with your partner?",
    "Would you rather have a passionate night with your enemy or never experience passion again?",
    "Would you rather have a one-time experience with your ultimate fantasy partner or a lifetime of average experiences with your true love?",
    "Would you rather only be able to do it in complete darkness forever or always have bright lights and a full audience?",
    "Would you rather be with someone who is aggressive and dominant in bed or completely submissive and follows your every command?",
    "Would you rather have to role-play as a stranger every time or never be able to change positions again?",
    "Would you rather only be able to use toys forever or never be able to use them again?",
    "Would you rather have your partner handcuffed to you for a full day or be blindfolded every time?",
    "Would you rather have to moan loudly in public every time you hear your name or accidentally send a spicy voicemail to your entire contact list?",
    "Would you rather have a wild one-night stand with a celebrity or a secret long-term affair with someone you shouldn't be with?",
    "Would you rather only be able to be intimate outdoors or only in complete silence?",
    "Would you rather be in a relationship where you can never say no to your partner's requests or where they can never say yes to yours?",
    "Would you rather be blackmailed with an intimate video or have to blackmail someone else?",
    "Would you rather be caught by your parents or accidentally walk in on them?",
    "Would you rather have a wild experience with your boss for a promotion or be stuck in a terrible job forever?",
    "Would you rather have your partner secretly recording everything or have to record and send proof of everything to them?",
    "Would you rather have a \"truth serum\" make you confess all your fantasies or have all your browser history leaked?",
    "Would you rather be tied up and teased forever without finishing or never experience teasing again?",
    "Would you rather only be able to do it in a car forever or never be able to do it outside a bed again?",
    "Would you rather have your intimate moments live-streamed to the world or be banned from intimacy forever?",
    "Would you rather accidentally say your ex's name in bed or have your partner say someone else's name?",
    "Would you rather have to describe your wildest fantasy to a group of strangers or act it out once in front of them?",
    "Would you rather have a wild experience with your friend's partner or have your best friend do it with your partner?",
    "Would you rather have a fantasy come true but can never do it again or never experience it but always dream about it?",
    "Would you rather have a partner who is always louder than necessary or one who never makes a sound?",
    "Would you rather be forced to share every spicy detail of your experiences with your coworkers or never be able to do it again?",
    "Would you rather have to watch spicy movies with your family or watch your own tape with them?",
    "Would you rather be the star of an underground adult film or direct one for someone else?",
    "Would you rather only be able to do it in extreme weather conditions or never again if it's not in a perfect setting?",
    "Would you rather have a partner who talks dirty nonstop during it or one who is completely silent the whole time?",
    "Would you rather have a one-time secret experience with a married person or be in a long-term love affair with someone off-limits?",
    "Would you rather be a master of teasing but never finish or always finish too quickly but with no control?",
    "Would you rather be completely owned by someone who controls everything you do or own someone who obeys your every command?",
    "Would you rather be chained up and teased for hours with no release or be in full control but unable to feel anything?",
    "Would you rather be forced to beg for pleasure or have someone beg you for it?",
    "Would you rather have a secret underground dungeon for your deepest fantasies or be forced to experience someone else's darkest fantasy?",
    "Would you rather be collared and marked as owned forever or own someone who is devoted to your pleasure only?",
    "Would you rather be denied pleasure for a whole year or be unable to stop yourself from craving it all the time?",
    "Would you rather be forced to obey someone's every demand for 24 hours or have full control over someone else for a week?",
    "Would you rather have to wear a tracking device that lets someone control when and how you feel pleasure or be able to control someone else's pleasure with a remote?",
    "Would you rather never be able to touch again but always be craved or have endless pleasure but never feel truly desired?",
    "Would you rather be kept as a personal secret, hidden from the world or be someone's ultimate public obsession?",
    "Would you rather have an intense one-night secret affair with someone dangerous or a long-term secret affair with someone completely off-limits?",
    "Would you rather share your darkest fantasy with a stranger or have your best friend accidentally discover it?",
    "Would you rather have a wild night with someone forbidden (teacher, boss, best friend's partner, etc.) or never experience fantasy fulfillment?",
    "Would you rather have a hidden relationship with someone you shouldn't be with or be in an open relationship where your partner does whatever they want?",
    "Would you rather have a tape of your wildest night leaked or have your deepest secret fantasy revealed to the world?",
    "Would you rather be in a relationship where you can never say no to anything or one where your partner is completely at your mercy?",
    "Would you rather have a secret online identity to explore your darkest desires or be forced to live out your fantasies in real life with no way to hide?",
    "Would you rather have to publicly confess your darkest kink or be blackmailed into doing it once?",
    "Would you rather be blindfolded and taken wherever someone desires or be in full control but never feel surprise again?",
    "Would you rather be teased endlessly but never satisfied or get everything instantly but never feel the build-up?",
    "Would you rather experience intense pleasure but never be able to stop or be denied pleasure but crave it forever?",
    "Would you rather be completely helpless and at someone's mercy or have someone completely helpless at your command?",
    "Would you rather have a partner who loves to push your limits in private or one who teases you in public but keeps it mild behind closed doors?",
    "Would you rather be forced to endure hours of teasing with no release or be overstimulated to the point of exhaustion?",
    "Would you rather have to submit to your deepest, darkest fantasy once or be denied any fantasy forever?",
    "Would you rather be punished for every mistake you make or rewarded for every time you give in?",
    "Would you rather be in a scenario where you're not allowed to speak or resist or one where you control someone who can't refuse?",
    "Would you rather have to wear a hidden pleasure device controlled by someone else or be forced to control someone else's without them knowing?",
    "Would you rather experience pain mixed with pleasure forever or only be allowed to have pleasure once a year?",
    "Would you rather be trapped in a room with someone who controls you completely or be the one controlling someone but unable to stop?",
    "Would you rather be teased in public where no one notices or do something wild in private but be filmed?",
    "Would you rather have to wear something risqué in a professional setting or have to hide something extremely inappropriate on your body all day?",
    "Would you rather be forced to do something public but subtle or be in private but so loud everyone hears?",
    "Would you rather be a famous secret fantasy to others or be obsessed with someone who doesn't know you exist?",
    "Would you rather be completely exposed in front of an audience or watch someone else experience the same with no control?",
    "Would you rather have to sneak around and never get caught or be forced to be completely open but judged for it?",
    "Would you rather have a secret room full of forbidden pleasures or have unlimited access to others' secrets but never your own?",
    "Would you rather be teased in front of others but no one knows or have to keep your desires a secret forever?",
    "Would you rather have to do something wild on camera but never see it again or be forced to watch others do it while never participating?",
    "Would you rather have every thought of yours exposed to your partner or never know what they're secretly thinking?",
    "Would you rather be able to erase all your forbidden fantasies but lose your passion or live them out once but have to keep them a secret forever?",
    "Would you rather have a wild experience with someone twice your age or someone much younger but fully consenting?",
    "Would you rather be locked in a room with your biggest desire or be given full control over someone else's biggest desire?",
    "Would you rather have your deepest fantasy written as a best-selling book or acted out as an underground secret film?",
    "Would you rather have to act out your darkest desire once or never experience passion again?",
    "Would you rather have someone you barely know control you completely or be able to control someone you're obsessed with but never touch them?",
    "Would you rather be trapped in a room where you have to obey every command or be the one giving every command with no refusal?",
    "Would you rather experience your wildest fantasy but never tell anyone or only be able to dream about it but never live it?",
    "Would you rather be completely restrained with no way to stop or be the one restraining someone with full control?",
    "Would you rather have your darkest fantasy played out once but erased from memory or never experience it but remember every detail?"
];

function getRandomNumber3() {
    return Math.floor(Math.random() * wouldYouRatherQuestions.length)
}

const jokes = [
    "I like my coffee like I like my women—hot, strong, and all over my lap.",
    "Sex is like air; it’s not a big deal unless you’re not getting any.",
    "Condoms are like Cinderella’s shoes—if it doesn’t fit, it’s probably not yours.",
    "My girlfriend told me to go deeper… so I took up philosophy.",
    "What’s the difference between your job and your wife? After five years, your job will still suck.",
    "I asked my wife what she wanted for Valentine’s—she said, 'something with diamonds,' so I got her a deck of cards.",
    "I have the body of a porn star… unfortunately, it’s Ron Jeremy.",
    "Life is like a penis—simple, relaxed, and free… until a woman makes it hard.",
    "Why did the sperm cross the road? Because I wore the wrong socks.",
    "Women fake orgasms, but men fake entire relationships.",
    "My girlfriend told me to whisper dirty things in her ear… so I said, 'The kitchen.'",
    "What’s the difference between a joke and two d*cks? You can’t take a joke.",
    "I like my women like I like my bacon—hot, greasy, and ready in five minutes.",
    "They say love is in the air… maybe that’s why I’m suffocating.",
    "If sex is a pain in the ass, you’re doing it wrong.",
    "I bought my girlfriend a vibrator—now she texts me less.",
    "I tried phone sex once, but the hole in my phone was too small.",
    "She said size doesn’t matter… but she’s still buying a bigger TV.",
    "I told my wife she should embrace her mistakes—so she hugged me.",
    "If a man says he’ll fix something, he will—no need to remind him every six months.",
    "Condoms are like Cinderella’s shoes—if it doesn’t fit, it’s probably not yours.",
    "Sex is like air; it’s not a big deal unless you’re not getting any.",
    "What’s 6 inches long, has a head, and drives women crazy?A $100 bill.",
    "Love is like a fart… if you have to force it, it's probably crap.",
    "My girlfriend told me to be more in touch with my feminine side, so I crashed the car.",
    "My wife said I never listen to her… at least I think that's what she said.",
    "Relationships are like algebra. Have you ever looked at your X and wondered Y?",
    "My girlfriend said I'm terrible at directions, so I packed my bags and right.",
    "Love is sharing your popcorn. Marriage is when they take it and leave you with the crumbs.",
    "Dating is like a walk in the park… Jurassic Park.",
    "My girlfriend told me I should do lunges to stay in shape. That would be a big step forward.",
    "The key to a successful relationship is honesty. So, I told my girlfriend I have a second one.",
    "A good relationship is like a casserole—only those who make it know what goes in.",
    "Marriage is like a deck of cards. In the beginning, all you need is two hearts and a diamond. By the end, you're looking for a club and a spade.",
    "My wife asked me what's on TV… dust, I said.",
    "I asked my wife where she wanted to go for our anniversary. She said, \"Somewhere I've never been.\" I said, \"Try the kitchen.\"",
    "Marriage is just texting each other, \"Do we need anything from the store?\" until one of you dies.",
    "My wife said she wanted space. I locked her outside.",
    "I married my wife for her looks, but not the ones she's giving me now.",
    "The secret to a happy marriage? A husband who is deaf and a wife who is blind.",
    "My wife and I always hold hands. If I let go, she starts shopping.",
    "Why do married men die before their wives? Because they want to.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "My ex left me because of my obsession with pasta. I'm feeling cannelloni right now.",
    "My girlfriend broke up with me because I quote Linkin Park too much. But in the end, it doesn't even matter.",
    "My ex and I had a lot of communication issues… I'd text, she'd ignore.",
    "My ex said I never listen. Or something like that.",
    "I ran into my ex today… then I put it in reverse and ran over her again.",
    "My ex-girlfriend said she was missing me. I told her to check under the bed.",
    "Breakups are like a mirror. It's better to leave them broken than hurt yourself trying to fix it.",
    "My ex asked me to get back together. I told her I don't date fossils.",
    "My ex upgraded to a new man. Too bad she's still running the same old drama.",
    "My ex told me I was childish. I told her to get out of my pillow fort.",
    "My girlfriend told me to take out the trash… I packed my bags.",
    "I asked my wife what she wanted for her birthday. She said, \"Nothing would make me happier than a diamond ring.\" So I got her nothing.",
    "A relationship is like Wi-Fi—when the connection is strong, it's great, but when it's weak, you start searching for better options.",
    "My wife says I have two faults: I don't listen, and… some other stuff.",
    "If a man says he'll fix something, he will. There's no need to remind him every six months.",
    "Arguing with a woman is like reading the software agreement. In the end, you just agree to everything.",
    "My wife told me to put the toilet seat down. I told her to put the lid up. We're now both dehydrated.",
    "Relationships are just two people constantly asking each other what they want to eat until they die.",
    "I told my girlfriend she drew her eyebrows too high. She looked surprised.",
    "I thought my wife was kidding when she said she wanted to go on a diet. It was the most fattening joke I ever made.",
    "My girlfriend said I never make her feel special… so I stopped talking to other girls.",
    "If a woman says, \"Do what you want,\" don't. It's a trap.",
    "My wife wanted me to take her somewhere expensive… so I took her to the gas station.",
    "If love is blind, why is lingerie so popular?",
    "I love my girlfriend, but sometimes she makes me feel like Google… she asks me everything but never listens to the answer.",
    "My wife said I should treat her like a queen… so I beheaded her.",
    "A husband is someone who, after taking out the trash, gives himself a trophy for \"helping around the house.\"",
    "My girlfriend said she needs more space. I sent her a map of the solar system.",
    "My girlfriend asked me if I believe in ghosts. I said no. Then she asked, \"So why are you ignoring me?\"",
    "I told my girlfriend I loved her, and she said, \"Thanks.\" I guess we're playing emotional poker now.",
    "Why did the banana go to the party? Because it was peeling kinky.",
    "What's the difference between your wife and your job? After five years, your job will still suck.",
    "My girlfriend told me to tie her up and do whatever I want… so I played Xbox.",
    "Why do girls love musicians? Because they know how to work their fingers.",
    "What's the difference between a lightbulb and a pregnant woman? You can unscrew a lightbulb.",
    "Why don't women trust men in bed? Because 90% of them are finishers, not starters.",
    "Why did the blonde bring a ladder to the bar? She heard the drinks were on the house.",
    "What do you call a woman who's really good at sex? A rare breed.",
    "What's the difference between a microwave and a woman? A microwave won't yell at you for pushing its buttons.",
    "What's the first thing a girl does when she wakes up? Puts on her clothes and goes home.",
    "What's long and hard and full of semen? A submarine.",
    "Why did the couple break up at the nudist beach? Because he couldn't keep it up.",
    "Why do lesbians make bad chess players? Because they always avoid the king.",
    "Why don't blind people skydive? It scares the hell out of the dog.",
    "Why do cannibals avoid clowns? Because they taste funny.",
    "What's the difference between sex and a Ferrari? I've actually had sex.",
    "Why do women love rich men? Because their wallets stay hard longer.",
    "What's the difference between a boyfriend and a sock? A sock doesn't cry when you stuff it in a drawer.",
    "What's the worst thing about dating a gymnast? You never know if she's cheating or just stretching.",
    "Why do men love women in yoga pants? Easy access to downward dog.",
    "What's the difference between sex and fishing? When you lie about fishing, people still respect you.",
    "What's the difference between an iPhone and your girlfriend? Your iPhone won't leave you for an Android user.",
    "Why do they call it a \"blowjob\"? Because \"job\" implies there's effort involved.",
    "Why don't women trust men? Because they pull out at the worst times—both in bed and in life.",
    "Why did the vibrator break up with the girl? It was tired of being the rebound.",
    "What's the most awkward moment during sex? When she says, \"That's it?\"",
    "My wife told me she'd do anything to make me happy… I told her to bring her best friend over.",
    "Why do women fake orgasms? Because they think we care.",
    "What's the difference between a G-spot and a golf ball? A guy will actually look for a golf ball.",
    "What do you call a guy with a small package? A minimalist.",
    "Why is a man's zipper called a fly? Because it's the only thing that moves that fast.",
    "Why did the banana break up with the vibrator? Because it found out it was being used for pleasure, not nutrition.",
    "What's the best thing about dating a homeless woman? You can drop her off anywhere.",
    "Why did the baker get arrested? He was caught pinching the buns.",
    "Why do they say love is blind? Because nobody would get laid if they could see each other sober.",
    "What do you call an IT guy who's bad in bed? A software engineer.",
    "Why don't lesbians get fat? Because they eat out all the time.",
    "I told my girlfriend she drew her eyebrows too high. She looked surprised.",
    "Why do men love curves? Because without them, they'd be lost.",
    "What do you call a guy who cries after sex? Uber.",
    "Why don't women trust men? Because the last time they did, they ended up with Eve and an apple.",
    "What's the difference between a pickpocket and a peeping Tom? One snatches watches, the other watches snatches.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "What do you call a woman who knows where her husband is at all times? A widow.",
    "Why don't chickens tell dirty jokes? Because they might crack up.",
    "Why is Santa always so jolly? Because he knows where all the naughty girls live.",
    "What's long, hard, and full of seamen? A submarine.",
    "What do you call a nun in a wheelchair? Virgin Mobile.",
    "Why did the couple break up at the gym? Because the relationship wasn't working out.",
    "I walked in on my parents having sex. Worst 30 minutes of my life.",
    "What do you call a cheap circumcision? A rip-off.",
    "Why do guys like cars with big mufflers? Because they like their girls the same way—loud and full of hot air.",
    "What's the hardest part about dating a blind girl? You have to keep describing your size.",
    "Why did the condom fly across the room? It was pissed off.",
    "Why are boobs like a train set? They're meant for kids, but grown men can't stop playing with them.",
    "What's the worst thing about having a threesome? Sleeping in the wet spot.",
    "Why don't women trust men in bed? Because they keep pulling out at the last second.",
    "What's the difference between your wife and a mosquito? Mosquitoes stop sucking after you slap them.",
    "Why don't people do stand-up comedy naked? Because the mic isn't the only thing that shrinks under pressure.",
    "Why did the man refuse to have a threesome with twins? He said he didn't want to work double shifts.",
    "Why don't priests play hide and seek? Because good luck hiding when Father finds you.",
    "Why do girls love bad boys? Because they know they'll get punished.",
    "What's better than roses on your piano? Tulips on your organ.",
    "What's the difference between a drug dealer and a prostitute? A prostitute can wash her crack and sell it again.",
    "What's the hardest part about eating vegetables? The wheelchair.",
    "What do you call an adult film about depression? Inside Out.",
    "What's the difference between my ex and a refrigerator? The fridge doesn't fart when you pull your meat out.",
    "Why did the priest get kicked out of the church? Because he kept trying to turn wine into minors.",
    "What's a 6.9? A great time ruined by a period.",
    "What do tofu and a dildo have in common? They're both meat substitutes."
];

function getRandomNumber4() {
    return Math.floor(Math.random() * jokes.length)
}

const savageRoasts = [
    "You're like a software update—nobody wants you, but we’re stuck with you.",
    "Your secrets are safe with me. I never even listen when you tell them.",
    "You bring everyone so much joy… when you shut up.",
    "You were born on a highway because that's where most accidents happen.",
    "You're proof that even mistakes can be repeated.",
    "The only thing you’ve ever successfully spread is disappointment.",
    "Your parents must be so proud… of your siblings.",
    "I’d agree with you, but I don’t support stupidity.",
    "You have something on your shirt—oh wait, that’s just failure.",
    "The only 'W' you’ve ever taken is in your name.",
    "You bring people together—because they all hate you.",
    "You should wear a sign that says, 'Not My Fault—I Was Raised This Way.'",
    "Your brain is like a browser with 100 tabs open—99 are frozen, and you have no idea where the music is coming from.",
    "I bet your passwords are '1234' and 'password.'",
    "Your IQ test came back negative.",
    "If stupidity was a sport, you’d have Olympic gold medals.",
    "You have something in your head—oh wait, that’s just air.",
    "You make a rock look like a genius.",
    "Your thoughts have the speed of dial-up internet.",
    "If brains were gas, you wouldn’t have enough to drive a toy car.",
    "You have something on your brain—oh wait, there’s nothing there.",
    "I tried to think of something nice to say about you, but my brain doesn’t work at that low of a frequency.",
    "You’re living proof that even evolution takes a break.",
    "Mirrors reflect reality, but even they refuse to show your face.",
    "Your hairline is doing the moonwalk.",
    "You look like something I drew with my non-dominant hand.",
    "You’re so ugly that when you cry, the tears run away from your face.",
    "Your face could scare a blind man into seeing again.",
    "You have something on your face—oh wait, that’s just bad genetics.",
    "You look like you belong in a 'before' picture.",
    "I’d tell you to glow up, but even the sun couldn’t help you.",
    "You look like an unfinished sketch.",
    "You’re like a penny—two-faced and not worth much.",
    "You have something on your personality—oh wait, that’s just toxicity.",
    "The only thing you run is your mouth.",
    "If being annoying was a job, you’d be the CEO.",
    "You bring nothing to the table except bad vibes.",
    "You have something on your energy—oh wait, that’s just pure negativity.",
    "You’re about as useful as a screen door on a submarine.",
    "You make dirt look interesting.",
    "If personality was currency, you’d be in deep debt.",
    "I’d roast you more, but nature already did a good job.",
    "You have something in your future—oh wait, never mind.",
    "The only thing lower than your standards is your bank account.",
    "You’re like a software update—no one wants you, but you keep forcing yourself in.",
    "You’d be a great motivational speaker—if failure was the goal.",
    "Your job must be collecting L’s because you seem to have a lot of them.",
    "The only promotion you’ll ever get is from 'unemployed' to 'still unemployed.'",
    "You have something in your career—oh wait, there is no career.",
    "If ambition was air, you’d have suffocated by now.",
    "Your resume is just a blank sheet of paper.",
    "Even rock bottom looks like success compared to your life.",
    "You must be a magician because every time you open your legs, dignity disappears.",
    "Your legs are like a gas station—always open and full of random strangers.",
    "Your sex life is like a McDonald's ice cream machine—always broken.",
    "The only thing tighter than your budget is your ex’s new girlfriend.",
    "Your pull-out game is weaker than your WiFi signal.",
    "You get more mileage than a rental car.",
    "The only thing you've ever made wet is the toilet seat.",
    "Your exes have a support group.",
    "You put the 'ho' in 'hopeless.'",
    "If thirst was a sport, you'd have Olympic gold.",
    "Your reflection begs for mercy every morning.",
    "Your face looks like it was made in Minecraft.",
    "Your hairline is running away faster than your ex.",
    "You look like a deepfake gone wrong.",
    "Even Photoshop couldn't fix that mess.",
    "You’re the reason horror movies exist.",
    "Your face could make onions cry.",
    "You look like an unpaid intern version of a celebrity.",
    "Your glow-up is still buffering.",
    "If looks could kill, yours would be an act of self-defense.",
    "Your personality is as dry as your DMs.",
    "If stupidity was a crime, you’d be on death row.",
    "You bring everyone down—like a failed parachute.",
    "Even your shadow leaves when you talk.",
    "You have the emotional depth of a puddle.",
    "You’re as fake as your Instagram followers.",
    "If common sense was currency, you'd be bankrupt.",
    "Your energy is so toxic, even Chernobyl would reject you.",
    "You make cardboard seem interesting.",
    "Your personality is a glitch in human evolution.",
    "Your sex game is so weak, I’d rather watch paint dry.",
    "The only thing you’ve ever turned on is your phone.",
    "Your head game is so bad, even a vacuum sucks better than you.",
    "Your sex appeal is like a Windows update—nobody wants it.",
    "Your body count is higher than your IQ.",
    "You’re a walking STD factory.",
    "Your D is like a ghost—everyone’s heard of it, but nobody’s seen it.",
    "Your moans probably sound like a dying goat.",
    "You f*ck like a broken clock—twice a day, and only for a minute.",
    "Your foreplay is so bad, people fake comas instead of orgasms.",
    "Your parents should’ve pulled out.",
    "The only thing smaller than your d*ck is your ambition.",
    "Your existence is proof that condoms aren’t 100% effective.",
    "Even your birth certificate is an apology letter.",
    "Your life’s peak was being born.",
    "Your dreams have restraining orders against you.",
    "You’re living proof that bad decisions have consequences.",
    "You bring nothing to the table—not even an appetite.",
    "If rock bottom had a basement, you’d live there.",
    "Your life is like a browser with too many tabs open, and every one of them is porn."
];

function getRandomNumber5(){
    return Math.floor(Math.random() * savageRoasts.length)
}










client.on(Events.InteractionCreate, async interaction => {



    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {                                       //ping
        await interaction.reply('Pong!');
    }

    else if (interaction.commandName === 'encourage') {                                 //encourage
        let random_num = getRandomNumber2();

        const embed_en = new EmbedBuilder()
            .setColor("Random")
            .setTitle(`${encouragementLines[random_num]}`)

        interaction.reply({ embeds: [embed_en] })


        // await interaction.reply(`${encouragementLines[random_num]}`);
    }

    else if (interaction.commandName === 'about') {
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)

            .setAuthor({ name: 'I am Courage', iconURL: 'https://i.ibb.co/FLNT55Gg/courage-dog-dc-logo.jpg' })
            .setDescription("hello i am **Courage** a multi-purpose bot,I am developed by **VAIBHAV PATEL**.\n\nMy development is still in process so you might not find very exiting commands right now but you will surly get them in future       ")
            .setThumbnail('https://i.ibb.co/FLNT55Gg/courage-dog-dc-logo.jpg')

            .addFields({ name: 'GitHub', value: '[Click Here](https://github.com/vaibha-v7)', inline: true })
            .addFields({ name: 'Linkedin', value: '[Click Here](https://www.linkedin.com/in/vaibhav-patel-8417a6276/)', inline: true })

            .setImage('https://i.ibb.co/FLNT55Gg/courage-dog-dc-logo.jpg')
            .setTimestamp()
            .setFooter({ text: 'Made with 💖 & Discord.js by Vaibhav Patel ', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        interaction.reply({ embeds: [embed] })
    }

    else if (interaction.commandName === 'joke') {
        let majak = getRandomNumber4();
        const embed_joke = new EmbedBuilder()
            .setColor("Random")
            .setTitle(`${jokes[majak]}`)

        interaction.reply({ embeds: [embed_joke] })
    }

    else if (interaction.commandName === "wouldyourather") {
        let random3 = getRandomNumber3();
        let user = interaction.options.getUser('mention') || interaction.user;

       
        interaction.reply(`**<@${user.id}>  ${wouldYouRatherQuestions[random3]}**`);
    }

    else if(interaction.commandName === "roast"){
        let mention = interaction.options.getUser('target');
        
        
        let random5 = getRandomNumber5();
    
        interaction.reply(`**<@${mention.id}> ${savageRoasts[random5]}**`);

    }
});




client.login(process.env.TOKEN);


//bot appearance
//git push
//host
//developer title





