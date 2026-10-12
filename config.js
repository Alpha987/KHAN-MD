// config.js - ESM Version
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (fs.existsSync(path.resolve('config.env'))) {
  dotenv.config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

export default {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: process.env.SESSION_ID || "IK~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0s2L3JLdVQ3N3JaWmczeVpCZStBQUJsS3AvQ01Gd0hneUs4SkVoUlYwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzN0bWZnVkl5OGQ0bTFXa2t6NjV0alZrektweFI2dWdUYSt5VjVOM0hRND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSlowRnQ5WVNNaVVKdGpkdXR1Y1Ira0o4RWNudXdXb1ozTFhtbzdJS1drPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmcnI2WCtjTm80YVBJU0VTL1FvN2tnUTdSRlZub2RVZFY1NS9qUXJiT1c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFb2ltU1FOdnRtMEpqVmdUVDJ6RUpnbDdDbGRNQWNVMDcvYWszanY1MjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJNa25ublNpZEJSNmwwR0NsOGFhSTBGQjI3clFZNFF4SEtZZVdYL3dLQjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS08vcXBZQlg0ejJYSHRvcFVSTVRCOVFHVmJVKzVkbndtcmpMUU9kVzFIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0d6Vy9oZStYT2dzM3dyWXJ6K2xoV2ZQeXhrRGhDL0V4NEFRbktSak0xOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJQbmhqWkJNdDFaei9kM1ZwQi82NVZvR0wzRWJHOVpqU0kweFI0K2hUcXhZL0RTVVgvR1FrRFh1NEw3bnhiOFNYZnNmeTUvckhqalUwMmNHbFhQTmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiI2SDNDRklrUlhnYjRaWnUxa3VaSFhFZEZxYTBuQnZOUEFYSHdpRXRCeDVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjEzNTQxNjg2Mjc0ODg5OEBsaWQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxNTRGNjFBMEVCODVCOEIwRTY2MjQ2MThDQjU4NzAiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoibGlkIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3OTE4Mjg2Mzd9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWUxEWTI3UFYiLCJtZSI6eyJpZCI6IjkyMzExNzc2MjA2NTo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTM1NDE2ODYyNzQ4ODk4OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJaXYyWmtHRUkzRnROWUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJibW9DUXVaR216MzBZQThoK2QrUTBheUoyV1JUNkxnS281cVd6L2hKWlFzPSIsImFjY291bnRTaWduYXR1cmUiOiJCYnk5M2lCbjFxN1krRDFqVERISCtSc1JHTmQ1VGVwYTB4UHJSeVNnbGJ6d3pDbUZra2VsT2VSNEFqTWZZWU84Rys4NzY5UktpNXhyVmV4aldDbG1DUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUmFxVHpsalR0ems4a3oxdzhyQVZkZG9rRXFxUkpZRXp4T0ZiSHZKeThob1B2K1VHNVQwdWQ5OWpSYWVhcFJhRHh0a3EzQjAyRERNamtieElPV0ZraEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMzU0MTY4NjI3NDg4OTg6NUBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVzVxQWtMbVJwczk5R0FQSWZuZmtOR3NpZGxrVStpNENxT2Fscy80U1dVTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FNSUNRZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzkxODI4NjM2LCJsYXN0UHJvcEhhc2giOiI0Sk9ZQUwiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNLKyJ9",
  PREFIX: process.env.PREFIX || ".",
  CHATBOT: process.env.CHATBOT || "off",
  BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
  MODE: process.env.MODE || "private",
  REPO: process.env.REPO || "https://github.com/JawadTechYT/KHAN-MD",
  WEBPAIR: process.env.WEBPAIR || "https://khanmd-pairx.onrender.com",
  NEWSLETTERID: process.env.NEWSLETTERID || "120363426563532140@newsletter",
 
  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: process.env.OWNER_NUMBER || "92342*******",
  OWNER_NAME: process.env.OWNER_NAME || "Jᴀᴡᴀᴅ TᴇᴄʜX",
  SUDO: process.env.SUDO 
    ? process.env.SUDO.split(',').map(s => s.trim()) 
    : ["123@lid"],
  BANNED: process.env.BANNED 
    ? process.env.BANNED.split(',').map(s => s.trim()) 
    : [],
  STATUS_LIKE_EMOJIS: process.env.STATUS_LIKE_EMOJIS 
    ? process.env.STATUS_LIKE_EMOJIS.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "💯"],
  REACT_EMOJIS: process.env.REACT_EMOJIS 
    ? process.env.REACT_EMOJIS.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "😂", "😮", "😎", "🥰", "👋", "🤝", "💯", "✨", "⭐", "🎉", "🤗", "😊", "🙌", "💪", "👏", "✅", "🎈", "🎊", "🏆", "⚡", "💫", "👌", "🤙", "💖", "💕", "💗", "👑", "💎", "🌟", "🎯", "🎨", "🎭", "🎪", "🎢", "🎡", "🎠"],
  OWNER_EMOJIS: process.env.OWNER_EMOJIS 
    ? process.env.OWNER_EMOJIS.split(',').map(e => e.trim()) 
    : ["👑", "💎", "⭐", "✨", "🔥", "💯", "✅", "🎉", "🤖", "⚡", "💫", "🌟", "🏆", "👾", "🚀", "💪", "🎯", "🔱", "♾️", "⚜️"],
  LINK_WARNINGS: process.env.LINK_WARNINGS 
    ? process.env.LINK_WARNINGS.split(',').map(s => s.trim()).filter(s => s) 
    : [],
 
  // ===== HEROKU SETTINGS =====
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",

  // ===== REACTION SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  STATUS_SENDER: process.env.STATUS_SENDER || "true",
  
  // ===== AUTO PRESENCE SETTINGS =====
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",

  // ===== ANTI FEATURES SETTINGS =====
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_STATUS: process.env.ANTI_STATUS || "true",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",

  // ===== MEDIA & AUTOMATION =====
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/6zd0ru.jpg",
  BOT_MEDIA_URL: process.env.BOT_MEDIA_URL || "https://files.catbox.moe/6zd0ru.jpg",
  AUDIO_URL: process.env.AUDIO_URL || 'https://files.catbox.moe/0toicz.mp3',
  AUTO_DOWNLOADER: process.env.AUTO_DOWNLOADER || "false",
  
  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DELETE_PATH: process.env.ANTI_DELETE_PATH || "inbox",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_SPAM: process.env.ANTI_SPAM || "false",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_BOT: process.env.ANTI_BOT || "false",
  PM_BLOCKER: process.env.PM_BLOCKER || "false",
  ANTI_MENTION: process.env.ANTI_MENTION || "false",
  ANTI_STATUS_MENTION: process.env.ANTI_STATUS_MENTION || "false",
  ANTI_EDIT: process.env.ANTI_EDIT || "true",
  ANTIEDIT_PATH: process.env.ANTIEDIT_PATH || "inbox",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",
  AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  
  // ===== WELCOME & GOODBYE SETTINGS =====
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || "*_@user joined the group, welcome! 🎉_*",
  GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || "*_@user has left the group, we will miss them! 👋_*",

  VERSION: process.env.VERSION || "10.0 Bᴇᴛᴀ",
  TIMEZONE: process.env.TIMEZONE || "Asia/Karachi",
};
