//Sc by Raiden base Raiden MD
//Di Tulis Ulang NoviChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285156402391', 'Denny', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285156402391' //Ganti
global.packname = '© Sticker by'
global.author = '2malam'
global.namebot = '2malam-Bot'
global.wm = '© Denny'
global.stickpack = '© Sticker'
global.stickauth = 'Denny'
// Link Sosmed
global.sig = 'https://instagram.com'
global.sgh = 'https://github.com'
global.sgc = 'https://chat.whatsapp.com/Dr'
// Donasi
global.psaweria = ''
global.ptrakterr = ''
global.povo = ''
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'waJZLkIvto'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "waJZLkIvto",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})