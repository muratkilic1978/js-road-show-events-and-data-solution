// VEJLEDENDE LØSNING - js-road-show-events-and-data-starter

"use strict";

/* ---------------------------------------------------------
   1. DATA
--------------------------------------------------------- */

// Et array af objekter - ét objekt pr. bil.
// "id" passer med id'et på bilens <img> i HTML'en.
const cars = [
    {
        id: "redCar",
        brand: "Ford",
        model: "Mustang",
        year: 1974,
        color: "Rød",
        fuel: "Benzin",
        sound: "sound/red-car-horn.wav"
    },
    {
        id: "policeCar",
        brand: "Volvo",
        model: "242",
        year: 1982,
        color: "Politibil",
        fuel: "Diesel",
        sound: "sound/police-car-sound.wav"
    },
    {
        id: "blueCar",
        brand: "Volkswagen",
        model: "Passat",
        year: 1979,
        color: "Lyseblå",
        fuel: "Diesel",
        sound: "sound/blue-car-sound.wav"
    }
];

// Test af arrayet i konsollen
console.log(cars);
console.log(cars[0].brand);

// LØSNING: forEach skriver hver bils brand ud i konsollen
cars.forEach(function(car) {
    console.log(car.brand);
});

// Ekstra: brand, model og årgang på samme linje
cars.forEach(function(car) {
    console.log(`${car.brand} ${car.model} (${car.year})`);
});

/* ---------------------------------------------------------
   2. HENT ELEMENTER FRA HTML
--------------------------------------------------------- */

const getTooltip = document.getElementById("tooltip");

// LØSNING: hent solen og scenen via deres id
const getSun = document.getElementById("sun");
const getScene = document.getElementById("scene");

/* ---------------------------------------------------------
   3. DAG OG NAT
--------------------------------------------------------- */

// LØSNING: klik på solen skifter mellem dag og nat
getSun.addEventListener("click", function() {
    getScene.classList.toggle("night");
});

/* ---------------------------------------------------------
   4. FUNKTIONER
--------------------------------------------------------- */

// Husker tooltip'ens timer
let tooltipTimer;

function showTooltip(car) {

    // LØSNING: farve og brændstof er tilføjet
    getTooltip.innerHTML = `
        <strong>${car.brand} ${car.model}</strong><br>
        Årgang: ${car.year}<br>
        Farve: ${car.color}<br>
        Brændstof: ${car.fuel}
    `;

    getTooltip.classList.add("is-visible");

    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(hideTooltip, 4000);
}

// LØSNING: skjuler tooltip'en igen
function hideTooltip() {
    getTooltip.classList.remove("is-visible");
}

// LØSNING: afspiller bilens egen lyd
function playSound(car) {
    const audio = new Audio(car.sound);
    audio.play();
}

/* ---------------------------------------------------------
   5. LØKKEN - kobler data og billeder sammen
--------------------------------------------------------- */

cars.forEach(function(car) {

    const getCarElem = document.getElementById(car.id);

    // Vis bilens informationer, når musen kommer ind over bilen
    getCarElem.addEventListener("mouseenter", function() {
        showTooltip(car);
    });

    // LØSNING: afspil bilens lyd ved klik
    getCarElem.addEventListener("click", function() {
        playSound(car);
    });

});

// Ekstra: For at tilføje en fjerde bil skal man kun tilføje et <img> i HTML'en
// og et nyt objekt i cars-arrayet. Selve JavaScript-logikken skal ikke ændres,
// fordi forEach automatisk kobler events på alle biler i arrayet.
// (I CSS'en skal der dog laves en klasse og @keyframes til den nye bil.)
