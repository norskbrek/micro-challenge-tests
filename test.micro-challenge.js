// 110 - Conditionals test
console.log(`Should say first is bigger: ${compareNumbers(7, 3)}`);
console.log(`Should say first is bigger: ${compareNumbers(-5, -9)}`);
console.log(`Should say second is bigger: ${compareNumbers(1.5, 4.5)}`);
console.log(`Should say first is bigger: ${compareNumbers(2.5, 2)}`);
console.log(`Should say second num is bigger: ${compareNumbers('4', '7')}`);
console.log(`Should say NaN: ${compareNumbers('apple', 'orange')}`);
console.log(`Should say NaN: ${compareNumbers('pickle', 5)}`);
console.log(`Should say NaN: ${compareNumbers(undefined, "6")}`);

// 120 - Arrays tests
console.log(`In firstAndLastSum: ${firstAndLastSum([1, 2, 3, 4, 5])}`);
console.log(`In firstAndLastSum: ${firstAndLastSum([6, 7, 8, 9, 10, 11, 12])}`);
console.log(`Testing for strings: ${firstAndLastSum(['one', 'two', 'three'])}`);
console.log(`Testing for mixed array: ${firstAndLastSum(['4', 2, 4, 1])}`);
console.log(`Testing for string to number conversion: ${firstAndLastSum(['5', '4', '7'])}`);
console.log(`Testing array with floats: ${firstAndLastSum([1.5, 3.5, 2.7])}`);
console.log(`Testing more floats (need 4.35): ${firstAndLastSum([2.777, 3.34, 1.568])}`);
console.log(`Testing float with string float (need 3.57): ${firstAndLastSum([1.23, 4, '2.34'])}`);
console.log(`Testing with two string floats (need 4.6): ${firstAndLastSum(['1.2', '2.3', '3.4'])}`);
