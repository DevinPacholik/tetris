const normalString = "this is a string";

const firstName = "Dani";

const lastName = "Akash";

// Needs escape sequence \ for new lines
const myHtmlString =
  "<h1>" + firstName + " " + lastName + "</h1> \
<h2>Software Engineer</h2>";

console.log(myHtmlString);

const myHtmlTemplateString = `<h1>${firstName} ${lastName}</h1>
<h2>Software Engineer</h2>
`;

console.log(myHtmlTemplateString);

document.querySelector("#app").innerHTML = myHtmlTemplateString;

// Template strings support expressions
const sum = (a, b) => a + b;

const mySmarterString = `Sum of two numbers 2, 3 = ${sum(2, 3)}`;

console.log(mySmarterString);

const evenNumbers = [2, 4, 6, 8, 10];

const doubleEven = `${evenNumbers.map(each => each * 2)}`;

console.log(doubleEven);
