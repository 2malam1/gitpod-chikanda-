let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
let sewa = `
╔━━━❁ *Animanga Menu* ❁
╚━━━━━━━━━━━━❁

 _2023❁2malam
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['ainmanga']
handler.tags = ['main']
handler.command = /^(ainmanga)$/i

export default handler