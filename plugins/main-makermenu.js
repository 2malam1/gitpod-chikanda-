let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
let sewa = `
╔━━━❁ *Maker Menu* ❁
┃ ❁ .flaming1 <text>
┃ ❁ .flaming4 <text>
┃ ❁ .agedetect
┃ ❁ .logo-coffee <text>
┃ ❁ .butterfly <text>
┃ ❁ .carved-wood <text>
┃ ❁ .iluminated <text>
┃ ❁ .flaming2 <text>
┃ ❁ .flaming3 <text>
┃ ❁ .flaming5 <text>
┃ ❁ .flaming6 <text>
┃ ❁ .carved <text>
┃ ❁ .shadowsky <text>
┃ ❁ .pictlove <text>
┃ ❁ .tahta <teks>
┃ ❁ .hornycard
┃ ❁ .hornylicense
┃ ❁ .itssostupid
┃ ❁ .kaneki
┃ ❁ .loliggo
┃ ❁ .nekosad
┃ ❁ .nekosad
┃ ❁ .simpcard
┃ ❁ .ytcomment
┃ ❁ .ytkomen
╚━━━━━━━━━━━━❁

 _2023❁2malam
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['makermenu']
handler.tags = ['main']
handler.command = /^(makermenu)$/i

export default handler