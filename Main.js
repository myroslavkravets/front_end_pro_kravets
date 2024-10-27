let url = '';

function setUrl() {
    url = prompt("Введіть посилання:");
    if (url) {
        alert("Посилання збережено!");
    }
}

function redirectToUrl() {
    if (url) {
        window.location.href = url;
    } else {
        alert("Спочатку введіть посилання!");
    }
}