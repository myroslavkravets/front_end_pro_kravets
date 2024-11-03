class BankAccount {
    // Конструктор класу з властивістю balance
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    // Метод для отримання балансу
    getBalance() {
        return this.balance;
    }

    // Метод для внесення грошей
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Сума внеску повинна бути більше нуля.");
        }
    }

    // Метод для зняття грошей
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else if (amount > this.balance) {
            console.log("Недостатньо коштів на рахунку.");
        } else {
            console.log("Сума зняття повинна бути більше нуля.");
        }
    }
}

// Створення екземпляру класу BankAccount
const account1 = new BankAccount(1000);

// Виклик методів класу та перевірка балансу
console.log(account1.getBalance()); // 1000

account1.deposit(500);
console.log(account1.getBalance()); // 1500

account1.withdraw(200);
console.log(account1.getBalance()); // 1300
