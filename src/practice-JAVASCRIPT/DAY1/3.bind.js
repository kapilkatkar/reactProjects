/**
 * 1. bind function is similar to call function,
 * 2. but the catch is it will return a function which we can invoked whenever needed
 */

const nameObj = {
  firstName: "Kapil",
  lastName: "Katkar",
};

function fullName(city, state) {
  console.log(`${this.firstName} ${this.lastName} ${city} ${state}`);
}

const fullName2 = fullName.bind(nameObj, "Nagpur", "MH");
fullName2();
console.log(fullName2);
