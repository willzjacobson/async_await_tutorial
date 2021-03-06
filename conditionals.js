'use strict';

const getJSON = () => Promise.resolve({ 'needsAnotherRequest': true });
const makeAnotherRequest = data => Promise.resolve(`More ${JSON.stringify(data)}`);

// The Old Way
// const makeRequest = () => {
//   return getJSON()
//     .then(data => {
//       if (data.needsAnotherRequest) {
//         return makeAnotherRequest(data)
//           .then(moreData => {
//             console.log(moreData)
//             return moreData
//           })
//       } else {
//         console.log(data)
//         return data
//       }
//     })
// };

const makeRequest = async () => {
  const data = await getJSON();
  if (data.needsAnotherRequest) {
  	const moreData = await makeAnotherRequest(data);
  	console.log(moreData);
  	return moreData;
  }
  console.log(data);
  return data;
}

makeRequest();