// javascript code demonstrating a simple object
let school = {
  name: "St Joseph",
  location: "Sydney",
  "established year": "1971",
  displayInfo: function () {
    console.log(`${school.name} was established  
              in ${school["established year"]} at ${school.location}`);
  },
};
school.displayInfo();

const person = {
  firstName: "John",
  lastName: "Doe",
  "City of Birth": "Sydney",
  country: "Australia",
};
console.log(person);


class Quad { 
   constructor(height, width) { 
      this._height = height; 
      this._width = width; 
   }
   calcArea() { 
     return this._height * this._width; 
   }
}
const quad = new Quad(10, 30); 
console.log(quad.calcArea()); 
