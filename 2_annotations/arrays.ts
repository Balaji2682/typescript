const carMakers = ['honda', 'tata', 'ford'];
const dates = [new Date(), new Date()];

//2d array annotation
const bikeMakers: string[][] = [];

//annotations helps in autocomplete while using map, foreach, reduce
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//mixed types in arrays
const importantDate: (string | Date)[] = [new Date(), '2020-09-09'];
