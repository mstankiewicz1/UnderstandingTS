"use strict";
// const userName = 'Max';
// // userName = 'Maxymilian';
// let age = 30;
// age = 29;
// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// };
// if(age > 20) {
//   var isOld = true;
// };
// console.log(isOld);
// const add = (a: number, b: number = 1) => {
//   return a + b;
// };
// console.log(add(5));
// const printOutput: (a: number | string) => void = output =>  console.log(output);
// const button = document.querySelector('button');
// if(button) {
//   button.addEventListener('click', (event) => console.log(event));
// };
// printOutput(add(2,7));
const hobbies = ['Sports', 'Cooking'];
console.log(hobbies[0]);
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    firstName: 'Max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
// console.log(copiedPerson);
const add = (...numbers) => {
    let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person;
console.log(userName, age, person);
