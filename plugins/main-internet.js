let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
let sewa = `
╔━━━❁ *Internet Menu* ❁
┃ ❁ .cuaca
┃ ❁ .fetch
┃ ❁ .get
┃ ❁ .gempa
┃ ❁ .githubsearch
┃ ❁ .gimage
┃ ❁ .google
┃ ❁ .heroml
┃ ❁ .jadwalbola
┃ ❁ .lk21search
┃ ❁ .liriklagu
┃ ❁ .playstore
┃ ❁ .soundsearch
┃ ❁ .ssweb
┃ ❁ .wattpad
┃ ❁ .monitor
┃ ❁ .jadwaltv
┃ ❁ .wikipedia <apa>
╚━━━━━━━━━━━━❁
 _2023❁2malam❁_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['internet']
handler.tags = ['main']
handler.command = /^(internet)$/i

export default handler