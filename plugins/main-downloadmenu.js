let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
let sewa = `
╔━━━❁ *Tools Menu* ❁
┃ ❁ .monitor
┃ ❁ .smeme
┃ ❁ .modapk
┃ ❁ .addvn
┃ ❁ .addmsg
┃ ❁ .addvideo
┃ ❁ .addaudio
┃ ❁ .addimg
┃ ❁ .addstiker
┃ ❁ .addgif
┃ ❁ .delmsg
┃ ❁ .all
┃ ❁ .listdoc
┃ ❁ .listvn
┃ ❁ .listmsg
┃ ❁ .listvideo
┃ ❁ .listgif
┃ ❁ .listaudio
┃ ❁ .listimg
┃ ❁ .liststicker
┃ ❁ .qr
┃ ❁ .qrcode
┃ ❁ .react
┃ ❁ .readmore
┃ ❁ .spoiler
┃ ❁ .readviewonce
┃ ❁ .spamwa <number>|<mesage>|<no of messages>
┃ ❁ .wastalk
┃ ❁ .style
┃ ❁ .tomp3
┃ ❁ .tovn
┃ ❁ .upload
┃ ❁ .translate
┃ ❁ .tts
┃ ❁ .run
┃ ❁ .zodiac *2001 11 15*
╚━━━━━━━━━━━━❁
 _2023❁2malam
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['toolsmenu']
handler.tags = ['main']
handler.command = /^(toolsmenu)$/i

export default handler