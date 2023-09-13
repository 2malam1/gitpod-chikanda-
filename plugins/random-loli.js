let handler = async (m, { conn, text }) => {
    let yh = global.asupan
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendFile(m.chat, url, 'anu.mp4', '_Tcih Dasar Pedo_', m)
  }
  handler.command = /^(loli)$/i
  handler.tags = ['sfw']
  handler.help = ['loli']
  
  handler.limit = true
  
  export default handler
  
 global.asupan = [
  
]
