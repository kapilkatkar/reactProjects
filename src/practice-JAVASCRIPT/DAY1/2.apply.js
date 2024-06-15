/**
 * 1.bind method will work same as the call method
 * 2.first argument for bind method is always a object which we need refernce from
 * 3.and for other remaining arguments it will not take separately,
 *  instead we need to send the in an array
 */

const nameObj = {
  firstName: "Kapil",
  lastName: "Katkar",
};

function fullName(city, state) {
  console.log(`${this.firstName} ${this.lastName} ${city} ${state}`);
}

fullName.apply(nameObj, ["Nagpur", "MH"]);
