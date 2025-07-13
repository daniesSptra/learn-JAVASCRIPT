const setNih = new Set([1,2,3]);
setNih.add(10);
setNih.add(20);

console.log(setNih);

for(const angka of setNih){
    console.log(angka);
}

setNih.delete(3);
console.log(setNih);