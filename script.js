window.addEventListener('load', () => {
    let scoreBlock = document.querySelector('.main-game .score');
    let score = 0;

    document.querySelector('.main-game .click-zone').addEventListener('click', () => {
        score+=10;
        scoreBlock.textContent = score;
    });

});