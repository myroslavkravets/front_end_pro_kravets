let isColorChanged = false; // Змінна для відстеження стану кольору

function toggleTextColor() {
    const textBlock = document.getElementById("text-block");

    if (isColorChanged) {
        textBlock.style.color = "black"; // Повертаємо попередній колір
    } else {
        textBlock.style.color = "blue"; // Змінюємо на новий колір
    }

    isColorChanged = !isColorChanged; // Змінюємо стан
}
