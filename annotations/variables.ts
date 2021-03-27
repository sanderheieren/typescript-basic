let apples: number = 5; // annotations is the 'var: type' syntax
let speed: string = "fast";
let hasName: true = true;
let orange = 5; // inference, if on same line typscript will know the type itself

let nothing: null = null; // value identical to its type
let moreNothing: undefined = undefined;

// built in object
let now: Date = new Date();

// more complex annotations, such as class, array & object

// ARRAY. note, the annotations is not creating anything, just telling us
// what type it is supposed to have
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1, 2, 3];

//CLASSES
class Car {}
let car: Car = new Car(); // car must be an instance of a Car

// object literal
let point: { x: number; y: number } = {
  // {x:n;y_n} is the annotation
  x: 10,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {
  // : (i:n) => void is the annotation. from the '=' sign is the function. this annotations is JUST for the variable, not the function itself
  console.log(i);
};

// when to use annotations
// 1) function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json); // typescript doesnt know what .parse returns, thus 'any'. not good
const coordinatesCorrectWay: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) delayed initialization. (tpye inference only works if its on one line)
let words = ["red", "green", "blue"];
let foundWord: boolean;

words.forEach((word) => {
  if (word === "green") {
    foundWord = true;
  }
});

// 3) variable to have a type that cant be inferred correctly
let myNumbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

myNumbers.forEach((num) => {
  if (num > 0) {
    numberAboveZero = num;
  }
});
