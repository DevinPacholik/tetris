const normalFunction = function() {
  console.log("normal function 1");
};

function anotherNormalOne() {
  console.log("normal function 2");
}

const arrowFunction = () => {
  console.log("arrow function! 😎");
  console.log("another line");
  return;
};

// If your functions returns value immediately
const sum = (a, b) => a + b;

// only one argument
const square = a => a ** 2;

arrowFunction();

console.log(square(5));

// `this` binding
// normal functions take the instance `this` of the calling function
// arrow functions simply inherit `this` from their parent context

// w3 schools playground - https://www.w3schools.com/js/js_arrow_function.asp
