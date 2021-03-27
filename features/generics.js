var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
var arr = new ArrayOfAnything(["a", "b", "c"]);
console.log(arr.get(1));
// Example of generics with functions
// function printStrings(arr: string[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// function printNumbers(arr: number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// function printAnything<T>(arr: T[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// printAnything<string>(["a", "b", "c"]);
// // generics constraints
// class Car {
//   print() {
//     console.log("I am a car");
//   }
// }
// class House {
//   print() {
//     console.log("I am a house");
//   }
// }
// interface Printable {
//   print(): void;
// }
// // T will have all the properties the interface has
// // this is generics contraints
// function printHousesOrCars<T extends Printable>(arr: T[]): void {
//   arr.forEach((t) => t.print());
// }
// printHousesOrCars<House>([new House(), new House()]);
// printHousesOrCars<Car>([new Car(), new Car()]);
