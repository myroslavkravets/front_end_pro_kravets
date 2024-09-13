// Завдання 1
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// // Завдання 2
const rate = 26; // Курс долара (1 долар = 26 гривень)
for (let dollars = 10; dollars <= 100; dollars += 10) {
    let hryvnias = dollars * rate;
    console.log(`${dollars} доларів коштує ${hryvnias} гривень`);
}
// // Завдання 3
const N = +prompt("Введіть ціле число:");
let output = ``;
if (N >= 1) {
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            output += i + ' ';
        }
    }
}
console.log(output.trim());
// // Завдання 4
const number = +prompt("Введіть ціле число:");
let isPrime = true;
if (number <= 1) {
    isPrime = false;
} else {
    // Перевіряємо всі числа від 2 до number - 1
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(`${number} є простим числом.`);
} else {
    console.log(`${number} не є простим числом.`);
}