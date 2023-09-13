import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
        if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, 'stay halal',wm.date, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
	let url = paptt[Math.floor(Math.random() * paptt.length)]
	conn.sendFile(m.chat, url, null, 'Tch, dasar sangean', m)
}
handler.help = ['paptt']
handler.tags = ['nsfw']
handler.command = /^(paptt)$/i
handler.premium = true
export default handler

global.paptt = [
 
 ]