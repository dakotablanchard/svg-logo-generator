const generateSvg = require("./shapes")

const circleObject = {
    text: 'tst',
    textColor: 'blue',
    shape: 'circle',
    shapeColor: 'green'
  }

  describe('generate svg: circle', () => {
    it('should return circle vvg template', () => {
        expect(generateSvg(circleObject)).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="green" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">tst</text>

        </svg>`)
    });

  });
