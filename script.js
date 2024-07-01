let score = 0;
const scoreText = document.querySelector('.score-text');
const mandarin = document.getElementById('mandarin');

mandarin.addEventListener('click', () => {
    score++;
    scoreText.textContent = score;

const increment = document.createElement('div');
increment.textContent = '+1'
increment.classList.add('increment');
document.body.appendChild(increment);

increment.style.left = `${event.clientX}px`;
increment.style.top = `${event.clientY}px`;

increment.addEventListener('animationend', () => {
    increment.remove();
});

});