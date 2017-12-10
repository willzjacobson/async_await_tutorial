'use strict';

const callAPromise = () => Promise.resolve();

// Leads to a confusing error stack
// const makeRequest = () => {
//   return callAPromise()
//     .then(() => callAPromise())
//     .then(() => callAPromise())
//     .then(() => callAPromise())
//     .then(() => callAPromise())
//     .then(() => {
//       throw new Error("oops");
//     })
// };


// Leads to an intuitive error stack
const makeRequest = async () => {
  await callAPromise()
  await callAPromise()
  await callAPromise()
  await callAPromise()
  await callAPromise()
  throw new Error("oops");
}


makeRequest()
  .catch(err => {
    console.log(err);
    // output
    // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
  });

