const car:string = 'Tesla';

console.log("\ntest 1 : 'is car == Tesla', predict? ");
console.log(car == 'Tesla');//true
console.log('\n');

console.log("test 2 : 'is car == Corrolla', predict? ");
console.log(car == 'corrolla');//false
console.log('\n');

console.log("test 3 : 'is car == bmw', predict? ");
console.log(car == 'bmw');//false
console.log('\n');

console.log("test 4 : 'is car != bmw', predict? ");
console.log(car != 'bmw');
console.log('\n');//true

console.log("test 5 : 'is car, engine cc: mercedes == Tesla', predict? ");
console.log(car == 'mercedes');//flase
console.log('\n');

console.log("test 6 : 'is car, engine cc: mercedes != Tesla', predict? ");
console.log(car != 'mercedes');//true
console.log('\n');

console.log("test 7 : 'is car price : rangerover == Tesla', predict? ");
console.log(car != 'Tesla');//false
console.log('\n');

console.log("test 8 : 'is car price : rangerover  != Tesla', predict? ");
console.log(car == 'Tesla');//true
console.log('\n');

console.log("test 9 : 'is car == Tesla || car === nissan', predict? ");
console.log(car === 'Tesla' || car === 'nissan');//true
console.log('\n');

console.log("test 10 : 'is car != Tesla && car != Tesla', predict? ");
console.log(car != 'Tesla' && car !== 'Tesla');//false


console.log('\n');



