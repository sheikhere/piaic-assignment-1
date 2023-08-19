let masks = ["n95","n1pk","surgical","medical","covid"];
console.log("masks :")
for (let i = 0; i < masks.length; i++) {
    console.log(`'${masks[i]}'`);
    
}
/* to access the covid last item of masks
here we see there are 5 items in masks, to access last one if we pass index number 5,
we'll get an error
it is beacuse index numbering starts from 0
soo to get covid count from 0 to end and covid is on 4th, uh can also do (totallength - 1)
soo to get covid we have to pass number 4 */

let specialized:string= masks[4];
console.log(specialized);
