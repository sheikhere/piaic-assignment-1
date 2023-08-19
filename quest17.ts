let finalist1 = ['shah','ahmad','usman','hamza','ibrahim','faizan','ahsan','saif'];
console.log("total people",finalist1.length)
console.log("hy all of you", finalist1,"\n");

console.log(" i just found out that my new dinner table won’t arrive in time for the dinner, and i have space for only two guests.");

console.log("\n now i can only invites two persons\n");

for (let i = 0; i < 6 ; i++) {
     let an = finalist1.pop();
     console.log("i am soo sorry,",an ,"i will meet you soom");
     console.log(finalist1[i]);
    
}

console.log(finalist1);

for (let j = 0; j < finalist1.length; j++) {
    console.log(finalist1[j],"are still invited");  
}
finalist1.splice(0,2,);//also removing two left names as about question
console.log(finalist1);

