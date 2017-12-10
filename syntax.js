'use strict';

/*
	Our function has the keyword async before it. The await keyword can only be used inside functions defined with async. Any async function returns a promise implicitly, and the resolve value of the promise will be whatever you return from the function.

	We can’t use await in the top level of our code since that is not inside an async function.

	await getJSON() means that the console.log call will wait until getJSON() promise resolves and print it value.
*/

const getJSON = () => Promise.resolve({ 'iAm': 'JSON' });

// The Old Way
// const makeRequest = () =>
//   getJSON()
//     .then(data => {
//       console.log(data)
//       return "done"
//     });

const makeRequest = async () => {
  console.log(await getJSON());
  return "done";
};

makeRequest()
	.then(result => console.log(`This is what was returned: ${result}`));

