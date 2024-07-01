let score = 0;
const scoreText = document.querySelector('.score-text');
const mandarin = document.getElementById('mandarin');

mandarin.addEventListener('click', () => {
    score++;
    scoreText.textContent = score;
});