let nam :string = "Mustafa";
console.log(`nam ${nam}`);
console.log("Tests for equality and inequality with strings");
console.log(`${nam}==='string' ${nam==='string'}`);
console.log(`${nam}!=='string' ${nam!=='string'}`);

console.log("Tests using the lower case function");
let lower_nam : string = nam.toLowerCase();
console.log(`nam conveting into lower case${nam.toLowerCase()}`);
console.log(`lower_nam ${lower_nam}`);

if (nam = lower_nam) {
    console.log(`Mustafa===mustafa ${nam===lower_nam}`);
    
} else {
    console.log(`Mustafa !== mustafa ${nam===lower_nam}`);
}

console.log("Tests for equality and inequality with numbers");
let num1 : number = 20;
let num2 : number = 40;

//test for equality
if (num1===num2) {
    console.log(`${num1}===${num2} ${num1===num2}`);
} else {
    console.log(`${num1}!==${num2} ${num1!==num2}`);
}
console.log("Tests for greator less or equal to");

if (num1<=num2) {
    //console.log(`num1<=num2 ${num1<=num2}`);
    console.log(`${num1}<=${num2} ${num1<=num2}`);
} else {
    //console.log(`num1>=num2 ${num1>=num2}`);
    console.log(`${num1}>=${num2} ${num1>=num2}`);
}
console.log("Tests 'and' 'or' ");
if (num1 < num2 && num1 === num2) {
    console.log(`${num1}<${num2} && ${num1}===${num2} ${num1 < num2 && num1 === num2}`);    
} else {
    console.log(`${num1}<${num2} || ${num1}===${num2} ${num1 < num2 || num1 === num2}`); 
}
console.log("Test whether an item is in a array")
let arr : Array<any> = ["orange","banana","mango","guava","pulse"];
let item = "mango";
if (arr.includes("mango")) {
    console.log("yes it is present");
    
} else {
    console.log("no it is present");
}

console.log("Test whether an item is not in a array");
if (arr.includes("watermelon")) {
    console.log("yes it is present");
    
} else {
    console.log("no it is present");
}
