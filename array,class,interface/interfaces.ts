// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string; // type needs a function, and it will return a string
// }

interface Reportable {
  // wanna make a generic interface so it can be reused, here with both
  // a car and a drink.
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const drink = {
  color: "red",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// const printVehicle = (vehicle: Reportable): void => {
//   console.log(vehicle.summary());
// };

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
