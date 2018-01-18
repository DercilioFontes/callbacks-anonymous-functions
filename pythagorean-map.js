var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(item) {
  // console.log(item);
  // console.log(item.x);
  // console.log(item.y);

  return Math.sqrt(Math.pow(item.x, 2) + Math.pow(item.y, 2));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Using map to reformat objects in an array

// The following code takes an array of objects and creates a new array containing the newly reformatted objects.

// var kvArray = [{key: 1, value: 10},
//                {key: 2, value: 20},
//                {key: 3, value: 30}];

// var reformattedArray = kvArray.map(function(obj) {
//    var rObj = {};
//    rObj[obj.key] = obj.value;
//    return rObj;
// });

// // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// // kvArray is still:
// // [{key: 1, value: 10},
// //  {key: 2, value: 20},
// //  {key: 3, value: 30}]