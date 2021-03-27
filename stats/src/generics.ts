class HoldAnything<T> {
  // by convetion it is T, stands for TypeOfData
  data: T;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;

const holdString = new HoldAnything<string>();
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
