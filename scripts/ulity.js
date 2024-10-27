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

function removeBgColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return elementText;
}

// if else block-----
function setTextElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementByIdParseint(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
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