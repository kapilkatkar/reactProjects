/**
 * The call(), bind(), and apply() methods in JavaScript are used
 * to control the value of this in function invocation.
 * whit this methods we can control how arguments are passed to the function
 */

/**
 * 1. lets say i have one object inside that i have one method
 * 2. i can access taht method and that method can inheritance the property of the same onject
 * 3. what if i have another object and i want to access the entites of another object to the same function
 * 4. there came a call method to the rescue
 * 5. we can pass the another object which we need in the call method, so that we can access the entites
 * 6. inside the call method we can pass the multiple parameters but fisrt one has to be always object
 */

const nameObj = {
  firstName: "Kapil",
  lastName: "Katkar",
};

function fullName(city, state) {
  console.log(`${this.firstName} ${this.lastName} ${city} ${state}`);
}

fullName.call(nameObj, "Chandrapur", "MH");

const nameObj2 = {
  firstName: "Akshay",
  lastName: "Saini",
};

fullName.call(nameObj2, "Nagpur", "MH");
