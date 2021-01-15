let text = ``
let val = ''

function updateNama(e) {
    val = e
}

function updateTamplate(e) {
    console.log(e);
    switch (e) {
        case '1':
            text = `${val} ${val} ${val} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${val} wangi aku mau nyiumin aroma wanginya ${val} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${val} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${val} AAAAA LUCCUUUUUUUUUUUUUUU............${val} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${val} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${val} gw ...${val} di laptop ngeliatin gw, ${val} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${val} aku gak mau merelakan ${val} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${val} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
            break;
        case '2':
            text = `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${val}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${val}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${val} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${val}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`
            break;
        default:
            break;
    }
    var copyText = document.getElementById("myInput");
    copyText.value = text
}

function copyText() {
    copyToClipboard()
  }

function copyToClipboard() {
    var copyText = document.getElementById("myInput");
    var nama = document.getElementById("nama_waifu").value;
    var tamplate = document.getElementById("tamplate").value;
    console.log(nama, tamplate);
    if(nama && tamplate){
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    } else {
        alert("Isi nama waifu & tamplate lo ngab!");
    }
  }
  



