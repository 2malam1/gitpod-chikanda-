let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
let sewa = `
╔━━━❁ *Sticker Menu* ❁
┃ ❁ .attp <teks>
┃ ❁ .bonk
┃ ❁ .getexif
┃ ❁ .qc
┃ ❁ .sticker
┃ ❁ .s
┃ ❁ .toimg
┃ ❁ .tovideo
┃ ❁ .ttp2
┃ ❁ .ttp
┃ ❁ .wm
╚━━━━━━━━━━━━❁
 _2023 ❁2malam
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['stikermenu']
handler.tags = ['main']
handler.command = /^(stikermenu)$/i

export default handler