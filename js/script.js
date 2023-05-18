let km;
let age;
let button = document.getElementById('submit');
const tariffaKm = 0.21;
let costoBiglietto;

button.addEventListener('click', function() {
    //inserisco i dati raccolti dal form nelle variabili
    km = document.getElementById('km').value;
    age = document.getElementById('age').value;
    console.log(km);
    console.log(age);
    km = parseInt(km);
    age = parseInt(age);
    console.log(km);
    console.log(age);
    //controllo che i dati raccolti siano numeri
    if (isNaN(km) || isNaN(age)) {
        alert('I dati devono essere inseriti come numeri')
    } else {
        //calcolo il costo del biglietto
        if (age < 18) {
            //applico uno sconto del 20%
            costoBiglietto = (km * tariffaKm) * 0.8
        }
        else if (age > 65) {
            //applico uno sconto del 40%
            costoBiglietto = (km * tariffaKm) * 0.6
        } else {
            //applico la tariffa regolare
            costoBiglietto = (km * tariffaKm)
        }
    }
    console.log(costoBiglietto)
})