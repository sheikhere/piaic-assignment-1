
interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...args: { key: string; value: any }[]): Car {
  const car: Car = {
    manufacturer,
    modelName,
  };

  for (const arg of args) {
    car[arg.key] = arg.value;
  }

  return car;
}

// Calling the function with required and optional information
const carData = createCar('Toyota', 'Camry', { key: 'color', value: 'Blue' }, { key: 'optional_feature', value: 'Sunroof' });

// Printing the returned object
console.log(carData);
