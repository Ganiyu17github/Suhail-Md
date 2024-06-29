const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_39_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDczLFxuICAgICAgICA4MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgODksXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICA5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDgsXG4gICAgICAgIDg5LFxuICAgICAgICAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmNWN3eVVsQ0xUSmJPR2NBY3VTTHVZdFI5bGtKa3ljZHUxRDRFM3pSVFFZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIya0RDbF80TVEweWpCc2FLVGpTWDdnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ0YjUzM2JiLTNlYTUtNDk3ZC1hN2Y5LTljNzQxOTQyZTA1OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDE2MixcbiAgICAgIDQyLFxuICAgICAgNDYsXG4gICAgICAxOCxcbiAgICAgIDg2LFxuICAgICAgMTUsXG4gICAgICAzMixcbiAgICAgIDIxMSxcbiAgICAgIDE5MCxcbiAgICAgIDkyLFxuICAgICAgMTYsXG4gICAgICA2LFxuICAgICAgNCxcbiAgICAgIDE1MSxcbiAgICAgIDE1LFxuICAgICAgMjUsXG4gICAgICA1LFxuICAgICAgMjEzLFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICA5OCxcbiAgICAgIDEwMSxcbiAgICAgIDE1OSxcbiAgICAgIDEzMixcbiAgICAgIDI1MyxcbiAgICAgIDEzMCxcbiAgICAgIDEwMixcbiAgICAgIDE5MyxcbiAgICAgIDE1MSxcbiAgICAgIDExMixcbiAgICAgIDExLFxuICAgICAgMjA1LFxuICAgICAgMzQsXG4gICAgICA1MixcbiAgICAgIDIsXG4gICAgICAxOTYsXG4gICAgICA1MixcbiAgICAgIDE4OSxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTitGNmVRQ0VQK2NnTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSZVd3SUR3K3dZZGJSb1AwRWxIVml1eldKU013Q21LQjNZM3luZjFvZEVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldOMjNOVXQrNStrYTlNdXFQZDVNSzBFcitGUnFYb3pML0NEaSsvcW1jazd0WVhpU2lVY1pCT002Yi83RlJrNlErSUpjbWM5RHhlT0Mzb216c3l3OUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBQTm9VV1VwaWxITjlVL3EzUWhpK2ZDNVhmN0VXT0FjSWV3WVRGakxmdEtGZ3FFd0tTUVA5MDhvaUNRbk9BU1ljNGFVSE1FVjZrZVhWN0p6bWxMOENBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1MDY3MDc5MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjYxMzM3ODk3OTg0OTU6MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTA2NzA3OTI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk2NjgzNjRcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
