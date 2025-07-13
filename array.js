const angka = [1,2,3,4,5,6,7];
console.log(angka);
console.log(angka[0]);
angka[0]=30;
console.log(angka[0]);

angka.push(33);
console.log(angka);

angka.splice(3,1);
console.log(angka);

const huruf = new Array(1,2,3);
console.log(huruf);

const kata = Array.from('Persib');
console.log(kata);

const siswa = new Array('ujang', 'asep', 'dika');
const kelasC = Array.from(siswa);
console.log(kelasC);

console.log(siswa.sort());
console.log(angka.reverse());