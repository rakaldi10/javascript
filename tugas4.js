// Buatlah 3 buah variabel dengan yang berisi nilai tinggi badan siswa
// Setelah itu teman teman gunakanlah fungsi dari if else untuk mengetahui siswa yang memiliki tinggi badan tertinggi
// Setelah itu teman teman tampilkan hasilnya dari urutan yang tertinggi ke yang terpendek.

var asep = tinggi(165,"asep");
var gian = tinggi(180,"gian");
var nasya = tinggi(163,"nasya");
function tinggi(x, nama) {
    if (x>=170) {
        tertinggi = nama;
    } else if((x>=165) && (x<170)){
        cukup = nama;
    } else if(x<165){
        pendek = nama;
    } 
}
console.log(tertinggi);
console.log(cukup);
console.log(pendek);