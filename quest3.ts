var na = "abdulRehmaN";
console.log(na);

console.log("upper case");
console.log(na.toUpperCase());
console.log("\n");

console.log("lower case");
console.log(na.toLowerCase());
console.log("\n");


console.log("title case");
let text = "i am a boy";
console.log(text);

 let txt= text.split(' ');
for (let i = 0; i < txt.length; i++) {
   txt[i] = txt[i].charAt(0).toUpperCase()+txt[i].slice(1);
   
}
let txt1 = txt.join(" ");
console.log(txt1);

