const tim = "PERSIB";
const jhtim = Array.from(tim);

for (let i = 0; i < jhtim.length; i++) {
    console.log(jhtim[i]);
}

// for of
const hewan = ['kuda', 'kambing', 'ayam'];
for(const item of hewan){
    console.log(item);
}

// break
for (let a = 0; a <= 7; a++) {
    if (a === 5) {
        break;
    }
    console.log(a);
}

// continue
for(let c = 0; c <= 7; c++){
    if (c === 5){
        continue
    }
    console.log(c);
}