export {};

const profile = {
  name: 'balaji',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {},
};

// const { age }: { age: number } = profile;
const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
console.log(lng);
