const uang = 2000;
const bayar = 700;

// if(bayar < uang){
//     throw new Error('Pembayaran Kurang');
// }

// try catch
// try {
//   let a = 5;
//   let b = a + 2;
//   console.log(b);       // ini oke
//   console.log(x);       // ini error, karena 'x' belum ada
// } catch (salah) {
//   console.log("Ada masalah nih:", salah.message);
// }

// console.log("Kode tetap jalan terus...");

// contoh latihan1

// let data = [10,20,30,"empat puluh", 50, "enam"]
// for (let index = 0; index < data.length; index++) {
//     try {
//         let tipeData = typeof(data[index]);
//         if (tipeData !== "number" || isNaN(data[index])) {
//             throw new Error("Ini bukan angka")
//         }
//         console.log(`Data ke ${index} = ${data[index]} adalah ${tipeData}`);
//     } catch (err) {
//         console.log(`Data ke ${index} = ${data[index]} error ${err.message}`);
//     }
// }

// console.log("UDAHHHH");

//contoh latihan2
function cekNilai(daftarNilai){
    for (let i = 0; i < daftarNilai.length; i++) {
        if (typeof daftarNilai[i] !== 'number') {
            throw new Error("Invalid input. Please provide an array of numbers");
        }

        const nilai = daftarNilai[i];
        let huruf;
        if (nilai >= 90) {
            huruf ='A';
        } else if(nilai >= 80){
            huruf = 'B';
        } else if(nilai >= 70){
            huruf = 'C';
        } else if(nilai >= 60){
            huruf = 'D';
        } else{
            huruf = 'E';
        }

        console.log(`Nilai anda adalah ${nilai} = ${huruf}`);
        
    }
}

try {
    const siswa = [78, 88, 90, 98, 75]
    cekNilai(siswa);
} catch (errorr) {
    console.error(errorr)
}
