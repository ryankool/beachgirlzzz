class SpeechToText {

  constructor() {
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices()

      this.languages = this.voices
        .map(({ lang, name }) => {
          const [iso6391, b] = lang.split('-')
          return `${ ISO6391.getName(iso6391) } ${ name }`
        })
    }
  }
  
  getLanguage = (lang) => new Promise((resolve, reject) => {
    const selection = this.languages.filter((l) => l.includes(lang))
    selection.length ? resolve(selection) : reject(`Unable to find ${ lang }`)
  })
  
  speak = (str) => new Promise((resolve) => {
    const res = new SpeechSynthesisUtterance(str);
    speechSynthesis.speak(res)
    res.onend = resolve
  })

}

const speechToText = new SpeechToText()