// Importing function from shapes.js
const generateSvg = require("./shapes")

// Object that will act as user input if
// the user chose circle during the prompt questions
const circleObject = {
  text: 'tst',
  textColor: 'blue',
  shape: 'circle',
  shapeColor: 'green'
}

// Object that will act as user input if
// the user chose triangle during the prompt questions
const triangleObject = {
  text: 'tst',
  textColor: 'blue',
  shape: 'triangle',
  shapeColor: 'green'
}

// Object that will act as user input if
// the user chose square during the prompt questions
const squareObject = {
  text: 'tst',
  textColor: 'blue',
  shape: 'square',
  shapeColor: 'green'
}

// The following tests check to make sure that when the user selects which 
// shape they want their SVG logo to be, it returns the proper SVG template

// Circle test:
describe('generate svg: CIRCLE', () => {
  it('should return CIRCLE svg template', () => {
    expect(generateSvg(circleObject)).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="100" cy="100" r="100" fill="green" />

    <text x="100" y="120" font-size="75" text-anchor="middle" fill="blue">tst</text>

    </svg>`)
  });

});

// Triangle test:
describe('generate svg: TRIANGLE', () => {
  it('should return TRIANGLE svg template', () => {
    expect(generateSvg(triangleObject)).toEqual(
      `<svg version="1.1" viewBox="25 10 100 100" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="50, 10, 100, 100 0, 100" fill="green"/>

    <text x="50" y="80" font-size="30" text-anchor="middle" fill="blue">tst</text>

    </svg>`)
  });

});

// Square test:
describe('generate svg: SQUARE', () => {
  it('should return SQUARE svg template', () => {
    expect(generateSvg(squareObject)).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" fill="green"/>

    <text x="100" y="115" font-size="75" text-anchor="middle" fill="blue">tst</text>

    </svg>`)
  });

});
