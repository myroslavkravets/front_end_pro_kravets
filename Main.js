const buttonContainer = document.getElementById('buttonContainer');
const message = document.getElementById('message');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
        const buttonName = event.target.getAttribute('data-button');
        message.textContent = `Клікнуто на кнопку: ${buttonName}`;
    }
});