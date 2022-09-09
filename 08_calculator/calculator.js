const add = function(x,y) {
  let sum = 0;
      sum = x+y;
      return sum;
};

const subtract = function(m,n) {
	const sub = m-n;
  return sub;
};

const sum = function(x) {
  let sum = 0;
	for (let i = 0; i < x.length; i++) {
    const element = x[i];
    sum += element;
  }
  return sum;
};

const multiply = function(x) {
  let product = 1;
	for (let i = 0; i < x.length; i++) {
    const element = x[i];
    product *= element;
  }
  return product;
};

const power = function(n,x) {
  const power = Math.pow(n,x);
	return power;
};

const factorial = function(x) {
  //recursion has been employed to find solution
	if (x==1 || x==0) {
    return 1;
  } else {
    return x * factorial (x-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
