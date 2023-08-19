console.log("seeing the world");
let fav_place: string[] = ["murre","nathia gali","naran","kagan","switzerland"];
console.log(typeof fav_place);
console.log("my original array",fav_place);
console.log("\n");

let copa : string [] = [... fav_place];// copyong fav place into copa
let  sorted: string[] ;
sorted = copa.sort();
console.log("sorted array", sorted);
console.log("\n");

console.log("my original array",fav_place,"\n");

let copb : string[] = [...fav_place];//copying data from fav place into copb
let reversed : string[] ;
reversed = copb.reverse();
console.log("reversed array", reversed);
console.log("\n");

console.log("my original array",fav_place);
console.log("\n");

let new_reversed : Array<string> ;
new_reversed = fav_place.reverse();
console.log("my original array is reversed",fav_place);
console.log("\n");

fav_place.reverse();
console.log("array gets back to it's original order",fav_place);
console.log("\n");


let sorted_new : string[];
sorted_new = fav_place.sort();
console.log("original array is stored in alphabetic order, and it's order has been changed",fav_place);
console.log("\n");

let again_reverse : string [] ;
again_reverse = fav_place.reverse();
console.log("Sort to change array so it’s stored in reverse alphabetical order,ts order has changed from my original array",fav_place);

console.log("\n");









