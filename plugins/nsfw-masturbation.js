//buatan Vynaa-md, jgn hapus atuh 😊
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`Stay halal`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
conn.sendFile(m.chat, pickRandom(masturbation), null, `Nih *${name}*`, m)
 // conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(masturbation), [['Next', `/masturbation`]],m)
}
handler.help = ['masturbation']
handler.tags = ['anime', 'nsfw']
handler.command = /^(masturbation)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const masturbation = [
]