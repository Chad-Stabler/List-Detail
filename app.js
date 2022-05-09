// import functions and grab DOM elements
import { renderCar } from './render-data-utils.js';
import { cars } from './data.js';
const carEl = document.getElementById('cars');

function displayCars() {
    for (let car of cars) {
        const newEl = document.createElement('a');
        newEl.textContent = renderCar(car);
        carEl.append(newEl);
    }
}
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
