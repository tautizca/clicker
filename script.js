window.addEventListener('load', () => {
    let scoreBlock = document.querySelector('.main-game .score');
    let score = 0;

    document.querySelector('.main-game .click-zone').addEventListener('click', () => {
        score+=10;
        scoreBlock.textContent = score;
    });

    document.querySelectorAll('.factory').forEach(fc => {
        let factory = {
            title: fc.querySelector('.title').innerText,
            cost: parseInt(fc.querySelector('.price').innerText),
            adds: parseInt(fc.querySelector('.adds').innerText)
        }

        console.debug(factory);
    });

});