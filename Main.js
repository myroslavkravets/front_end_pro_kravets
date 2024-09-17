// ЗАВДАННЯ 1
function removeChars(text, charsToRemove) {
    for (let char of charsToRemove)
    { text = text.replace(new RegExp(char, 'g'), '');
    }
    return text;
}
let text = "Hello World";
let charsToRemove = ['l', 'd'];
let result = removeChars(text, charsToRemove);
console.log(result);
// ЗАВДАННЯ 2
function averageOfNumbers(arr) {
    const numbers = arr.filter(item => typeof item === 'number');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
const mixedArray = [1, 'hello', true, 5, null, 10, 'world', 3];
console.log(averageOfNumbers(mixedArray));
// ЗАВДАННЯ 3
function removeElement(array, item) {
    return array.filter(element => element !== item);
}
const array = [1, 3, 4, 6, 2, 5, 7];
const newArray = removeElement(array, 4);
console.log(newArray);


