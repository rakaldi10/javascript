// Buatlah sebuah function yang mempunyai nilai balik atau return dan sebuah parameter / argument
function perubahan(x){
    x++;
    return(x);
}
// Setelah itu teman teman kirimlah sebuah nilai kedalam function tersebut
var awal = 1;
var akhir = perubahan(awal);
// Didalam function tersebut teman teman ubah nilai dari variabel yang dikirim lalu kembalikan dengan return
// Setelah nilai dikembalikan , tampilkan kedua nilai tersebut sebelum dirubah didalam function dan sesudah
console.log(awal);
console.log(akhir);