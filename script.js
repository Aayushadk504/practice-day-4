document.addEventListener('DOMContentLoaded', function () {
    const circle = document.getElementById('circle');
    const scoreDisplay = document.getElementById('score');
    const timeDisplay = document.getElementById('time');
    const startBtn = document.getElementById('start-btn');
    let score = 0;
    let time = 30;
    let interval;
    let gameRunning = false;

    function getRandomPosition() {
        const container = document.querySelector('.game-container');
        const maxX = container.offsetWidth - circle.offsetWidth;
        const maxY = container.offsetHeight - circle.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        return { x: randomX, y: randomY };
    }

    function moveCircle() {
        const { x, y } = getRandomPosition();
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    }

    function startGame() {
        score = 0;
        time = 30;
        scoreDisplay.textContent = score;
        timeDisplay.textContent = time;
        startBtn.disabled = true;
        circle.style.display = 'block';
        gameRunning = true;
        interval = setInterval(() => {
            time--;
            timeDisplay.textContent = time;
            if (time <= 0) {
                endGame();
            }
            moveCircle();
        }, 1000);
    }

    function endGame() {
        clearInterval(interval);
        circle.style.display = 'none';
        startBtn.disabled = false;
        gameRunning = false;
        alert(`Game Over! Your final score is ${score}.`);
    }

    circle.addEventListener('click', () => {
        if (gameRunning) {
            score++;
            scoreDisplay.textContent = score;
            moveCircle();
        }
    });

    startBtn.addEventListener('click', startGame);
});
