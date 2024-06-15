/**
 * 1. every function you define automatically inherits certain built-in properties
 * and methods from the Function prototype.
 * 2. we can achieve this by Function.prototype.includes
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
////////////////////////////////////////////////////////

/**
 * steps :
 * 1.
 */

Function.prototype.myBind = function (...args) {
  const obj = this;
  const params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const fullName3 = fullName.myBind(nameObj, "Nagpur", "MH");
fullName3();
