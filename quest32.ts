let current_user : string[] = ["usman","ali","ahmad","haider","shuja"];
let new_user : string[] = ["usman","haider","faizan","umar","shuja"];
for (let i = 0; i < new_user.length; i++) {

    let useravailable= false;

    for (let j = 0; j < current_user.length; j++) {
        
        if (new_user[i]===current_user[j]) {
            useravailable = true;
            break;
       }
    
    }
    if (useravailable) {
        console.log(`${new_user[i]} is not available`);
    } else {
        console.log(`${new_user[i]}  is available`)
    }
}