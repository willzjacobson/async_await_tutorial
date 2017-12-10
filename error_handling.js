'use strict';

const getJSON = () => Promise.resolve({ 'iAm': 'JSON' });

// The Old Way
// const makeRequest = () => {
//   try {
//     getJSON()
//       .then(result => {
//         // this parse may fail
//         const data = JSON.parse(result);
//         console.log(data);
//       })
//       // uncomment this block to handle asynchronous errors
//       // .catch(err => console.log(`Error: ${err}`));
//   } catch (err) {
//     console.log(err)
//   }
// };

const makeRequest = async () => {
  try {
    const data = JSON.parse(await getJSON());
    console.log(`Data: ${data}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

makeRequest();