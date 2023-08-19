let usernames : string[] = ["rehman123","admin","altonia1122","sheikh10","usman09"];

for (let i = 0; i < usernames.length; i++) {
    console.log(usernames[i]);
    if (i==1) {
        console.log("Hello admin, would you like to see a status report");
        
    }
    else{
        console.log(`thank you for logging in again.${usernames[i]}`);
    }
}
console.log(usernames);

/* const usernames: string[] = ['admin', 'Eric', 'Alice', 'John', 'Kate'];

for (const username of usernames) {
    if (username === 'admin') {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
*/






