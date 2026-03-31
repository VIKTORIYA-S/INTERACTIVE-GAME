


// const circles = document.querySelectorAll('.circle');
// let foundCount = 0;
// const total = circles.length;
// // const audio = new Audio('assets/sound/щелчок.mp3');

// //     audio.play();

// const positions = {
//   circle_1: { top: "30px", left: "140px" },
//   circle_2: { top: "40px", left: "350px" },
//   circle_3: { top: "80px", left: "55px" },
//   circle_4: { top: "150px", left: "110px" },
//   circle_5: { top: "145px", left: "445px" },
//   circle_6: { top: "260px", left: "62px" },
//   circle_7: { top: "160px", left: "290px" },
//   circle_8: { top: "300px", left: "390px" }
// };

// circles.forEach(circle => {
//   circle.addEventListener('click', () => {
//     if (circle.classList.contains('found')) return;

//     const green = document.createElement('img');
//     green.src = 'assets/img/green_circle.png';
//     green.classList.add('green_circle');

//     // Берём координаты из объекта positions
//     const pos = positions[circle.classList[1]];
//     green.style.top = pos.top;
//     green.style.left = pos.left;

//     circle.parentElement.appendChild(green);
//     circle.style.display = 'none';
//     circle.classList.add('found');

//     foundCount++;

//     if (foundCount === total) {
//   setTimeout(() => {
//     alert('Вітаю! Ви знайшли всі відмінності!');
//   }, 200); // задержка 200 мс
// }

//   });
// });



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

//     if (foundCount === total) {
//       setTimeout(() => {
//         alert('Вітаю! Ви знайшли всі відмінності!');
//         document.querySelectorAll('.green_circle').forEach(el => el.remove());
//   }, 200);
//     }

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


