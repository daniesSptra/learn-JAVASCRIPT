const gajian = true;
console.log('Berjalan-jalan di mal');
if(gajian){
    console.log('Makan di restoran mal');
}
console.log('pulang ke rumah');

//2
const nilai = 85;
if(nilai > 90){
    console.log('Nilai A');
} else if(nilai > 80){
    console.log('Nilai B');
} else if(nilai >70){
    console.log('Nilai C');
} else {
    console.log('Maaf anda belum lulus');
}

//3
const price = 10000;
const isMember = true;
const diskon = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan diskon sebesar ${diskon * price}`);