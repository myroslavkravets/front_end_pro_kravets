const apiKey = 'b7a62f2d277e7fffc28b4d2918aa87ac';
const city = 'Dnipro';

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=b7a62f2d277e7fffc28b4d2918aa87ac&units=metric&lang=uka`);
        if (!response.ok) throw new Error('Не вдалося отримати дані');

        const data = await response.json();

        document.getElementById('temperature').innerText = `Температура: ${data.main.temp} °C`;
        document.getElementById('humidity').innerText = `Вологість: ${data.main.humidity} %`;
        document.getElementById('pressure').innerText = `Тиск: ${data.main.pressure} гПа`;
        document.getElementById('wind').innerText = `Вітер: ${data.wind.speed} м/с`;
    } catch (error) {
        console.error('Помилка:', error);
        document.getElementById('weather-info').innerText = 'Не вдалося завантажити дані.';
    }
}

document.getElementById('update-weather').addEventListener('click', getWeather);

window.onload = getWeather;
