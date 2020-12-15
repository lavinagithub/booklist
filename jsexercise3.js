// javascript code demonstrating a simple object

const person = {
  firstName: "John",
  lastName: "Doe",
  "City of Birth": "Sydney",
  country: "Australia",
};
console.log(person);
console.log(person.country);
console.log(person["City of Birth"]);


let school = {
  name: "St Joseph",
  location: "Sydney",
  "established year": "1971",
  displayInfo: function () {
    console.log(`${school.name} was established  
              in ${school["established year"]} at ${school.location}`);
  },
};
console.log(school.name);
console.log(school.location);
console.log(school['established year']);
school.displayInfo();
school.graduated = true;
console.log(school);

let cars = [
  {
    colour: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    colour: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5
  }
];
console.log(cars);

const newcar = {
  colour: "silver",
  type: "sedan",
  registration: new Date("2020-12-12"),
  capacity: 5,
};
cars.push(newcar);
console.log(cars);
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);
const newcar2 = {
  colour: "blue",
  type: "hatch",
  registration: new Date("2020-12-12"),
  capacity: 5,
};
cars.push(newcar2);
console.log(cars);
console.log(cars.length);
console.log(cars[0].colour);
console.log(cars[1].type);
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]); 
}
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]); 
}
// class Quad { 
//    constructor(height, width) { 
//       this._height = height; 
//       this._width = width; 
//    }
//    calcArea() { 
//      return this._height * this._width; 
//    }
// }
// const quad = new Quad(10, 30); 
// console.log(quad.calcArea()); 