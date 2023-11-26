const generateSvg = require("./shapes")

const circleObject = {
  text: 'tst',
  textColor: 'blue',
  shape: 'circle',
  shapeColor: 'green'
}

const triangleObject = {
  text: 'tst',
  textColor: 'blue',
  shape: 'triangle',
  shapeColor: 'green'
}

const squareObject = {
  text: 'tst',
  textColor: 'blue',
  shape: 'square',
  shapeColor: 'green'
}

describe('generate svg: CIRCLE', () => {
  it('should return TRIANGLE svg template', () => {
    expect(generateSvg(circleObject)).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="100" cy="100" r="100" fill="green" />

    <text x="100" y="120" font-size="75" text-anchor="middle" fill="blue">tst</text>

    </svg>`)
  });

});

describe('generate svg: TRIANGLE', () => {
  it('should return TRIANGLE svg template', () => {
    expect(generateSvg(triangleObject)).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="100" cy="100" r="100" fill="green" />

    <text x="100" y="120" font-size="75" text-anchor="middle" fill="blue">tst</text>

    </svg>`)
  });

});
