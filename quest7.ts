let addi: number = 5+3;
let subs: number = 10-2;
let mul: number = 4*2;
let divi: number = 32/4;
console.log("by addition", addi);
console.log("by subtraction",subs);
console.log("by multiplication",mul);
console.log("by division",divi);

// possible numbers less than 10, of their sum is 8 
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 11 ; j++) {
        if (i+j==8) {
            console.log("addition",i,"+",j," = 8")
        }
        

    }
    
}