//buatan vyna-md, jgn hapus atuh 😊
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`stay halal`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  //conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(ometv), [['Next', `/ometv`]],m)
  conn.sendFile(m.chat, pickRandom(ometv), null, `Nih *${name}*`, m)
}
handler.help = ['ometv']
handler.tags = ['nsfw']
handler.command = /^(ometv)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const ometv = [
]