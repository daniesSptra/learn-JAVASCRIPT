// function 

function sapaan(){
    console.log("Hallo Dunia");
}

sapaan();
sapaan();

function suhuFahrenheit(temperatur){
    const rumus = 9/5 * temperatur + 32;

    console.log(`dalam fahrenheit ${temperatur} derajat sama dengan ${rumus} fahrenheit`);
}

let temperatur = 27;

suhuFahrenheit(temperatur);