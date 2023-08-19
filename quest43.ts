const _magicians : string[] = ["Criss Angel","Derren Brown","David Blaine","Lance Burton"];

function make_greet(magician:string[]){
    const greeting : string[] = [];
    for (let i = 0 ; i< magician.length; i++){
        const new_  = "the greet  " + magician[i];
        greeting.push(new_);
    } 
    return greeting;
}
console.log(`new greeted array \n`)
const new_arr :string[] = make_greet(_magicians);
console.log(`${new_arr}`)
console.log(`\noriginal array`);
console.log(_magicians);



