// завдання 1
let user = {
    name: "Олександр",
    age: 30,
    location: "Київ",
    occupation: "Програміст",

    // Метод для отримання інформації про користувача
    getUserInfo: function() {
        return `Ім'я: ${this.name}, Вік: ${this.age}, Місце проживання: ${this.location}, Професія: ${this.occupation}`;
    },

    // Метод для відображення інформації про користувача
    displayUserInfo: function() {
        console.log(this.getUserInfo());
    }
};

// Викликаємо метод для відображення даних
user.displayUserInfo();

// завдання 2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Використовуємо метод filter для отримання лише парних чисел
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6, 8, 10]

// завдання 3
let contactBook = {
    // Властивість з масивом об'єктів (контактів)
    contacts: [
        { name: "Іван", phone: "380501234567", email: "ivan@example.com" },
        { name: "Марія", phone: "380671234567", email: "maria@example.com" },
        { name: "Петро", phone: "380931234567", email: "petro@example.com" }
    ],

    // Метод для пошуку контакту за ім'ям
    findContact: function(name) {
        return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) || "Контакт не знайдено";
    },

    // Метод для додавання нового контакту
    addContact: function(name, phone, email) {
        // Перевіряємо, чи контакт з таким ім'ям вже існує
        let existingContact = this.findContact(name);

        if (existingContact === "Контакт не знайдено") {
            this.contacts.push({ name: name, phone: phone, email: email });
            console.log(`Контакт з ім'ям ${name} додано.`);
        } else {
            console.log(`Контакт з ім'ям ${name} вже існує.`);
        }
    }
};

// Приклад пошуку контакту
console.log(contactBook.findContact("Марія"));
// { name: "Марія", phone: "380671234567", email: "maria@example.com" }

// Приклад додавання нового контакту
contactBook.addContact("Олександр", "380661234567", "oleksandr@example.com");

// Перевіряємо новий контакт
console.log(contactBook.findContact("Олександр"));
// { name: "Олександр", phone: "380661234567", email: "oleksandr@example.com" }


