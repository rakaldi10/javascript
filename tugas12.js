// Teman teman buatlah sebuah variabel array dengan 
// 4 buah nama buah buahan pisang , jeruk , apel dan mangga
// Setelah itu teman teman tampilkan nilai awal array tersebut, 
// lakukan perintah pop dan shift sehingga hasilnya akan seperti ini :

var buah = ['pisang','jeruk','apel','mangga'];
console.log(buah);
function panggilPOP() {
    var hasil = buah.pop();
    return(buah);
}
function panggilShift() {
    var hasil = buah.shift();
    return(buah);
}
// function panggilPush() {
//     var kota2 = kota.push('merak');
//     console.log(kota);
// }
panggilPOP();
console.log(buah);
panggilShift();
console.log(buah);
// panggilPush();