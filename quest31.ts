let new_list :string[] = [ 'rehman123', 'admin', 'altonia1122', 'sheikh10', 'usman09' ];




if (new_list.length===0) {
    console.log("when empty\n")
    console.log("We need to find some users!")
} else {
    console.log(`list is not empty it has user : ${new_list}`);
    //new_list.forEach((user)=>(console.log(`hello  ${user}`)));
    for (let i = 0; i < new_list.length; i++) {
        console.log(`hello ${new_list[i]}`)
        
    }
}
new_list = [];
console.log("making list empty");
if (new_list.length===0) {
    console.log("when empty\n")
    console.log("We need to find some users!")
}

