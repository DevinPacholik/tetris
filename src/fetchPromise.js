// synchronous
// Excecute one by one & return some value

// const sum = (a, b) => a + b;

// console.log(sum(2, 3));
// console.log(sum(1, 2));
// console.log(sum(5, 4));

// Asynchronous tasks
// -> event listeners
// -> Fetch
// -> setTimeout
// -> setInterval

// then & catch chain was introduced in ES6

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => {
    // this will execute after fetch is complete
    return response.json();
  })
  .then(data => {
    // this will execute after json decoding is complete
    console.log("Data from then catch -", data);
  })
  .catch(err => {
    console.error(err);
  });

// ES8 introduced Async/Await

const myAsyncCode = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("Data from then async await -", data);
  } catch (e) {
    console.error(e);
  }
};
myAsyncCode();
