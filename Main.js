class Calculator {
    // Метод додавання
    add(a, b) {
        return a + b;
    }

    // Метод віднімання
    subtract(a, b) {
        return a - b;
    }

    // Метод множення
    multiply(a, b) {
        return a * b;
    }

    // Метод ділення
    divide(a, b) {
        if (b === 0) {
            return "Ділення на нуль неможливе";
        }
        return a / b;
    }
}

// Приклад використання
const calc = new Calculator();

console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4
console.log(calc.divide(8, 0)); // Ділення на нуль неможливе
