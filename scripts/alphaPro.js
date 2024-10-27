function keyupFunction(even) {
    const gamerPress = even.key;

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

        if(restLife===0){
            
        }
    }

    // console.log(gamerPress, alphabet)
}

document.addEventListener('keyup', keyupFunction)

function continueGame() {
    const alphabet = randomAlphabet();
    setBgColor(alphabet);

    const showAlphabet = document.getElementById('show-alphabet');
    showAlphabet.innerText = alphabet;
}

function play() {
    addClassList('home');
    removeClassList('play-ground');
    continueGame();
}