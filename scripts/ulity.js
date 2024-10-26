function removeClassList(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addClassList(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function setBgColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function randomAlphabet() {
    const element = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = element.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(alphabet,index)
    return alphabet;
}