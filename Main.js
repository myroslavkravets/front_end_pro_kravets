// Задаємо розмір таблиці
const size = 10;

// Створюємо функцію для генерації таблиці Піфагора
function generateMultiplicationTable(size) {
    // Починаємо створювати HTML для таблиці
    let tableHTML = "<table border='1' cellpadding='5'>";

    // Перший рядок заголовків стовпців
    tableHTML += "<tr><th></th>";
    for (let i = 1; i <= size; i++) {
        tableHTML += `<th>${i}</th>`;
    }
    tableHTML += "</tr>";

    // Додаємо рядки таблиці
    for (let i = 1; i <= size; i++) {
        tableHTML += `<tr><th>${i}</th>`; // Заголовок рядка
        for (let j = 1; j <= size; j++) {
            tableHTML += `<td>${i * j}</td>`; // Значення добутку
        }
        tableHTML += "</tr>";
    }

    tableHTML += "</table>";
    return tableHTML;
}


document.body.innerHTML = generateMultiplicationTable(size);



