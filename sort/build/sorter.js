"use strict";
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean; // these name do not need to line up with the actual implementation(leftIndex, rightIndex)
//   swap(leftIndex: number, rightIndex: number): void;
// }
// changed to abstract, see notebook for difference
//!NB interfaces is still a huge part of TS, and abstract classes + interface
// go hand in hand
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
