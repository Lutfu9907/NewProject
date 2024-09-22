const { circleCircumference, circleArea } = require('./circle.js');

const radius = 5;

console.log(`yarıçapı ${radius} alanı:${circleArea(radius)}`);
console.log(`yarıçapı ${radius} çevresi:${circleCircumference(radius)}`);
