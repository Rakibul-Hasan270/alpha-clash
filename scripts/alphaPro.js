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
    bgColor()
}