const fibonacci = function (fibNumber) {
  let n1 = 0,
    n2 = 1,
    k = fibNumber,
    nextTerm;
  let fibArray = [];

  if (k >= 0) {
    for (let i = 0; i < 100; i++) {
      fibArray.push(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
    return fibArray[k];
  } else {
    return "OOPS";
  }
};
// fibonacci("5");
// Do not edit below this line
module.exports = fibonacci;
