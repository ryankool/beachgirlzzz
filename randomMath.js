// create random math with a self chosen (spoken) operator (min, plus, divide, multiply)

// get html elements to display math
const fieldForNr1 = document.querySelector('.field1');
const fieldForNr2 = document.querySelector('.field2');
const fieldForAnswer = document.querySelector('.answer');
let givenAnswer = document.querySelector('.givenAnswer');

const confirmAnswerBtn = document.querySelector('.confirmBtn');

// calc random plus
function createAddPlus(chosenTable){
    let randomNr1 = Math.round(Math.random() * chosenTable); // replace 10 with players chosing value
    let randomNr2 = Math.round(Math.random() * chosenTable);
    let answer = randomNr1 + randomNr2;
    // display
    fieldForNr1.textContent = randomNr1;
    fieldForNr2.textContent = randomNr2;
    return answer;
}

// calc random min
function createAddMin(chosenTable){
    let randomNr1 = Math.round(Math.random() * chosenTable); // replace 10 with players chosing value
    let randomNr2 = Math.round(Math.random() * chosenTable);
    let answer = randomNr1 - randomNr2;
    // display
    fieldForNr1.textContent = randomNr1;
    fieldForNr2.textContent = randomNr2;
    return answer;
}

// calc random divide
function createAddDivide(chosenTable){
    let randomNr1 = Math.round(Math.random() * chosenTable); // replace 10 with players chosing value
    let randomNr2 = Math.round(Math.random() * chosenTable);
    let answer = randomNr1 / randomNr2;
    // display
    fieldForNr1.textContent = randomNr1;
    fieldForNr2.textContent = randomNr2;
    return answer;
}

// calc random multiply
function createAddMultiply(chosenTable){
    let randomNr1 = Math.round(Math.random() * chosenTable); // replace 10 with players chosing value
    let randomNr2 = Math.round(Math.random() * chosenTable);
    let answer = randomNr1 * randomNr2;
    // display
    fieldForNr1.textContent = randomNr1;
    fieldForNr2.textContent = randomNr2;
    return answer;
}

let answerToPlus = createAddPlus(8);
let answerToMin = createAddMin(8);
let answerToDivide = createAddDivide(8);
let answerToMultiply = createAddMultiply(8);

confirmAnswerBtn.addEventListener('click', function() {
    if(givenAnswer.value == answerToPlus){
        console.log('thats right!');
    }
    else {
        console.log('thats wrong');
    }
})

