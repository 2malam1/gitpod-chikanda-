let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`Stay halal`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
conn.sendFile(m.chat, pickRandom(animeblowjob), null, `Nih *${name}*`, m)
/*
  conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(animeblowjob), [['Next', `/animeblowjob`]],m)*/
}
handler.help = ['animeblowjob']
handler.tags = ['premium', 'nsfw']
handler.command = /^(animeblowjob)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const animeblowjob = [
]