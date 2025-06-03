// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // TODO: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    // Ensure 4 wheels
    if (!wheels || wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Use type assertion to access weight property
    const make = (vehicle as any).make || 'Unknown';
    const model = (vehicle as any).model || 'Unknown';
    const weight = (vehicle as any).weight;
    if (typeof weight === 'number' && weight <= this.towingCapacity) {
      console.log(`Towing ${make} ${model}...`);
    } else {
      console.log(`The vehicle (${make} ${model}) is too heavy to be towed!`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    for (let i = 0; i < this.wheels.length; i++) {
      console.log(
        `Wheel ${i + 1}: ${this.wheels[i].getDiameter} inch with a ${this.wheels[i].getTireBrand} tire`
      );
    }
  }
}

// Export the Truck class as the default export
export default Truck;
