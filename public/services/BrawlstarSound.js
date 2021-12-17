class BrawlstarSound {
  constructor() {}

  playSound() {
    const sound = new Audio("./wavs/el_primo_lead_01.wav");
    sound.muted = false;
    sound.play();
  }
}

const brawlstarSound = new BrawlstarSound();
