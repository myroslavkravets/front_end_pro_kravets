// Створити репозиторій із файлом index.html.
// Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. Використовуючи оператор typeof та console.log
    let first = 5;
    console.log(Math.round(first));

    let result = prompt("How old r u?");
    console.log(typeof result);
    let stringToNumber = parseInt(result);
    console.log(typeof stringToNumber);
    console.log(parseInt(result));
    console.log(+result);

    // Отримуємо три рядки від користувача
    let string1 = prompt("Введіть перший рядок:");
    let string2 = prompt("Введіть другий рядок:");
    let string3 = prompt("Введіть третій рядок:");

    // Виводимо їх у довільному порядку за допомогою рядків
    console.log(`${string2}, ${string3}, ${string1}`);

    // Отримуємо п'ятизначне число від користувача
    let number = prompt("Введіть п'ятизначне число:");

    // Перетворюємо число на рядок, розділяємо його по символах і з'єднуємо через пробіл
    let digits = number.split('').join(' ');

    // Виводимо результат у консоль
    console.log(digits);