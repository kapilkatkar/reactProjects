//indexOf method is used to check balanced parentheses in JavaScript.

const validParemthesis = (str) => {
  const opening = "({[";
  const closing = ")}]";
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (opening.includes(str[i])) {
      stack.push(str[i]);
    } else if (closing.includes(str[i])) {
      if (
        stack.length === 0 ||
        opening.indexOf(stack[stack.length - 1]) !== closing.indexOf(str[i])
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};
console.log(validParemthesis("()"));
console.log(validParemthesis("({})))"));
