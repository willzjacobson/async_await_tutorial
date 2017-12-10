'use strict';

const callAPromise = () => Promise.resolve();

/*
	This is hard to debug for 2 reasons:

	1) You can’t set breakpoints in arrow functions that return expressions (no body).

	2) If you set a breakpoint inside a .then block and use debug shortcuts like step-over, the debugger will not move to the the following .then because it only “steps” through synchronous code.
*/

// const makeRequest = () => {
// 	return callAPromise()
// 		.then(() => callAPromise())
// 		.then(() => callAPromise())
// 		.then(() => callAPromise())
// 		.then(() => callAPromise())
// };


/*
	With async/await you don’t need arrow functions as much, and you can step through await calls exactly as if they were normal synchronous calls.
*/

const makeRequest = () => {
	return callAPromise()
		.then(() => callAPromise())
		.then(() => callAPromise())
		.then(() => callAPromise())
		.then(() => callAPromise())
};

makeRequest().then(() => console.log('Done'));