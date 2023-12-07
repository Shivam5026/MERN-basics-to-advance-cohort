// // Qno.1
// let firstname = "shivam";
// let age = 18;
// let isMarried = "true";

// console.log("This person is " +firstname+" and there age is "+age);

// // Qno.2
// if(isMarried == true){
//     console.log(firstname+" is married");
// }
// if(isMarried == false){
//     console.log(firstname+" is not married");
// }

// // Qno.3
// let answer = 0;

// for(let i = 0; i<=1000; i++){
//     answer = answer + i;
// }

// console.log(answer);

// Arrays in Js

// const ages = [21, 22, 23, 24, 25];
// const numberofPeople = ages;
// for(let i=0; i<numberofPeople.length; i++){
//     if(ages[i] % 2 == 0){
//         console.log(ages[i]);
//     }
// }

// const personArray = ["shivam", "vishal", "prem", "rita"];
// const genderArray = ["male","male","male", "female"]
// for(let i=0; i<personArray.length; i++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }
// }

// Objects in Js

// const user1 = {
//     firstName:"shivam",
//     gender: "male"
// }
// console.log(user1["gender"])

// const allUser = [{
//     firstName:"shivam",
//     gender:"male"
// }, {
//     firstName:"raman",
//     gender:"male"
// }, {
//     firstName:"rita",
//     gender:"female"
// }]

// for(let i = 0; i<allUser.length; i++){
//     if(allUser[i]["gender"] == "female"){
//         console.log(allUser[i]["firstName"]);
//     }
// }

// let numArray = ['a','b','c','d','e']
// let revArray = [];
// size = numArray.length;
// this method is not reversing the array,
//  its copying the elements in reverse order,
//  to a new array
// for(let i = size-1; i>=0; i--){
//     revArray[size-1-i] = numArray[i];
// }
// console.log(revArray);


// This code uses a swapping technique to reverse the array in-place. 
// The loop runs until the midpoint of the array, 
// and for each iteration, it swaps the elements
//  from the beginning and end of the array.
// let numArray = ['a', 'b', 'c', 'd', 'e','f'];
// let size = numArray.length;
// let midPoint = Math.floor(size / 2);
// for (let i = 0; i < midPoint; i++) {
    // Swap elements at positions i and size - 1 - i
//     let temp = numArray[i];
//     numArray[i] = numArray[size - 1 - i];
//     numArray[size - 1 - i] = temp;
// }
// console.log(numArray);


// If you want to keep the original array unchanged 
// and create a new reversed array
// let numArray = ['a', 'b', 'c', 'd', 'e'];
// let revArray = numArray.slice().reverse();
// // the slice method to create a shallow copy of the array
// console.log(revArray);

// BOUNTY QUESTION
// let sum = 0;
// for(let i=0; i<=10000000000; i++){
//     sum = sum + i;
// }
// console.log(sum);

// function sum(num1, num2, fnTocall) {
//     let result = num1 + num2;
//     fnTocall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }
// sum(1,2,displayResultPassive);

// You are only allowed to call one function after this
// How will you displayResult of a sum

// function calculateArithmetic(a, b, arithmeticOperation){
//     const ans = arithmeticOperation(a,b);
//     return ans;
// }

// function sum(a, b){
//     return a + b;
// }
// function sub(a, b){
//     return a - b;
// }
// function mul(a, b){
//     return a * b;
// }

// const value = calculateArithmetic(1, 2, mul);
// console.log(value);

// function greet(){
//     console.log("Hello world");
// }
// setInterval(greet, 1*3000);
// setTimeout(greet, 1*3000);

// let start = 30;
// function counter(){
//     console.log(start);

//     if(start === 0){
//         clearInterval(interval_ID)
//         console.log("countdown complete")
//     }
//     else{
//         start--;
//     }
// }
// const interval_ID = setInterval(counter,1*1000);

// function innerFunction() {
//     const endTime = performance.now();
//     const elapsedTime = endTime - startTime;

//     console.log(`Inner function executed after ${elapsedTime} milliseconds`);
// }

// const startTime = performance.now();

// setTimeout(innerFunction, 1000); // Assuming a delay of 2000 milliseconds (2 seconds)

// Putting it all together, split('').sort().join('') takes a string, 
// breaks it into an array of characters, 
// sorts those characters alphabetically, 
// and then joins them back into a single string.
// This can be useful in situations where you want to reorder the characters in a string alphabetically.

function isPalindrome(str) {
    const word = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(word);
    console.log(word.split('').reverse().join(''));

    return  word === word.split('').reverse().join('');
}
  const word = isPalindrome("Nan");
console.log(word);