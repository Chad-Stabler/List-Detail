// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { superCars } from '../data.js';
import { renderCar } from '../render-data-utils.js';

const test = QUnit.test;

test('testing renderCar function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a class="car" href="./car-detail/index.html?id=1"><div><img src="./assets/jesko.jpg"><p>Koenigsegg Jesko Absolut</p></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCar(superCars[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'woohoo');
});
