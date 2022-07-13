// Teman teman buatlah sebuah variabel array 
// dengan 2 buah nama buah buahan pisang , jeruk
// Setelah itu teman teman tampilkan nilai awal array tersebut, 
// lakukan perintah unshift dan tambahkan data  apel dan mangga seperti :

var buah = ['pisang','jeruk'];
console.log(buah);
// function panggilSplice() {
//     // var hasil = buah.splice(2,2,'sirsak');
//     var hasil2 = buah.splice(2,2);
//     return(buah);
// }
function panggilUnshift() {
    var hasil2 = buah.unshift('apel','mangga');
    return(buah);
}
// panggilSplice();
panggilUnshift();
console.log(buah);