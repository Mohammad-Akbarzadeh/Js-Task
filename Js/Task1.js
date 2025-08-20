// Task 1

// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function even(arr) {
//   return arr.filter((nums) => nums % 2 === 0);
// }
// console.log(even(newnums));

// Task 2

// const nastedarray = [1, [2, 3], [4, [5, 6]], [6, [7, 8, [6, 7, 81]]]];
// function arrayFlatten(arr) {
//   return arr.flat(Infinity);
// }
// console.log(arrayFlatten(nastedarray));

// Task 3

// function sortNumbers(arr) {
//     return arr.sort((a,b) => a - b)
// }

// console.log(sortNumbers([56,78,32,45,12,34,11,9,3,5,70]))

// Task 4

// const human = {
//   hight: "186cm",
//   gender: "male",
//   name: "arin",
//   city: "heven",
//   family: {
//     father: "god",
//     mother: "godes",
//     brother:'ali',
//     regin:{
//         city1:"tabriz",
//         city2:"mashhad"
//     }
//   },
// };

// function countProperties(obj) {
//   let count = 0;

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       count++;

//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         count += countProperties(obj[key]);
//       }
//     }
//   }
//   return count;
// }

// console.log(countProperties(human));

// Task 5

// const users = ["ali", "mohammad", "reza", "javad", "sara"];

// function transformArray(arr) {
//   return arr.map((str) => {
//     return { length: str.length };
//   });
// }
// const result = transformArray(users);
// console.log(result)


// Task 6

