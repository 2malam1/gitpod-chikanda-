let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/d7ff723fb7910a967f788.jpg'
let sewa = `👋🏻Halo.... Ini Bot Serbaguna By 2malam, Gunakan dengan bijak.\n\n*❁ mainmenu*\n*❁ aimenu*\n*❁ groupmenu*\n*❁ gamemenu*\n*❁ stikermenu*\n*❁ makermenu*\n*❁ internet*\n*❁ downloadmenu*\n*❁ toolsmenu*\n*❁ islamic*\n*❁ ownermenu*\n\n_2023❁2malam-Bot❁_
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i

export default handler
