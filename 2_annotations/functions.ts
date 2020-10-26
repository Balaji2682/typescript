//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
// OR
const logNumber2 = (i: number): number => {
  return i;
};
//OR using type inference
const logNumber3 = (i: number) => {
  return i;
};
// OR
function add(a: number, b: number): number {
  return a + b;
}
//function with destruct params and annotation
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
