// Function that returns SVG template for a circle
function generateCircle(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="100" cy="100" r="100" fill="${data.shapeColor}" />

    <text x="100" y="120" font-size="75" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

    </svg>`
}

// Function that returns SVG template for a triangle
function generateTriangle(data) {
    return `<svg version="1.1" viewBox="25 10 100 100" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="50, 10, 100, 100 0, 100" fill="${data.shapeColor}"/>

    <text x="50" y="80" font-size="30" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

    </svg>`
}

// Function that returns SVG template for a square
function generateSquare(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" fill="${data.shapeColor}"/>

    <text x="100" y="115" font-size="75" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

    </svg>`
}

// Function that chooses which SVG template to use based off of user input
function generateSvg(data) {
    if (data.shape === 'circle') {

        return generateCircle(data)

    } else if (data.shape === 'triangle') {

        return generateTriangle(data)

    } else if (data.shape === 'square') {

        return generateSquare(data)

    }
}

// Exporting generateSvg function to be accesible in other files
module.exports = generateSvg
