let angka = [20, 45, 72, 12, 55, 10];
let nBesar = angka[0];

console.log(angka);

for(let i = 1; i < angka.length; i++){
    if(angka[i] > nBesar){
        nBesar = angka[i]
    }
}
console.log(nBesar);
