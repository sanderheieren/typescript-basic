"use strict";
var HoldAnything = /** @class */ (function () {
    function HoldAnything() {
    }
    return HoldAnything;
}());
var holdNumber = new HoldAnything();
holdNumber.data = 123;
var holdString = new HoldAnything();
holdString.data = "1";
// GENERICS ARE LIKE FUNCTION ARGUMENTS
// class HoldNumber {
//   data: number;
// }
// class HoldString {
//   data: string;
// }
// const holdNumber = new HoldNumber();
// holdNumber.data = 123;
// const holdString = new HoldString();
// holdString.data = "1";
