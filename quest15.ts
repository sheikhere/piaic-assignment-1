let fav_peoplee: string[] = ["ali","usman","faizan","ahsan"];
console.log("list of guest will receive invitation",fav_peoplee,"\n")
let kl =fav_peoplee.shift();//ali is not coming,o add ali in notcoming list we get and store it in varibale kl


let notcom = [];//making list of peoples not coming
notcom.push(kl);// adding ali in notcoming list by push function

fav_peoplee.unshift("ahmad");//ahmad is  coming instead of ali
fav_peoplee.push("abdulrehman");//my shildhood friend abdulrehman also will be come
let lm =fav_peoplee.pop();//ahsan is out of city, get and store in variable lm
fav_peoplee.splice(2,0,"ibrahim");//one more my school friend will come, he just came in mind 
notcom.push(lm);//adding ahsan in not coming list


console.log("final list",fav_peoplee,"\n");

for (let i = 0; i < fav_peoplee.length; i++) {
    if (i==0) {
        console.log("hy ",fav_peoplee[i],"hope uh're fine, i would like to invite you for a dinner at coming saturday tonight\n")
    }
    if (i==1) {
        console.log("hy ",fav_peoplee[i],"hope uh're fine, i would like to invite you for a dinner at coming saturday tonight\n")
    }
    if (i==2) {
        console.log("hy ",fav_peoplee[i],"hope uh're fine, i would like to invite you for a dinner at coming saturday tonight\n")
    }
    if (i==3) {
        console.log("hy ",fav_peoplee[i],"hope uh're fine, i would like to invite you for a dinner at coming saturday tonight\n")
    }
    if (i==4) {
        console.log("hy ",fav_peoplee[i],"hope uh're fine, i would like to invite you for a dinner at coming saturday tonight\n")
    }

    
}
console.log("guests that are not coming",notcom);
for (let j = 0; j < notcom.length; j++) {
    console.log("due to busy shedule",notcom[j],"is not coming i will miss you");
    
}