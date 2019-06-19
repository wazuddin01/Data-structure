////////// Constructor Functions//////////////////
// function Vehicle(make, model, car) {
//   this.make = make;
//   this.model = model;
//   this.car = car;
//   this.getName = function() {
//     console.log(this);
//     return this.make + "" + this.model;
//   };
// }
// let car = new Vehicle("honda", "civic", "hondacivic");
// console.log(car.getName());

////////This concept////////////
// let obj = {
//   name: "The C object",
//   log: function() {
//     console.log(this);
//     let setname = function() {
//       console.log("Global", this); //This refer to global object
//     };
//     setname();
//   }
// };
// obj.log();
// function abc() {
//   nam = "Wazuddin";
// }
// console.log(abc.nam);

function abc() {
  console.log(this);
  let push = element => {
    console.log(element);
  };
  name = "ruhail";
  console.log(push(5));
}

abc();
