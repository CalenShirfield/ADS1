let v = require("./Vector.js");

let tempVector = new v.Vector(1);

console.log(tempVector.length());

tempVector.store(0, 2);
tempVector.store(1, 4);
console.log(tempVector);
