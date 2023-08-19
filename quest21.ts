interface car{
    make: string;
    model: string;
    year:number;
    price:number;
}


const cars: car[] = [
    {
      make: 'Toyota',
      model: 'Corolla',
      year:2020,
      price:18000,
    },
    {
      make: 'honda',
      model: 'civic',
      year:2019,
      price:15000,
    },
    {
      make:'suzuki',
      model:'mehran',
      year:2017,
      price:10000.
    },
    {
      make:'kia',
      model:'carnival',
      year:2017,
      price:25000,
    }
]
 for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log(`'car : ${i} '`);
    console.log("make : ",car.make);
    console.log("model : ",car.model);
    console.log(`year : ${car.year}`);
    console.log("price : ",car.price);
    console.log("----------------------------------------");
 }


/*const cars: Car[] = [
  {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    price: 18000,*/
