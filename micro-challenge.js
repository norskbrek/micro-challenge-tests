console.log('This is...the micro challenge file...');


// 100 - Addition
console.log('');
console.log('First - 100 - Addition: ');

function addNumbers(firstNum, secondNum){
  return firstNum + secondNum;
} // end addNumbers

console.log('In addNumbers: ', addNumbers(2, 3));
console.log('In addNumbers: ', addNumbers(2, 7));


// 110 - Conditional
console.log('');
console.log('Second - 110 - Conditional: ');

function compareNumbers(firstNum, secondNum){
  if (isNaN(firstNum) || isNaN(secondNum)) {
    return 'One or both of these is not a number!';
  } else if (firstNum > secondNum){
    return 'The first number is bigger!';
  } else if (secondNum > firstNum){
    return 'The second number is bigger!';
  } else {
    return 'The numbers are the same!';
  }
} // end compareNumbers

console.log(`Should say first is bigger: ${compareNumbers(7,3)}`);
console.log(`Should say first is bigger: ${compareNumbers(-5,-9)}`);
console.log(`Should say second is bigger: ${compareNumbers(1.5, 4.5)}`);
console.log(`Should say first is bigger: ${compareNumbers(2.5, 2)}`);
console.log(`Should say second num is bigger: ${compareNumbers('4','7')}`);
console.log(`Should say NaN: ${compareNumbers('apple', 'orange')}`);
console.log(`Should say NaN: ${compareNumbers('pickle', 5)}`);
console.log(`Should say NaN: ${compareNumbers(undefined, "6")}`);


// 120 - Arrays
console.log('');
console.log('Third - 120 - Arrays: ');

function firstAndLastSum(myArray){
  firstNum = myArray.shift();
  lastNum = myArray.pop();

  if (isNaN(firstNum) || isNaN(lastNum)) {
    return "One of both is not a number.";
  }

  numSum = parseFloat(firstNum) + parseFloat(lastNum);
  return numSum;
} // end firstAndLastSum

console.log(`In firstAndLastSum: ${firstAndLastSum([1, 2, 3, 4, 5])}`);
console.log(`In firstAndLastSum: ${firstAndLastSum([6, 7, 8, 9, 10, 11, 12])}`);
console.log(`Testing for strings: ${firstAndLastSum(['one', 'two', 'three'])}`);
console.log(`Testing for mixed array: ${firstAndLastSum(['4', 2, 4, 1])}`);
console.log(`Testing for string to number conversion: ${firstAndLastSum(['5', '4', '7'])}`);
console.log(`Testing array with floats: ${firstAndLastSum([1.5, 3.5, 2.7])}`);
console.log(`Testing more floats (need 4.35): ${firstAndLastSum([2.777, 3.34, 1.568])}`);
console.log(`Testing float with string float (need 3.57): ${firstAndLastSum([1.23, 4, '2.34'])}`);
console.log(`Testing with two string floats (need 4.6): ${firstAndLastSum(['1.2', '2.3', '3.4'])}`);


/*
// 130 - Loops, Arrays, Concatenation
console.log('');
console.log('Fourth - 130 - Loops, Arrays, and Concatenation: ');

function selectedWords(array, number){
  newArray = array.slice(number);
  return newArray.join(' ');
} // end selectedWords

console.log('In selectedWords: ', selectedWords(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3));
console.log('In selectedWords: ', selectedWords(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2));


// 140 - Loops and Two-Dimensional Arrays
console.log('');
console.log('Fifth - 140 - Loops and Two-Dimensional Arrays: ');

function sumNestedArray(nestedArray){
  totalArraySum = 0;
  flattenedArray = nestedArray.flat();

  for (let i = 0; i < flattenedArray.length; i++){
    totalArraySum += flattenedArray[i];
  }

  return totalArraySum;
} // end sumNestedArray

console.log('In sumNestedArray: ', sumNestedArray([ [1, 2], [3, 4, 5] ])); // 15
console.log('In sumNestedArray: ', sumNestedArray([ [1, 2], [3, 4, 5], [6] ])); // 21

// 150 - Loops, Array of Objects
console.log('');
console.log('Sixth - 150 - Loops and Arrays of Objects: ');

function experienceSum(employeeArray){
  let totalExpSum = 0;

  // iterate over array,
  // output yearsOfExperience properties,
  // add them all together

  for (let i = 0; i < employeeArray.length; i++){
    totalExpSum += employeeArray[i].yearsOfExperience;
  }

  return totalExpSum;
}


console.log('In experienceSum: ', experienceSum([
    { name: "Tony", yearsOfExperience: 10 },
    { name: "Carla", yearsOfExperience: 4 }
])); // => 14

console.log('In experienceSum: ', experienceSum([
    { name: "Tony", yearsOfExperience: 10 },
    { name: "Carla", yearsOfExperience: 4 },
    { name: "Kris", yearsOfExperience: 14 }
])); // => 28


/* Some testing stuff down here...
array = [
    { name: "Tony", yearsOfExperience: 10 },
    { name: "Carla", yearsOfExperience: 4 },
    { name: "Kris", yearsOfExperience: 14 }
]

console.log('Doing this: ', array[1].yearsOfExperience);
console.log(array.length);
console.log(array[0].yearsOfExperience);
*/
