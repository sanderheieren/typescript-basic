import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  // in order for typescript to point
  // you to the true source of error, otherweise you will just see it in the index files
  // (I added color to mappable). the implemnets is not required though, only to help
  name: string;
  location: {
    // remember that you are not declaring anything here
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h1>User Name: ${this.name}</h1>`;
  }
}
