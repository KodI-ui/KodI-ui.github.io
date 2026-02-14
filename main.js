const box = document.getElementById('box');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const img = document.getElementById('bear1');
const text = document.getElementById('text');

const NO_BTN_SIZE = {width: 80, height: 30};

function moveNoButton() {
    const boxRect = box.getBoundingClientRect();

    // Визначаємо діапазон, у який можна помістити кнопку
    const maxLeft = boxRect.width  - NO_BTN_SIZE.width;
    const maxTop  = boxRect.height - NO_BTN_SIZE.height;

    // Випадкові координати
    const newLeft = Math.random() * maxLeft;
    const newTop  = Math.random() * maxTop;

    // Переміщаємо кнопку
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top  = `${newTop}px`;
}
// Коли курсор наближається до кнопки – перемістити її
noBtn.addEventListener('mouseenter', moveNoButton);

// Додатковий захист: якщо користувач спробує клікнути (наприклад, швидко), теж перемістимо
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('mousemove', moveNoButton);

// Обробка кліку по кнопці YES
yesBtn.addEventListener('click', () => {
    // Нове зображення (заміни шлях на те, яке тобі треба)
    img.src = 'Image/happy-bear.png';
    img.alt = 'Happy Bear';

    // Новий текст
    text.textContent = 'YEAH-YEAH! 🎉';
    
    // Можна ще приховати кнопку NO, бо тепер вона вже не потрібна
    noBtn.style.display = 'none';
});