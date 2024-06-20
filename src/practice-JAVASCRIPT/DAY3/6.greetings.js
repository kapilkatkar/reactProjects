const GreetingFun = (name) => {
  if (name === "" || name === null || typeof name !== "string") {
    return `please Enter valid input.`;
  }
  const formatedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return `Welcome to the team Mr. ${formatedName}`;
};
console.log(GreetingFun("kApIl"));
