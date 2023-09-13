let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`Stay halal`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
//  conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(gangbang), [['Next', `/gangbang`]],m)
conn.sendFile(m.chat, pickRandom(gangbang), null, `Nih *${name}*`, m)
}
handler.help = ['gangbang']
handler.tags = ['anime', 'nsfw']
handler.command = /^(gangbang)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const gangbang = []