// Початковий час у секундах (наприклад, 85 секунд)
let timeInSeconds = 85;

function startTimer() {
    const timerElement = document.getElementById('timer');

    // Функція для оновлення часу на екрані
    function updateTimer() {
        // Розрахунок хвилин та секунд
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        // Форматування часу у форматі мм:сс
        timerElement.textContent =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Зупинка таймера, якщо час закінчився
        if (timeInSeconds <= 0) {
            clearInterval(timerInterval);
        } else {
            timeInSeconds--;
        }
    }

    // Запускаємо таймер з інтервалом у 1 секунду
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Оновлюємо відразу, щоб не було затримки
}

// Запускаємо таймер
startTimer();