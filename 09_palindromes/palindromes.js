const palindromes = function (param) {
  let str = param;
  //{/[^a-zA-Z ]/g, ""} - strips sentence off all punctuations
  //g - ensures that all matches are shown t& not just he first one

  let s1 = str
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(" ")
    .join("");

  let s2 = s1.split("").reverse().join("");

  if (s1 == s2) {
    // console.log("its a palindrome");
    return true;
  } else {
    // console.log("its not a palindrome");
    return false;
  }
};
// palindromes(a);
// Do not edit below this line
module.exports = palindromes;
