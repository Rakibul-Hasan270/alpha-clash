function keyupFunction(even) {
    const gamerPress = even.key;

    // stop the game 
    // if (gamerPress === 'Escape') {
    //     gameOver();
    // }

    const currentAlphabetElement = document.getElementById('show-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const alphabet = currentAlphabet.toLowerCase();

    if (alphabet === gamerPress) {
        const currentScore = getElementByIdParseint('current-score');
        const newScore = currentScore + 1;
        setTextElementById('current-score', newScore);

        continueGame();
        removeBgColor(alphabet);
    }
    else {
        const currentLife = getElementByIdParseint('current-life');
        const restLife = currentLife - 1;
        setTextElementById('current-life', restLife);

        if (restLife === 0) {
            gameOver();
        }
    }

    // console.log(gamerPress, alphabet)
}

document.addEventListener('keyup', keyupFunction);

function continueGame() {
    const alphabet = randomAlphabet();
    setBgColor(alphabet);

    const showAlphabet = document.getElementById('show-alphabet');
    showAlphabet.innerText = alphabet;
}

function play() {
    addClassList('home');
    addClassList('score');
    removeClassList('play-ground');

    setTextElementById('current-life', 5);
    setTextElementById('current-score', 0);

    continueGame();
}

function gameOver() {
    addClassList('play-ground');
    removeClassList('score');

    const score = getElementByIdParseint('current-score');
    setTextElementById('final-score', score);

    const currentAlphabet = getElementTextById('show-alphabet');
    removeBgColor(currentAlphabet);
}