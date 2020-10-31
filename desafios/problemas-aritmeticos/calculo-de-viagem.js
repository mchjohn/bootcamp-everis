let line = gets().split(" ");

let timeSpent = parseInt(line[0]);
let averageSpeed = parseInt(line[1]);

let requiredLiters = (timeSpent * averageSpeed) / 12;
let requiredLitersFormatted = requiredLiters.toFixed(3);

console.log(` ${requiredLitersFormatted}`);