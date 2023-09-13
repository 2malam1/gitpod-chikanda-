let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
let sewa = `
╔━━━❁ *Islamic Menu* ❁
┃ ❁ .asmaulhusna
┃ ❁ .ayatkursi
┃ ❁ .salat <daerah>
┃ ❁ .niatsholat
╚━━━━━━━━━━━━❁
 _2023❁2malam❁_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['islamic']
handler.tags = ['main']
handler.command = /^(islamic)$/i

export default handler