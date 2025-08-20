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

// const fruts = ["apple", "banana", "apple", "orange", "banana", "apple"];

// function frequencyCounterel(arr) {
//   let result = {};

//   for (let item of arr) {
//     if (result[item]) {
//       result[item]++;
//     } else {
//       result[item] = 1;
//     }
//   }

//   return result;
// }

// console.log(frequencyCounterel(fruts));


// Task 7

// function convertTo12Hour(time24) {

//   let [hour, minute] = time24.split(":").map(Number);

//   let period = hour >= 12 ? "PM" : "AM";

//   if (hour === 0) {
//   } else if (hour > 12) {
//   }

//   return `${hour}:${minute.toString().padStart(2, "0")} ${period}`;
// }

// console.log(convertTo12Hour("00:15")); 
// console.log(convertTo12Hour("12:00")); 
// console.log(convertTo12Hour("18:45")); 
// console.log(convertTo12Hour("23:59")); 


// Task 8


// function isWithinRange(number, min, max) {
//   return number >= min && number <= max;
// }

// console.log(isWithinRange(15, 10, 20)); 
// console.log(isWithinRange(5, 10, 20));  
// console.log(isWithinRange(20, 10, 20)); 
// console.log(isWithinRange(9, 9, 15));   
// console.log(isWithinRange(16, 9, 15));  


// Task 9

// function calculateBMI(weight, height) {

//   let bmi = weight / (height * height);

//   let category;
//   if (bmi < 18.5) {
//     category = "Underweight";
//   } else if (bmi < 25) {
//     category = "Normal weight";
//   } else if (bmi < 30) {
//     category = "Overweight";
//   } else {
//     category = "Obesity";
//   }


//   return `Your BMI is ${bmi.toFixed(1)} (${category})`;
// }


// console.log(calculateBMI(86, 1.86));


// Task 10

// function containsVowel(str) {
//   str = str.toLowerCase();

//   for (let char of str) {
//     if ("aeiou".includes(char)) {
//       return true; 
//     }
//   }

//   return false; 
// }

// console.log(containsVowel("Mohi"));
