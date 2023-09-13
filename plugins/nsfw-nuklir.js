let handler = async (m, { conn }) => {
let konuk = '
`
conn.reply(m.chat, konuk, m)
}
handler.command = /^(nuklir)$/i
handler.tags = ['nsfw']
handler.limit = true

export default handler