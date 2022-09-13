// Game Tebak Angka

let juri = 0
let playerSatu = ''
let playerDua = ''
let skorPlayerSatu = 0
let skorPlayerDua = 0


// Pesan Pembuka
const pesanPembuka = 
	"Selamat datang di game tebak angka!\n" +
	"Kamu akan diminta untuk menebak angka 1 - 3.\n" +
	"Game ini berlangsung sebanyak 5 ronde.\n" +
	"Player yang berhasil menebak paling banyak akan menang.\n" +
	"SELAMAT BERMAIN!" 
alert(pesanPembuka)



// Ronde 1 s/d 5
for(let i = 1; i <= 5; i++) {

	// Juri, Player 1, Player 2
	juri = Math.trunc(Math.random() * 3 + 1)
	playerSatu = prompt(`Ronde ${i} \n\nPlayer 1: Berapa tebakanmu?`)
	playerDua = prompt(`Ronde ${i} \n\nPlayer 2: Berapa tebakanmu?`)

	// Angka tidak boleh sama, < 1, > 3
	while (playerSatu < 1 || playerSatu > 3 || playerDua < 1 || playerDua > 3 || playerSatu == playerDua) {
		alert(
			"Angka yang Anda masukkan :\n" +
			"1. Kurang dari 1\n" +
			"2. Lebih dari 3\n" +
			"3. Sama\n"
		)
		playerSatu = prompt(`Ronde ${i} \n\nPlayer 1: Berapa tebakanmu?`)
		playerDua = prompt(`Ronde ${i} \n\nPlayer 2: Berapa tebakanmu?`)
	}

	// Tebakan Benar dan Salah
	if (playerSatu != juri && playerDua != juri) {
		alert('Tidak ada yang benar.')
	} else if (playerSatu == juri && playerDua != juri) {
		alert('Player 1 benar!')
		skorPlayerSatu += 1
	} else if (playerDua == juri && playerSatu != juri) {
		alert('Player 2 benar!')
		skorPlayerDua += 1
	}

	// Print hasil sementara
	hasil = 
		`Angka yang keluar -> ${juri}\n` +
		`Tebakan Player 1 -> ${playerSatu}\n` +
		`Tebakan Player 2 -> ${playerDua}\n` +
		`-------------------------------\n` +
		`\n` +
		`\n` +
		`Skor Player 1 -> ${skorPlayerSatu}\n` +
		`Skor Player 2 -> ${skorPlayerDua}`

	alert(hasil)
}


// Cek hasil sementara di console
console.log('Skor Player 1: ' + skorPlayerSatu)
console.log('Skor Player 2: ' + skorPlayerDua)

console.log('Juri: ' + juri)
console.log('Player 1: ' + playerSatu)
console.log('Player 2: ' + playerDua)

// Print hasil akhir
	// Seri
	if (skorPlayerSatu == skorPlayerDua) {
		alert(
			`Skor Player 1 -> ${skorPlayerSatu}\n` +
			`Skor Player 2 -> ${skorPlayerDua}\n` +
			`-------------------------------\n` +
			`\n` +
			`Hasil -> SERI`
		)
	}
	// Player 1 Menang
	if (skorPlayerSatu > skorPlayerDua) {
		alert(
			`Skor Player 1 -> ${skorPlayerSatu}\n` +
			`Skor Player 2 -> ${skorPlayerDua}\n` +
			`-------------------------------\n` +
			`\n` +
			`Hasil -> Player 1 MENANG`
		)
	}
	// Player 2 Menang
	if (skorPlayerSatu < skorPlayerDua) {
		alert(
			`Skor Player 1 -> ${skorPlayerSatu}\n` +
			`Skor Player 2 -> ${skorPlayerDua}\n` +
			`-------------------------------\n` +
			`\n` +
			`Hasil -> Player 2 MENANG`
		)
	}