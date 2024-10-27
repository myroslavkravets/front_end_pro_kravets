function validateForm() {
    // Очищуємо попередні помилки
    document.getElementById('nameError').textContent = "";
    document.getElementById('messageError').textContent = "";
    document.getElementById('phoneError').textContent = "";
    document.getElementById('emailError').textContent = "";

    // Отримуємо значення полів
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    let isValid = true;

    // Валідація поля Name
    if (name === "") {
        document.getElementById('nameError').textContent = "Name is required";
        isValid = false;
    }

    // Валідація поля Message
    if (message.length < 5) {
        document.getElementById('messageError').textContent = "Message must be at least 5 characters";
        isValid = false;
    }

    // Валідація поля Phone number
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = "Phone number must start with +380 and be followed by 9 digits";
        isValid = false;
    }

    // Валідація поля Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Email must contain @ and a dot (.)";
        isValid = false;
    }

    // Якщо всі поля валідні, виводимо дані в консоль
    if (isValid) {
        console.log("Name:", name);
        console.log("Message:", message);
        console.log("Phone number:", phone);
        console.log("Email:", email);
        alert("Message sent successfully!");
    }
}