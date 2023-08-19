let numb : number[] = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < numb.length; i++) { 
     if (numb[i]==1) {
        console.log(`${numb[i]}st`);
     } 
     else if (numb[i]==2) {
        console.log(`${numb[i]}nd`);
     }
     else if (numb[i]==3) {
            console.log(`${numb[i]}rd`);
     }
     else {
        console.log(`${numb[i]}th`);
     }
}