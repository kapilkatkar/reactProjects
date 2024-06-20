const palindrome = (str) => {
  let txt = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < txt.length / 2; i++) {
    if (txt[i] !== txt[txt.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(palindrome("madaM-"));
