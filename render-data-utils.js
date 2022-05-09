export function renderCar(car) {
    const newEl = document.createElement('a');
    const carDiv = document.createElement('div');
    const imageEl = document.createElement('img');
    const textEl = document.createElement('p');
    
    newEl.classList.add('car');

    imageEl.src = car.image;

    textEl.textContent = `${car.manufacturer} ${car.name}`;

    newEl.href = `./car-detail/index.html?id=${car.id}`;

    carDiv.append(imageEl, textEl);

    newEl.append(carDiv);

    return newEl;
}

export function findById() {

}