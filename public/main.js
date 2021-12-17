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
    var sheet = new CSSStyleSheet
sheet.replaceSync( `

.input-container { 
    text-align: left;
}

.input-container > * {
    margin-top: 1rem;
}

.input-container > input {
    padding: 0.5em;
}

.input-container > button {
    padding: 0.5em;
    background-color: #16A085;
    border: none;
    font-weight: bold;
}

`)
setTimeout(() => {
    document.querySelector('beach-name').shadowRoot.adoptedStyleSheets = [ sheet ]
    }, 100)
})