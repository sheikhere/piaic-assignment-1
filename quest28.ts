let age_year:number= -996;
if (age_year>0 && age_year<2) {
    console.log("person is baby");
}
else if(age_year>=2 && age_year<4){
    console.log("person is toddler");
}
else if(age_year>=4 && age_year<13){
    console.log("person is kid");
}
else if(age_year>=13 && age_year<20){
    console.log("person is teenager");
}
else if(age_year>=20 && age_year<65){
    console.log("person is adult");
}
else if(age_year>=65){
    console.log("person is elder");
}
else{
    console.log("invalid age");
}
