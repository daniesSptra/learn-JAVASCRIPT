const user = {
    nama: 'Aku siapa',
    namaTerakhir: 'Tebak aku',
    umur: 19,
    SayHello: function(){
        return "hallo perkenalkan " + this.nama + this.namaTerakhir + " umurku " + this.umur;
    }
};

console.log(user.SayHello());

user.nama = 'Asep Balom';
const {nama, namaTerakhir, umur} = user;

console.log(nama, namaTerakhir, umur);
console.log(user);

delete user.namaTerakhir; // delete properti
console.log(user);