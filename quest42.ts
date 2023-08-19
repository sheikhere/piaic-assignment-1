const _magicians : string[] = ["Criss Angel","Derren Brown","David Blaine","Lance Burton"];
function make_greet(magician:string[]){
    for (let i = 0; i < _magicians.length; i++) {
        console.log(`THE GREAT ${_magicians[i]}`)
        
    }
}
make_greet(_magicians);
console.log(_magicians);



export {};