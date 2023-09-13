let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/beafced0f801babb634e0.jpg'
let sewa = `
╔━━━ ❁ *Game Menu* ❁
┃ ❁ .caklontong
┃ ❁ .family100
┃ ❁ .iqtest
┃ ❁ .math
┃ ❁ .siapakahaku
┃ ❁ .suit
┃ ❁ .susunkata
┃ ❁ .tebakbendera
┃ ❁ .tebaksurah
┃ ❁ .tekateki
┃ ❁ .tebakkata
╚━━━━━━━━━━━━❁
 _2023❁2malam❁_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['gamemenu']
handler.tags = ['main']
handler.command = /^(gamemenu)$/i

export default handler