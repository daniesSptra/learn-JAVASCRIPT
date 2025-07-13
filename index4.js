// function expression

const suhuFahrenheit = function (temperatur){
    const rumus = 9/5 * temperatur + 32;
    return `dalam fahrenheit ${temperatur} derajat sama dengan ${rumus} fahrenheit`;
}

const tampilSuhu = suhuFahrenheit(20);
console.log(tampilSuhu);


//arrow functions
const suhuFahrenheit2 = (temperatur2) =>
(9/5) * temperatur2 + 32;

const tampilSuhu2 = suhuFahrenheit2(20);
console.log(tampilSuhu2);


// first class citizen

function tambah (a, b){
    return a + b;
}

function kali(c, d){
    return c * d;
}

function hitung(operasi, angka1, angka2){
    return operasi(angka1, angka2);
}

const hasil = hitung(tambah, 5, 4);
const hasil2 = hitung(kali, 7,7);

console.log(hasil2);
console.log(hasil);
