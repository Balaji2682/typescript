// number
let apples: number = 5; // <-- (Type Annotations)//or let apples = 5; (Type Inference)

//string
let speed: string = 'fast';

//boolean
let isSpecified: boolean = true;

//null
let nothingMuch: null = null;

//undefined
let nothing: undefined = undefined;

//Built in objects
let today: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false, false];

//Classes
class Car {}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 20,
  y: 10,
};

// Two Annotations
let numberOrBoolean: number | boolean = false;
numberOrBoolean = 5;
