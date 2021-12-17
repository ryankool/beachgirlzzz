window.operator = 'plus'

const operators = {
  'plus': '+',
  'min': '-',
  'keer': '*',
  'delen': '/'
}

const makeSum = () => {
  const fieldForNr1 = document.querySelector('beach-math').shadowRoot.querySelector('.field1');
  const fieldForNr2 = document.querySelector('beach-math').shadowRoot.querySelector('.field2');
  const fieldForOperator = document.querySelector('beach-math').shadowRoot.querySelector('.operator');
  const fieldForAnswer = document.querySelector('beach-math').shadowRoot.querySelector('.answer');
  let givenAnswer = document.querySelector('beach-math').shadowRoot.querySelector('.givenAnswer');

  const confirmAnswerBtn = document.querySelector('beach-math').shadowRoot.querySelector('.confirmBtn');

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

  console.log('OPERATOR', operators[window.operator])
  let answerToSum = createRandomSum(8, operators[window.operator]);
}

const pages = {
    name: {
        isVisible: true
    },
    choose_math: {
        isVisible: false
    },
    math: {
        isVisible: false
    },
    success_screen: {
        isVisible: false
    }
}

for (const [key, value] of Object.entries(pages)) {
    fetch(`./${key}/${key}.html`)
        .then(stream => stream.text())
        .then(text => define(text, key));
}

function define(html, key) {
    class HTMLComponent extends HTMLElement {
        set value(value) {
            this._value = value;
            this.valueElement.innerText = this._value;
        }

        get value() {
            return this._value;
        }

        constructor() {
            super();
            this._value = 0;

            var shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = html;

            this.valueElement = shadow.querySelector('p');
        }
    }

    customElements.define(`beach-${key}`, HTMLComponent);
}

window.addEventListener('nextStep', nextStep);
window.addEventListener('previousStep', previousStep);

function nextStep(evt) {
    const nextStep = evt.detail;
    if(nextStep){
        disableAllSteps();
        pages[nextStep].isVisible = true;
        if(nextStep === 'math'){
          makeSum()
        }
        showHideSteps();
        console.log(pages)
    } else {
        alert('there is no next step')
    }
    console.log('next step');
}

function previousStep(evt) {
    const previousStep = evt.detail;
    if(previousStep){
        disableAllSteps();
        pages[previousStep].isVisible = true;
        showHideSteps();
        console.log(pages)
    } else {
        alert('there is no previous step')
    }
    console.log('previous step');
}

function disableAllSteps() {
    for (const [key, value] of Object.entries(pages)) {
        pages[key].isVisible = false;
    }
}

function showHideSteps() {
    for (const [key, value] of Object.entries(pages)) {
        const element = document.getElementsByTagName(`beach-${key}`)[0];
        if(value.isVisible) {
           element.style.display = 'block';
        } else {
           element.style.display = 'none';
        }
    }
}

window.addEventListener('load', function () {
    showHideSteps();
})

const submitFunc = (e) => {
    e.preventDefault();
}