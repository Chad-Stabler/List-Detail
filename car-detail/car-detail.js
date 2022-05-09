import { findById } from '../render-data-utils.js';
import { superCars } from '../data.js';
const imageEl = document.getElementById('image');
const nameEl = document.getElementById('carName');
const speedEl = document.getElementById('speed');
const manu = document.getElementById('manufacturer');


const params = new URLSearchParams(window.location.search);
const newCar = findById(params.get('id'), superCars);

imageEl.src = `.${newCar.image}`;

nameEl.textContent = newCar.name;
speedEl.textContent = newCar.topSpeed;
manu.textContent = newCar.manufacturer;


