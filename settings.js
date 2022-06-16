/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasPrdn',
}

//—————「 Setting Owner 」—————//
global.owner = ['94775792013','94775792013','94775792013'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['94775792013'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '94775792013' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Zero' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'Zero-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'Zero' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://chat.whatsapp.com/Hp1Zv61E96326QO0cPTr6n'
global.ig = 'https://instagram.com/vimukthi.Oshada'
global.mygc = 'https://chat.whatsapp.com/Hp1Zv61E96326QO0cPTr6n'
global.myweb = 'https://chat.whatsapp.com/Hp1Zv61E96326QO0cPTr6n'
global.email = 'vimukthioshada8@gmail.com'
global.region = 'Sri Lanka'

//—————「 Set Wm 」—————//
global.packname = '© Zero-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'Zero' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
global.veloriy = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_Done._',
admin: '_𝐆𝐫𝐨𝐮𝐩 𝐀𝐝𝐦𝐢𝐧 𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬🌈™!_',
botAdmin: '_▂▃▅▇█▓▒░𝙱𝚘𝚝 𝙼𝚞𝚜𝚝 𝙱𝚎 𝙰𝚍𝚖𝚒𝚗 𝙵𝚒𝚛𝚜𝚝░▒▓█▇▅▃▂!_',
owner: '_꧁༺Owner Bot s Special Features ༻꧂_',
group: '_▂▃▅▇█▓▒░𝙵𝚎𝚊𝚝𝚞𝚛𝚎𝚜 𝚄𝚜𝚎𝚍 𝙾𝚗𝚕𝚢 𝙵𝚘𝚛 𝙶𝚛𝚘𝚞𝚙𝚜░▒▓█▇▅▃▂!_',
private: '_一═デ︻ ƒєαтυяєѕ υѕє∂ σηℓу ƒσя ρяιναтє ¢нαт ︻デ═一!_',
bot: '_▂▃▅▇█▓▒░𝙱𝚘𝚝 𝙽𝚞𝚖𝚋𝚎𝚛 𝚄𝚜𝚎𝚛 𝚂𝚙𝚎𝚌𝚒𝚊𝚕 𝙵𝚎𝚊𝚝𝚞𝚛𝚎𝚜░▒▓█▇▅▃▂_',
wait: '_𝐁𝐞𝐢𝐧𝐠 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝🌈™..._',
error: '_𝐄𝐫𝐫𝐨𝐫 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐞 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬🌈™!_',
endLimit: '_𝐘𝐨𝐮𝐫 𝐃𝐚𝐢𝐥𝐲 𝐋𝐢𝐦𝐢𝐭 𝐇𝐚𝐬 𝐄𝐱𝐩𝐢𝐫𝐞𝐝, 𝐓𝐡𝐞 𝐋𝐢𝐦𝐢𝐭 𝐖𝐢𝐥𝐥 𝐁𝐞 𝐑𝐞𝐬𝐞𝐭 𝐄𝐯𝐞𝐫𝐲 𝟏𝟐 𝐇𝐨𝐮𝐫𝐬🌈™_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})