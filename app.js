const inputMin = document.getElementById("input-min");
const inputMax = document.getElementById("input-max");
const resultElement = document.getElementById("result");
const generateBtn = document.getElementById("generate-bt");


function printRandomNumber(result) {

    resultElement.textContent = result;

}

function getRandomNumber(inpMin, inpMax) {
    
    const min = +Math.ceil(inpMin.value);
    const max = +Math.floor(inpMax.value);

    return Math.floor(Math.random() * (max - min + 1) + min);

}

generateBtn.onclick = function() {

    const result = getRandomNumber(inputMin, inputMax);
    printRandomNumber(result);

}

