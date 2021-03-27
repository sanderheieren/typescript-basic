// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean; // these name do not need to line up with the actual implementation(leftIndex, rightIndex)
//   swap(leftIndex: number, rightIndex: number): void;
// }
// changed to abstract, see notebook for difference
//!NB interfaces is still a huge part of TS, and abstract classes + interface
// go hand in hand

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }
  // because of the modifier, we can simplify it:
  // SAME AS:
  // === constructor(public collection: number[] | string) {} ^^^

  // bad code, because it is not scalable. will be using interface.
  // the reason is that both the comparasion and swapping is depending on the type
  // sort(): void {
  //   const { length } = this.collection;

  //   for (let i = 0; i < length; i++) {
  //     for (let j = 0; j < length - i - 1; j++) {
  //       // All of this oinly wokr with collection is array of numbers (numbers[])
  //       // if collection is array of numbers
  //       if (this.collection instanceof Array) {
  //         // this is a type guard ^
  //         // TS is smart and now knows that collenction === number[]
  //         if (this.collection[j] > this.collection[j + 1]) { THIS COMPARING IS WRITTEN IN ITS OWN CLASS NOW^
  //           const leftHand = this.collection[j];
  //           this.collection[j] = this.collection[j + 1];
  //           this.collection[j + 1] = leftHand;
  //         }
  //       }

  //       // only work if collection is a string
  //       // if collection is a string, do this logic instead
  //       if (typeof this.collection === "string") {
  //         // another type guard
  //       }
  //     }
  //   }
  // }
}
