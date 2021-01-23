
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp) => { 
	return `                 

「 *AINE BOT* 」
◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: PUTRAELF
  ❏ nama: ${pushname}
  ❏ nomer: wa.me/${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ level: ${getLevelingLevel(sender)}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}lpr
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}gcmybot
◪ *MAKER*
  │
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}bplogo
  ├─ ❏ ${prefix}swlogo
  ├─ ❏ ${prefix}text3d
  ├─ ❏ ${prefix}thunder
  ├─ ❏ ${prefix}glitch
  ├─ ❏ ${prefix}cloudsky
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}blood
  ├─ ❏ ${prefix}realcloud
  ├─ ❏ ${prefix}metaldark
  ├─ ❏ ${prefix}dropwater
  ├─ ❏ ${prefix}phlogo
  ├─ ❏ ${prefix}grenneon
  ├─ ❏ ${prefix}neontext
  ├─ ❏ ${prefix}toxic
  ├─ ❏ ${prefix}sumery
  ├─ ❏ ${prefix}firework
  ├─ ❏ ${prefix}lava
  ├─ ❏ ${prefix}vinta
  └─ ❏ ${prefix}summer
◪ *MEDIA*
  │
  ├─ ❏ ${prefix}beritahoax
  ├─ ❏ ${prefix}jadwaltvnow
  └─ ❏ ${prefix}trendtwit
◪ *OTHER FITUR*
  │
  ├─ ❏ ${prefix}ssweb
  ├─ ❏ ${prefix}hilih 
  ├─ ❏ ${prefix}alay
  ├─ ❏ ${prefix}wiki
  ├─ ❏ ${prefix}kbbi
  ├─ ❏ ${prefix}map
  ├─ ❏ ${prefix}fml
  ├─ ❏ ${prefix}lirik
  ├─ ❏ ${prefix}chord
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}pantun
  ├─ ❏ ${prefix}faktaunik
  ├─ ❏ ${prefix}tafsirmimpi
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}infonomor
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}animequotes
  └─ ❏ ${prefix}artinama
◪ *KERANG AJAIB*
  │
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}cantikcek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  ├─ ❏ ${prefix}rate
  └─ ❏ ${prefix}bisakah
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}pinterest
  ├─ ❏ ${prefix}ytmp3
  ├─ ❏ ${prefix}ytmp4
  ├─ ❏ ${prefix}fototiktok
  └─ ❏ ${prefix}joox
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme
  └─ ❏ ${prefix}memeindo
◪ *RANDOM PICTUE*
  │ *ANIME*
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}neko
  ├─ ❏ ${prefix}waifu
  ├─ ❏ ${prefix}animecry
  ├─ ❏ ${prefix}animehug
  ├─ ❏ ${prefix}osakana
  ├─ ❏ ${prefix}naruto
  ├─ ❏ ${prefix}anime
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}animegirl
  ├─ ❏ ${prefix}animeboy
  ├─ ❏ ${prefix}nekonime
  │
  │ *RANDOM KPOP
  ├─ ❏ ${prefix}randomkpop
  │
  │ *CARTOON*
  ├─ ❏ ${prefix}doraemon
  ├─ ❏ ${prefix}pokemon
  │
  │ *ANIMAL*
  ├─ ❏ ${prefix}anjing
  ├─ ❏ ${prefix}kucing
  ├─ ❏ ${prefix}hamster
  ├─ ❏ ${prefix}kelinci
  │
  │ *TRANSPORT*
  ├─ ❏ ${prefix}mobil
  ├─ ❏ ${prefix}motor
  ├─ ❏ ${prefix}sepeda
  │
  │ *AESTHETIC*
  ├─ ❏ ${prefix}blusky
  ├─ ❏ ${prefix}flower
  ├─ ❏ ${prefix}icecream
  ├─ ❏ ${prefix}pemandangan
  │
  │ *QUOTES*
  ├─ ❏ ${prefix}quotesid
  ├─ ❏ ${prefix}quotesen
  ├─ ❏ ${prefix}katakata
  ├─ ❏ ${prefix}motivasi
  ├─ ❏ ${prefix}kehidupan
  └─ ❏ ${prefix}islami
◪ *GROUP*
  │
  ├─ ❏ ${prefix}grup [buka/tutup)
  ├─ ❏ ${prefix}promote
  ├─ ❏ ${prefix}demote
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}add
  ├─ ❏ ${prefix}kick
  ├─ ❏ ${prefix}setname
  ├─ ❏ ${prefix}setdesc
  ├─ ❏ ${prefix}setpp
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}welcome [1/0]
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}delete
  └─ ❏ ${prefix}simih [1/0]
◪ *SOUND*
  │
  ├─ ❏ ${prefix}play
  └─ ❏ ${prefix}tts
◪ *ISLAM*
  │
  └─ ❏ ${prefix}quran
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk
◪ *WIBU*
  │
  ├─ ❏ ${prefix}neonime
  ├─ ❏ ${prefix}wait
◪ *18+ Nsfw*
  |
  ├─ ❏ ${prefix}randomhentai
  └─ ❏ ${prefix}nsfwneko
◪ *FUN*
  │
  ├─ ❏ ${prefix}trust
  ├─ ❏ ${prefix}dare
  └─ ❏ ${prefix}simi
◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  └─ ❏ ${prefix}covid
◪ *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}kickall
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
◪ *OTHER*
  │
  ├─ ❏ ${prefix}send
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  ├─ ❏ ${prefix}afk
  ├─ ❏ ${prefix}timer

 ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 ┣⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️⛓️
 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 ┃     ⛓️⛓️⛓️ *THANK YOU MY GROUP TOXIC PEOPLE* ⛓️⛓️⛓️
 ┃https://chat.whatsapp.com/FaxM6du5qn1CSBg3fmxJ7j
 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 ┃       ⛓️⛓️⛓️*POWERED BY PUTRAELF*⛓️⛓️⛓️
 ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


`
}
exports.help = help



  
