let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*⏳ Loading...*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
 // conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(hinata), [['Next', `/hinata`]],m)
 conn.sendFile(m.chat, pickRandom(hinata), null, `Nih *${name}*`, m)
}
handler.help = ['hinata']
handler.tags = ['anime', 'nsfw']
handler.command = /^(hinata)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const hinata = [
]