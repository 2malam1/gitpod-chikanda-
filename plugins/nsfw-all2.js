let handler = async (m, { conn, command }) => {
let url = `https://api.lolhumaxn.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
    conn.sendFile(m.chat, url, null, `*Stay halal*`, m)
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(hollolewd|sideoppai|animefeets|animebooty|animethighss|animearmpits|lewdanimegirls|biganimetiddies)$/i
handler.premium = true
//buatan Vynaa, jgn hapus atuh 😊
export default handler