import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([100, 1, 2, -3, -5, 5]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xayab");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(505);
linkedList.add(5);
linkedList.add(-5);
linkedList.add(45);
linkedList.print();
linkedList.sort();
linkedList.print();
