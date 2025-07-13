//Objek
const obejk1 = {nama: 'ujang', nis:12345678};
const objek2 = {ipa: 80, ips: 82, Bahasa:90};

const copyObjek = {...objek2};
const allObjk = {...obejk1, ...objek2};

console.log(allObjk);
console.log(copyObjek);

//Array
const array1 = ['Sukabumi', 'Cimahi', 'Cianjur'];
const array2 = ['Subang', 'Cirebon'];

const copyArray = [...array2];
const allArray = [...array1, ...array2];

console.log(allArray);
console.log(copyArray);

