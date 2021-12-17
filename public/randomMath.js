// get html elements to display math
const fieldForNr1 = document.querySelector('.field1');
const fieldForNr2 = document.querySelector('.field2');
const fieldForOperator = document.querySelector('.operator');
const fieldForAnswer = document.querySelector('.answer');
let givenAnswer = document.querySelector('.givenAnswer');

const confirmAnswerBtn = document.querySelector('.confirmBtn');

function createRandomSum(chosenTable, chosenOperator){
    let randomNr1 = Math.round(Math.random() * chosenTable);
    let randomNr2 = Math.round(Math.random() * chosenTable);
    let answer = eval(`${randomNr1} ${chosenOperator} ${randomNr2}`);
    // display
    fieldForNr1.textContent = randomNr1;
    fieldForNr2.textContent = randomNr2;
    fieldForOperator.textContent = chosenOperator;
    return answer;
}

confirmAnswerBtn.addEventListener('click', function() {
    if(givenAnswer.value == answerToSum){
        fieldForAnswer.textContent = 'thats correct!';
    }
    else {
        fieldForAnswer.textContent = 'not yet, please try again';
    }
})


let answerToSum = createRandomSum(8, '-');