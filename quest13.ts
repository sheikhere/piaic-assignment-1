
let fav_transport: string[] = ["Porche","train","luxury bus","private jet","kawasaki"];
console.log(typeof fav_transport);
for (let i = 0; i < fav_transport.length; i++) {
    console.log("i would like to own a",fav_transport[i]);
    
}

// another way
console.log("another way")
for (let j = 0; j < fav_transport.length; j++) {
    if (j==0) {
        console.log("i would like to have a ",fav_transport[j]);
    }        
    
    if (j==1) {
        console.log("i would like to travel in a ",fav_transport[j]);
        
    }
    if (j==2) {
        console.log("i would like to travel in a", fav_transport[j], "but not that much");
        
    }
    if (j==3) {
        console.log("i would like to own a ",fav_transport[j]);
        
    }
    if (j==4) {
        console.log("i would like to ride a ",fav_transport[j]);
        
    }

}

let fav_transp: string[] = ['car','bike','airplane','bicycle','rikshaw'];;
 console.log(fav_transp);

 for (let i = 0; i < fav_transp.length; i++) {
    console.log(`i would like to own a ${fav_transp[i]}`);
    
 }



