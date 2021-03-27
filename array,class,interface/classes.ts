class Vehicle {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // } same as --v
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // do not need modifier on a field that is from super class
    super(color); // super is a ref to the parent's constructor method
  }
  private drive(): void {
    console.log("ROOOM");
  }
  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(3, "red");
car.startDriving();
