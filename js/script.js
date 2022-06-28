"use strict";
// const yearOfBirth = 2007;
// console.log(yearOfBirth);

// const COLOR_TEAL = "#009688";
// const LOGIN_SUCCESS_MESSAGE = "Ласкаво просимо!";
// console.log(LOGIN_SUCCESS_MESSAGE);

// let age = 20;
// age = 25;
// console.log(age);

// Number - цілі числа і числа з плаваючою комою (крапкою).
// const ages = 20;
// const points = 15.8;

// String - рядки, послідовність з нуля або більше символів. Рядок починається і закінчується одинарними ', або подвійними лапками ".

// const description = "JavaSript для початківців";

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

const message = "JavaScript is awesome!";
alert(message);

const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);

const hotelName = prompt("Please enter desired hotel name");
console.log(hotelName);

function getExtremeElements(array) {
  // Change code below this line

  const firstElement = array[0];
  const lastElement = array.length - 1;
  return [firstElement, array[lastElement]];

  // Change code above this line
}
getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"]);
getExtremeElements(["apple", "peach", "pear", "banana"]);
