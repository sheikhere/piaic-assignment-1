let animal : string[] = ["cat","dog","goat","cow"];
console.log(`Animal\n`);
for (let i = 0; i < animal.length; i++) {
    console.log(` ${animal[i]}`);
}
console.log('\n');
for (let i = 0; i < animal.length; i++) {
    console.log(`A ${animal[i]} would make a great pet`)
}

console.log("\n all these animals have same four legs!\n");
console.log(`\n i would love ${animal[2]} to make a pet `)