
const circles = document.querySelectorAll('.circle');
let foundCount = 0;
const total = circles.length;

const counter = document.createElement('div');
counter.classList.add('counter');
counter.id = 'counter';
counter.textContent = `Знайдено ${foundCount} із ${total}`;
document.querySelector('.container').appendChild(counter);

// создаём объект Audio заранее
const clickSound = new Audio('assets/audio/щелчок.mp3');
const winSound = new Audio('assets/audio/вау.mp3');
const clickAudio = new Audio('assets/audio/упс.mp3');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    if (circle.classList.contains('found')) return;

    // проигрываем звук
    clickSound.currentTime = 0; // сброс на начало
    clickSound.play();

    const green = document.createElement('img');
    green.src = 'assets/img/green_circle.png';
    green.classList.add('green_circle');

    const computed = window.getComputedStyle(circle);
    green.style.top = computed.top;
    green.style.left = computed.left;

    circle.parentElement.appendChild(green);
    circle.style.display = 'none';
    circle.classList.add('found');

    foundCount++;
    counter.textContent = `Знайдено ${foundCount} із ${total}`;


if (foundCount === total) {
    setTimeout(() => {
        counter.textContent = 'Вітаю! Ви знайшли всі відмінності!';
    winSound.play();
  document.querySelectorAll('.green_circle').forEach(el => el.remove());
    }, 500);
}
  });
});


function resetGame() {
  // удалить все зелёные кружки
  document.querySelectorAll('.green_circle').forEach(el => el.remove());

  // показать все синие круги заново
  document.querySelectorAll('.circle').forEach(circle => {
    circle.style.display = 'block';
    circle.classList.remove('found');
  });

  // сбросить счётчик
  foundCount = 0;
  counter.textContent = `Знайдено ${foundCount} із ${total}`;
}
const resetBtn = document.createElement('button');
resetBtn.classList.add('reset-btn');
resetBtn.textContent = 'Почати знову';
document.querySelector('.container').appendChild(resetBtn);
resetBtn.addEventListener('click', resetGame);


const image2 = document.querySelector('.image_2');

image2.addEventListener('click', (event) => {
    clickAudio.currentTime = 0; // сброс на начало
    clickAudio.play();
        const loose = document.createElement('img');
        loose.classList.add('loose');
        loose.src = 'assets/img/крестик.png';

        loose.style.position = 'absolute';
        loose.style.left = event.clientX-25 + 'px';
        loose.style.top = event.clientY-25 + 'px';

        document.body.appendChild(loose);
       // удаление через 2 секунды
        setTimeout(() => {
            loose.remove();
        }, 1000);
});