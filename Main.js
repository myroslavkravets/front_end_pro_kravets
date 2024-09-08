let userName = prompt("Введіть своє ім'я:");
console.log(`Hello, ${userName}! How are you?`);
// Запрашиваем у пользователя тризначное число
let number = prompt("Введіть тризначне число:");

// Преобразуем введенное значение в строку, чтобы легко работать с отдельными цифрами
let firstDigit = number[0];
let secondDigit = number[1];
let thirdDigit = number[2];

// Проверяем, чи всі цифри однакові
if (firstDigit === secondDigit && secondDigit === thirdDigit) {
    console.log("Всі цифри однакові.");
} else {
    console.log("Не всі цифри однакові.");
}

// Проверяем, чи є серед цифр однакові
if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
    console.log("Є однакові цифри серед чисел.");
} else {
    console.log("Всі цифри різні.");
}
// Запитуємо у користувача рік народження
let birthYear = prompt("Введіть свій рік народження:");

// Запитуємо у користувача місто проживання
let city = prompt("В якому місті ви живете?");

// Запитуємо у користувача улюблений вид спорту
let sport = prompt("Ваш улюблений вид спорту?");

// Вираховуємо вік користувача
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

// Визначаємо повідомлення про місто
let cityMessage;
switch (city.toLowerCase()) {
    case "київ":
        cityMessage = "Ти живеш у столиці України.";
        break;
    case "вашингтон":
        cityMessage = "Ти живеш у столиці США.";
        break;
    case "лондон":
        cityMessage = "Ти живеш у столиці Великобританії.";
        break;
    default:
        cityMessage = `Ти живеш у місті ${city}.`;
}

// Визначаємо повідомлення про спорт
let sportMessage;
switch (sport.toLowerCase()) {
    case "футбол":
        sportMessage = "Круто! Хочеш стати як Ліонель Мессі?";
        break;
    case "бокс":
        sportMessage = "Круто! Хочеш стати як Майк Тайсон?";
        break;
    case "баскетбол":
        sportMessage = "Круто! Хочеш стати як Майкл Джордан?";
        break;
    default:
        sportMessage = `Ваш улюблений вид спорту - ${sport}.`;
}

// Виводимо усі повідомлення у консоль
console.log(`Ваш вік: ${age}`);
console.log(cityMessage);
console.log(sportMessage);
let numOrStr = prompt('input number or string');
console.log(numOrStr);

// Видаляємо зайві пробіли на початку та кінці введеного значення
switch (true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}