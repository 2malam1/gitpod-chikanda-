let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
let sewa = `
╔━━━❁ *AI Menu* ❁
┃ ❁ .beauty
┃ ❁ .tocartoon
┃ ❁ .dalle
┃ ❁ .gpt
┃ ❁ .hairstyle
┃ ❁ .openai
┃ ❁ .ocr
┃ ❁ .pixardif
┃ ❁ .remini
┃ ❁ .color
┃ ❁ .hdr
┃ ❁ .toanime
┃ ❁ .txt2img
┃ ❁ .blur
╚━━━━━━━━━━━━❁
 _2023❁2malam
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['aimenu']
handler.tags = ['main']
handler.command = /^(aimenu)$/i

export default handler