'use strict';

const promise1 = () => Promise.resolve('one');
const promise2 = promise1 => Promise.resolve(`${promise1} two`);
const promise3 = (promise1, promise2) => Promise.resolve(`${promise1} ${promise1} three`);

/*
	You have probably found yourself in a situation where you call a promise1 and then use what it returns to call promise2, then use the results of both promises to call a promise3. Your code most likely looked like this:
*/

// const makeRequest = () => {
//   return promise1()
//     .then(value1 => {
//       // do something
//       return promise2(value1)
//         .then(value2 => {
//           // do something
//           return promise3(value1, value2)
//         })
//     })
// };

// makeRequest().then(results => console.log(results));

/*
	If promise3 didn’t require value1 it would be easy to flatten the promise nesting a bit. If you are the kind of person who couldn’t live with this, you could wrap both values 1 & 2 in a Promise.all and avoid deeper nesting, like this:
*/

// const makeRequest = () => {
//   return promise1()
//     .then(value1 => {
//       // do something
//       return Promise.all([value1, promise2(value1)])
//     })
//     .then(([value1, value2]) => {
//       // do something          
//       return promise3(value1, value2)
//     })
// };

// makeRequest().then(results => console.log(results));


// With async await
const makeRequest = async () => {
  const value1 = await promise1();
  const value2 = await promise2(value1);
  return promise3(value1, value2);
};

makeRequest().then(results => console.log(results));

