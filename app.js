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

// function abc() {
//   console.log(this);
//   let push = element => {
//     console.log(element);
//   };
//   name = "ruhail";
//   console.log(push(5));
// }

// abc();

let arr = [
  { name: "Ruhail", company: "Blockchain", age: "24" },
  { name: "Aman", company: "Rx logix", age: "20" },
  { name: "Hitesh", company: "Blockchain", age: "26" },
  { name: "vikas", company: "Blockchain", age: "22" },
  { name: "saleem", company: "Blockchain", age: "25" }
];

let company = arr.filter(users => {
  return users.company === "Blockchain";
});
console.log("company", company);

let username = arr.map(users => {
  return users.name;
});
console.log("username", username);
