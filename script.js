window.addEventListener('load', () => {
    let scoreBlock = document.querySelector('.main-game .score');
    let score = 0;
    let ownedFactory = [];

    document.querySelector('.main-game .click-zone').addEventListener('click', () => {
        score+=10;
        scoreBlock.textContent = score;
    });

    document.querySelectorAll('.factory').forEach(fc => {
        let factory = {
            title: fc.querySelector('.title').innerText,
            cost: parseInt(fc.querySelector('.price').innerText),
            adds: parseInt(fc.querySelector('.adds').innerText),
            count: parseInt(fc.querySelector('.count').innerText.slice(1, -1)),
            button: fc.querySelector('button'),
        }

        factory.button.onclick = () => {
            if (score >= factory.cost) {
                score -= factory.cost;
                factory.count++;
                scoreBlock.textContent = score;
                fc.querySelector('.count').innerText = `(${factory.count})`;
            }
        }

        ownedFactory.push(factory);
    });

    console.debug(ownedFactory);
});