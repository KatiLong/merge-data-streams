// In this drill, you'll write a function called mergeDataStreams that merges together data from two sources. The first data set is an array of objects which looks like this:

let arr1 = [{
  id: 'aBcDeFgH',
  firstName: 'Juan',
  lastName: 'Doe',
  age: 32
},
{
  id: 'zYxWvUt',
  firstName: 'Alex',
  lastName: 'Smith',
  age: 24
}]
// The second data set is an array of objects which looks like this

let arr2 = [{
  id: 'aBcDeFgH',
  occupation: 'architect',
  address: {
    street: '123 Main St',
    city: 'CityTown',
    Country: 'USA'
  }
},
{
  id: 'zYxWvUt',
  occupation: 'receptionist',
  address: {
    street: '555 Ocean Ave',
    city: 'Beach City',
    Country: 'USA'
  }
}]


// function mergeDataStreams(arr1, arr2) {
//     return [...arr1, ...arr2];
// }

// a1 = ['1', '2'];
// a2 = ['3', '4', '5'];
// mergeDataStreams(a1, a2);

//Vanilla JS
// function mergeDataStreams (data1, data2) {
//   let mergedArr = [];
//   //copy first array
//   for (let x = 0; x < data1.length; x++) {
//     mergedArr.push(data1[x]);
//   }

//   //iterate second array, comparing to data from first object
//   for (let x = 0; x <data2.length; x++) {
//     for (let i = 0; i < mergedArr.length; i++) {
//       // console.log(mergedArr.length);
//       if (data2[x].id === mergedArr[i].id) { //if id's match
//         for (let k in data2[x]) { //add data2's info about that index
//             mergedArr[i][k] = data2[x][k];
//         }
//       }
//     }
//   }
//   // return merged array of objects with one object per id
//   return mergedArr;
// }

//Built-in Methods

function mergeDataStreams (d1, d2) {
  let mergedArr = d1.reduce(function(accumulator, currentValue) {

  })
}



// mergeDataStreams(arr1, arr2);

// Each item in the first dataset has a matching counterpart in the second dataset with the same value for the id property.

// To complete the challenge, your mergeDataStreams must return an array of objects that merge together the values for a given id. So, for instance, the merged version of the data above would be:

[{
  id: 'aBcDeFgH',
  firstName: 'Juan',
  lastName: 'Doe',
  age: 32,
  occupation: 'architect',
  address: {
    street: '123 Main St',
    city: 'CityTown',
    Country: 'USA'
  }
},
{
  id: 'zYxWvUt',
  firstName: 'Alex',
  lastName: 'Smith',
  age: 24,
  occupation: 'receptionist',
  address: {
    street: '555 Ocean Ave',
    city: 'Beach City',
    Country: 'USA'
  }
}]
// mergeDataStreams should return an array of merged objects like this.