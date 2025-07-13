// tipe data

const tahunIni = new Date().getFullYear();
const bulanIni = new Date().getMonth();
const text = `sekarnag adalah tahun ${tahunIni} bulan ${bulanIni}`;

const bulangStr = String(bulanIni);
const tahunFlt = parseFloat(tahunIni);


console.log(text);
console.log(typeof(bulanIni));
console.log(typeof(bulangStr));

console.log(typeof(tahunFlt));
console.log(typeof(tahunIni));