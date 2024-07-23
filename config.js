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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348139039838";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_47_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUwLFxuICAgICAgICA1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg5LFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICA4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDY3LFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI0LFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDgxLFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxLFxuICAgICAgICA4NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzLFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVUVpNUFVZ3N1Rk5samNDWFpaVGFUQW9veUhvWUJJcDFZVGV3Ykt5Ty9XZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM5MDM5ODM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCN0U2RjYxMzU4RUU2QjIxQTBDMTY2OEEwNjVENEI1MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MzUyMjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibFQ0TkpOWmpTZEtWNGxrZVFGc2RVd1wiLFxuICBcInBob25lSWRcIjogXCI2OWZiYjJkNy03YTEwLTRkYjMtOTgyZi1lNDkwNzk0MWNiZjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxOTgsXG4gICAgICAyMDIsXG4gICAgICA3MCxcbiAgICAgIDE1NixcbiAgICAgIDEzMyxcbiAgICAgIDE0MSxcbiAgICAgIDExLFxuICAgICAgMTY3LFxuICAgICAgODYsXG4gICAgICAxNzEsXG4gICAgICAxMzUsXG4gICAgICAyMTEsXG4gICAgICA5LFxuICAgICAgOSxcbiAgICAgIDg4LFxuICAgICAgMjM2LFxuICAgICAgMTgwLFxuICAgICAgMjM5LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDI0MyxcbiAgICAgIDMwLFxuICAgICAgMTk4LFxuICAgICAgMTIzLFxuICAgICAgMTEzLFxuICAgICAgMjM1LFxuICAgICAgMjAwLFxuICAgICAgODgsXG4gICAgICAxNzUsXG4gICAgICAyMTAsXG4gICAgICAxNDMsXG4gICAgICAyNDQsXG4gICAgICAxODIsXG4gICAgICAxNzgsXG4gICAgICAyNDksXG4gICAgICAxMzAsXG4gICAgICAyMDMsXG4gICAgICAxMTQsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4Q0VGWlBHVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzOTAzOTgzODozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI3NDcwMjA4OTYyNjg5OjMzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNoaW5pZ2FtaSDwn5Cm4oCN4qybXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUC84aXNvRUVMQ3cvclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxQWlzalhUOGVqdWRIdDhqZ3FzNmE0MG5FQnZWUXhKSWJydXlFZGVoRlVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlAvTGhST3dNVUNNaUlMWlFodVJoWG42SEFOL2tHQXZrMkNxMTNjTThqdFl6YXdEcll1OCtZRHdCQUpLZWtNNEZjdG10NXRHaEFBbXZVSUhNYUh5UkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlAvOURwSEJYZTZkYTVsRm5Za3lqVTVCeWh1aGkxN3lsZmwvQlJtR1crM1FEblhBR1JrZzFGRFRydnZOVlJBUHdkZHhZMGkyeTk3cFBsbkdBL0Y4aUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzkwMzk4Mzg6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MzUyMTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOQ3ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5Ddi5qc29uIjogIntcImtleURhdGFcIjpcInV3YnB0bWcvQ0ZkRURIYUcyZ01oa2s4cEw1WGVmTkxGRlRDVzJiVXpTQzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyOTExMDkxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNzM1MjIxODY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Shinigami 🐦‍⬛",


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
