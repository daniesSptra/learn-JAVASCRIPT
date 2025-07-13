console.log(kalkulator(2,1,"x"));

function kalkulator(num1, num2, operator){
    let hasil = 0
    switch (operator) {
        case "+":
            hasil = num1 + num2;
            return hasil
            break;
        case "-":
            hasil = num1 - num2;
            return hasil
            break;
        default:
            return "Operator tidak dikenali"
            break;
    }
}