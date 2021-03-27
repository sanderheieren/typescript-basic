const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number]; // making type alias

const pepsi: [string, boolean, number] = ["brown", true, 40]; // this is a tuple, the order is critical!!! for us developers
const cola: Drink = ["brun", true, 90]; // using the type alias

// why care about it?
// not gonna really use it, so no worries. much better to use objects, because it is hard
// to know what the value is supposed to represent without the key
