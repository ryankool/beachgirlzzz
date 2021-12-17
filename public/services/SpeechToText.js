class SpeechToText {
  
  constructor() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    this.recognition = new window.SpeechRecognition()
    this.recognition.lang = 'nl'
  }

  onSpeak = (e) => {
    this.sentence = e.results[0][0].transcript
    return this.sentence
  }

  getSpeech = () => new Promise((resolve) => {
    this.recognition.start()
    this.recognition.addEventListener('result', (e) => {
      const res = this.onSpeak(e)
      resolve(res)
    })
    this.recognition.addEventListener('end', () => this.recognition.stop())
  })
}

const speechToText = new SpeechToText()