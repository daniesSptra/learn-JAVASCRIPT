const produkMap = new Map([
    ['sepatu',115000],
    ['baju', 90000],
    ['topi', 30000]
]);

produkMap.set('warna', 'hijau');

console.log(produkMap);
console.log(produkMap.get('baju'));

produkMap.delete('sepatu');

console.log(produkMap);