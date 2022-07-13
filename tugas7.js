// Buatlah sebuah variabel array dengan maksimal data 10 nilai yang berisikan tinggi badan;
// Tampilkan array tersebut dengan menggunakan perulangan biasa dan perulangan for off.
// Teman-teman analisis perbedaan hasilnya,

var array = [160,159,164,167,170,175,180,163,158,155];
console.log("for-off");
for (var x of array) {
    console.log(x);
}

console.log("for-biasa");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}