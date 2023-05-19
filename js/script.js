"use strict";

//dichiaro le variabili
let km;
let age;
let genera = document.getElementById('submit');
let annulla = document.getElementById('delete');
const tariffaKm = 0.21;
let costoBiglietto;
let offerta;
let passeggero;
let carrozza;
let cp;

//bottone che genera il costo del biglietto
genera.addEventListener('click', function() {
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
        alert('I dati devono essere inseriti come numeri');
    } else {
        //calcolo il costo del biglietto
        if (age < 18) {
            //applico uno sconto del 20%
            costoBiglietto = (km * tariffaKm) * 0.8;
            document.getElementById('offerta').innerHTML = `Sconto 20%`
        }
        else if (age > 65) {
            //applico uno sconto del 40%
            costoBiglietto = (km * tariffaKm) * 0.6;
            document.getElementById('offerta').innerHTML = `Sconto 40%`
        } else {
            //applico la tariffa regolare
            costoBiglietto = (km * tariffaKm);
            document.getElementById('offerta').innerHTML = `Biglietto Standard`
        }
        //scrivo il costo della tratta sul bliglietto
        costoBiglietto = costoBiglietto.toFixed(2)
        document.getElementById('costoBiglietto').innerHTML = `${costoBiglietto}€`;
        //scrivo il nome del passeggero sul biglietto
        passeggero = document.getElementById('fullName').value;
        document.getElementById('passeggero').innerHTML = `${passeggero}`;
        //scrivo il numero della carrozza sul biglietto
        carrozza = (Math.random() * 10 + 1).toFixed(0);
        document.getElementById('carrozza').innerHTML = `${carrozza}`;
        //scrivo il codice CP sul biglietto
        cp = (Math.random() * 10000 + 1).toFixed(0);
        document.getElementById('cp').innerHTML = `${cp}`;
    }

})

//bottono che ripulisce le caselle di testo dai dati inseriti
annulla.addEventListener('click', function() {
    document.getElementById('fullName').value = ``;
    document.getElementById('km').value = ``;
    document.getElementById('age').value = ``;
    document.getElementById('costoBiglietto').innerHTML = ``;
    document.getElementById('passeggero').innerHTML = ``;
    document.getElementById('offerta').innerHTML = ``;
    document.getElementById('carrozza').innerHTML = ``;
    document.getElementById('cp').innerHTML = ``;
})