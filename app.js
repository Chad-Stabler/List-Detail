// import functions and grab DOM elements
import { renderCar } from './render-data-utils.js';
import { superCars } from './data.js';
const carEl = document.getElementById('cars');

function displayCars() {
    for (let car of superCars) {
        const newEl = renderCar(car);
        carEl.append(newEl);
    }
}

displayCars();
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
