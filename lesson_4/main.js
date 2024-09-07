let userName = prompt("Введіть ваше ім'я:");
console.log(`Hello, ${userName}! How are you?`);

let number = prompt("Введіть тризначне число:");

if (!/^\d{3}$/.test(number)) {
    console.log("Помилка: Ви ввели не тризначне число або не цифри!");
} else {

    let digit1 = number[0];
    let digit2 = number[1];
    let digit3 = number[2];


    if (digit1 === digit2 && digit2 === digit3) {
        console.log("Всі цифри однакові.");
    } else {
        console.log("Не всі цифри однакові.");
    }

    if (digit1 === digit2 || digit2 === digit3 || digit1 === digit3) {
        console.log("Серед цифр є однакові.");
    } else {
        console.log("Серед цифр немає однакових.");
    }
}

// Запитуємо дані у користувача
let birthYear = prompt("Введіть ваш рік народження:");
if (birthYear === null) {
    console.log("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    let city = prompt("В якому місті ви живете?");
    if (city === null) {
        console.log("Шкода, що Ви не захотіли ввести ваше місто.");
    } else {
        let sport = prompt("Ваш улюблений вид спорту?");
        if (sport === null) {
            console.log("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        } else {

            let currentYear = new Date().getFullYear();
            let age = currentYear - birthYear;

            let cityMessage;
            switch (city.toLowerCase()) {
                case "київ":
                    cityMessage = "Ти живеш у столиці України!";
                    break;
                case "лондон":
                    cityMessage = "Ти живеш у столиці Великобританії!";
                    break;
                case "вашингтон":
                    cityMessage = "Ти живеш у столиці США!";
                    break;
                default:
                    cityMessage = `Ти живеш у місті ${city}.`;
                    break;
            }

            let sportMessage;
            switch (sport.toLowerCase()) {
                case "футбол":
                    sportMessage = "Круто! Хочеш стати як Ліонель Мессі?";
                    break;
                case "баскетбол":
                    sportMessage = "Круто! Хочеш стати як Майкл Джордан?";
                    break;
                case "теніс":
                    sportMessage = "Круто! Хочеш стати як Роджер Федерер?";
                    break;
                default:
                    sportMessage = `Твій улюблений вид спорту - ${sport}.`;
                    break;
            }

            console.log(`Твій вік: ${age}`);
            console.log(cityMessage);
            console.log(sportMessage);
        }
    }
}

let numOrStr = prompt('input number or string');
    console.log(numOrStr);

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
