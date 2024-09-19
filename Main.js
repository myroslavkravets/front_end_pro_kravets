// Завдання 1
function sum() {
    let total = 0;
    return function(value) {
        total += value;
        return total;
    };
}
const add = sum();
console.log(add(4));  // 4
console.log(add(6));  // 10
console.log(add(10)); // 20
console.log(add(7));  // 27
// Завдання 2
function multiply(a) {
    return function(b) {
        return a * b;
    };
}
const result = multiply(5)(2);
console.log(result);

// Завдання 3
function askNumber() {
    let userInput;
    for (let i = 0; i < 10; i++) {
        userInput = +prompt("Введіть число більше 100:");
        if (userInput > 100) {
            break;
        }
        if (i === 9) {
            console.log("Досягнуто максимальну кількість ітерацій.");
        }
    }

    console.log(`Останнє введене значення: ${userInput}`);
}
askNumber();
