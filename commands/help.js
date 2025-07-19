const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || '𝙐𝙉𝘽𝘼𝙉-𝘽𝙊𝙏'}*  
   Version: *${settings.version || '2.0.5'}*
   by ${settings.botOwner || 'Mr UNBANNED TECH'}
   YT : ${global.ytch}
╚═══════════════════╝

*𝘼𝙇𝙇𝙊𝙒𝙀𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎:*

╔═══════════════════╗
🌐 *𝔾𝕖𝕟𝕖𝕣𝕒𝕝 𝕔𝕠𝕞𝕞𝕒𝕟𝕕𝕤*:
║ ᪣ .help or .menu
║ ᪣ .ping
║ ᪣ .alive
║ ᪣ .tts <text>
║ ᪣ .owner
║ ᪣ .joke
║ ᪣ .quote
║ ᪣ .fact
║ ᪣ .weather <city>
║ ᪣ .news
║ ᪣ .attp <text>
║ ᪣ .lyrics <song_title>
║ ᪣ .8ball <question>
║ ᪣ .groupinfo
║ ᪣ .staff or .admins 
║ ᪣ .vv
║ ᪣ .trt <text> <lang>
║ ᪣ .ss <link>
║ ᪣ .jid
╚═══════════════════╝ 

╔═══════════════════╗
👮‍♂️ *𝘼𝘿𝙈𝙄𝙉 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎*:
║ ᯼ .ban @user
║ ᯼ .promote @user
║ ᯼ .demote @user
║ ᯼ .mute <minutes>
║ ᯼ .unmute
║ ᯼ .delete or .del
║ ᯼ .kick @user
║ ᯼ .warnings @user
║ ᯼ .warn @user
║ ᯼ .antilink
║ ᯼ .antibadword
║ ᯼ .clear
║ ᯼ .tag <message>
║ ᯼ .tagall
║ ᯼ .chatbot
║ ᯼ .resetlink
║ ᯼ .welcome <on/off>
║ ᯼ .goodbye <on/off>
╚═══════════════════╝

╔═══════════════════╗
🔒 *Owner Commands*:
║ ༕ .mode
║ ༕ .autostatus
║ ༕ .clearsession
║ ༕ .antidelete
║ ༕ .cleartmp
║ ༕ .setpp <reply to image>
║ ༕ .autoreact
╚═══════════════════╝

╔═══════════════════╗
🎨 *Image/Sticker Commands*:
║ ➤ .blur <image>
║ ➤ .simage <reply to sticker>
║ ➤ .sticker <reply to image>
║ ➤ .tgsticker <Link>
║ ➤ .meme
║ ➤ .take <packname> 
║ ➤ .emojimix <emj1>+<emj2>
╚═══════════════════╝  

╔═══════════════════╗
🎮 *Game Commands*:
║ ➤ .tictactoe @user
║ ➤ .hangman
║ ➤ .guess <letter>
║ ➤ .trivia
║ ➤ .answer <answer>
║ ➤ .truth
║ ➤ .dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *AI Commands*:
║ ➤ .gpt <question>
║ ➤ .gemini <question>
║ ➤ .imagine <prompt>
║ ➤ .flux <prompt>
╚═══════════════════╝

╔═══════════════════╗
🎯 *Fun Commands*:
║ ➤ .compliment @user
║ ➤ .insult @user
║ ➤ .flirt 
║ ➤ .shayari
║ ➤ .goodnight
║ ➤ .roseday
║ ➤ .character @user
║ ➤ .wasted @user
║ ➤ .ship @user
║ ➤ .simp @user
║ ➤ .stupid @user [text]
╚═══════════════════╝

╔═══════════════════╗
🔤 *Textmaker*:
║ ➤ .metallic <text>
║ ➤ .ice <text>
║ ➤ .snow <text>
║ ➤ .impressive <text>
║ ➤ .matrix <text>
║ ➤ .light <text>
║ ➤ .neon <text>
║ ➤ .devil <text>
║ ➤ .purple <text>
║ ➤ .thunder <text>
║ ➤ .leaves <text>
║ ➤ .1917 <text>
║ ➤ .arena <text>
║ ➤ .hacker <text>
║ ➤ .sand <text>
║ ➤ .blackpink <text>
║ ➤ .glitch <text>
║ ➤ .fire <text>
╚═══════════════════╝

╔═══════════════════╗
📥 *𝘿𝙊𝙒𝙉𝙇𝙊𝘿 𝙈𝙀𝙉𝙐*:
║ ➤ .play <song_name>
║ ➤ .song <song_name>
║ ➤ .instagram <link>
║ ➤ .facebook <link>
║ ➤ .tiktok <link>
║ ➤ .video <song name>
║ ➤ .ytmp4 <Link>
╚═══════════════════╝

╔═══════════════════╗
💻 *Github Commands:*
║ ➤ .git
║ ➤ .github
║ ➤ .sc
║ ➤ .script
║ ➤ .repo
╚═══════════════════╝

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'KnightBot MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'KnightBot MD by Mr Unique Hacker',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
