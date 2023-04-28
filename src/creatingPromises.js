// -> Walk for 10 minutes
// -> Have coffee for 10 minutes
// -> Buy groceries for 20 minutes
// -> Wash your car for 20 minutes

const doTask = (taskName, time) => {
  return new Promise((resolve, reject) => {
    // reject("Failed!");
    setTimeout(() => {
      resolve(`${taskName} is done`);
    }, time);
  });
};

// doTask("walk", 3000)
//   .then(result => {
//     console.log(result);
//     return doTask("have coffee", 3000);
//   })
//   .then(result => {
//     console.log(result);
//     return doTask("Buy Grocery", 5000);
//   })
//   .then(result => {
//     console.log(result);
//     return doTask("Wash Car", 5000);
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.error(err);
//   });

const aAsyncFunc = async () => {
  try {
    const walkResult = await doTask("walk", 3000);
    console.log(walkResult);
    const coffeeResult = await doTask("have coffee", 3000);
    console.log(coffeeResult);
    const groceryResult = await doTask("Buy Grocery", 5000);
    console.log(groceryResult);
    const carResult = await doTask("Wash Car", 5000);
    console.log(carResult);
  } catch (e) {
    console.error(e);
  }
};
aAsyncFunc();
