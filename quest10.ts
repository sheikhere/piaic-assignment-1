// my name is abdulrehman, and i am in batch 47
//putting 2 forward slashes makes a single line comment(shortcut: ctrl+/)

/* for multilines comments add forward slach and staric(shorcut: alt+shift+a) */
/*firzt slash and the staric, and in closing first staric and then slash*/


//here we are doing 4 different operations to get ans 8
var adi = 5 + 3;
var subi = 10 - 2;
let mult = 4 * 2;
var divs = 32 / 4;
console.log("by addition", adi);
console.log("by subtraction", subi);
console.log("by multiplication", mult);
console.log("by division", divs);


// here we are using nested loop to get possible numbers less than 10, of their sum is 8 
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 11; j++) {
        if (i + j == 8) {
            console.log("addition", i, "+", j, " = 8");
        }
    }
}
