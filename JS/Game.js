// Game.js - Core game logic

const Game = {
  choices: ['rock', 'paper', 'scissors'],

  // Emoji/icon mapping for display
  icons: {
    rock: './Assets/icon3.png',
    paper: './Assets/icon2.png',
    scissors: './Assets/icon1.png'
  },

  // Returns 'win', 'lose', or 'tie'
  getResult(userChoice, pcChoice) {
    if (userChoice === pcChoice) return 'tie';
    if (
      (userChoice === 'rock' && pcChoice === 'scissors') ||
      (userChoice === 'scissors' && pcChoice === 'paper') ||
      (userChoice === 'paper' && pcChoice === 'rock')
    ) {
      return 'win';
    }
    return 'lose';
  },

  getRandomChoice() {
    return this.choices[Math.floor(Math.random() * 3)];
  },

  play(userChoice) {
    const pcChoice = this.getRandomChoice();
    const result = this.getResult(userChoice, pcChoice);
    return { userChoice, pcChoice, result };
  }
};