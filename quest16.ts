let finalist = ['ahmad', 'usman', 'ibrahim', 'faizan', 'ahsan' ];
console.log("\nhy all of you",finalist,"\n");

console.log("i just want to inform you that by luck i just got booking of a big table soo now we have 3 more seats and we can invite 3 more persons also");
console.log("\n");

finalist.unshift("shah");//adding shah at first index of lit as per question requirments

finalist.splice(3,0,"hamza");// adding hamza in the middle of list

finalist.push("saif");// adding saif in the end of the list

for (let i = 0; i < finalist.length; i++) {
    console.log("i would like to invite Mr. ",finalist[i],"for a dinner on coming saturday please be on TimeRanges\n");
}
console.log(finalist);