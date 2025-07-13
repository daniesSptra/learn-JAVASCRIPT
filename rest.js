// rest operator
function fungsiSaya(...nama){
    console.log('nama:', nama);
}
fungsiSaya('Ujang','asep');

function fungsiSaya2(number, ...name){
    console.log(name.length);
    console.log('number', number);
    console.log('name', name);
}
fungsiSaya2(2, 'raka', 'adit', 'dontol')

//
const makananFavorit = ['Nasi Goreng', 'Ayam Goreng', 'Tahu', 'Tempe', 'Bakso'];
const [first, second, ...sisa] = makananFavorit;

console.log(first);
console.log(second);
console.log(sisa);