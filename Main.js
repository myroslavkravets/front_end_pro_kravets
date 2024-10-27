function displayRandomImage() {
    // Масив з іменами файлів зображень
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

    // Випадковий індекс для вибору зображення
    const randomIndex = Math.floor(Math.random() * images.length);

    // Встановлюємо випадкове зображення
    const randomImage = document.getElementById("randomImage");
    randomImage.src = "images/" + images[randomIndex]; // Вкажіть шлях до папки з зображеннями
}