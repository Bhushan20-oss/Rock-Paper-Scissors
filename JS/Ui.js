// UI.js - Handles all UI interactions and screen management

const UI = {
  // State
  pcScore: 0,
  userScore: 0,

  // DOM refs
  gameScreen: document.getElementById('game-screen'),
  resultScreen: document.getElementById('result-screen'),
  hurrayScreen: document.getElementById('hurray-screen'),
  pcScoreEl: document.getElementById('pc-score'),
  userScoreEl: document.getElementById('user-score'),
  userPickedEl: document.getElementById('user-picked'),
  pcPickedEl: document.getElementById('pc-picked'),
  resultMessage: document.getElementById('result-message'),
  resultSubtext: document.getElementById('result-subtext'),
  playAgainBtn: document.getElementById('play-again'),
  hurrayPlayAgainBtn: document.getElementById('hurray-play-again'),
  rulesBtn: document.getElementById('rules-btn'),
  closeRulesBtn: document.getElementById('close-rules'),
  rulesPopup: document.getElementById('rules-popup'),
  nextBtn: document.getElementById('next-btn'),
  starsContainer: document.getElementById('stars-container'),

  init() {
    // Load saved scores
    const saved = Storage.getScores();
    this.pcScore = saved.pcScore;
    this.userScore = saved.userScore;
    this.updateScoreDisplay();

    // Choice buttons
    document.querySelectorAll('.choice').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const choice = btn.dataset.choice;
        this.handleChoice(choice);
      });
    });

    // Play Again (result screen)
    this.playAgainBtn.addEventListener('click', () => {
      this.showGameScreen();
    });

    // Play Again (hurray screen)
    this.hurrayPlayAgainBtn.addEventListener('click', () => {
      this.showGameScreen();
    });

    // Next button (go to hurray screen after win)
    this.nextBtn.addEventListener('click', () => {
      this.showHurrayScreen();
    });

    // Rules
    this.rulesBtn.addEventListener('click', () => {
      this.rulesPopup.classList.remove('hidden');
    });
    this.closeRulesBtn.addEventListener('click', () => {
      this.rulesPopup.classList.add('hidden');
    });
  },

  handleChoice(userChoice) {
    const { pcChoice, result } = Game.play(userChoice);

    // Update scores
    if (result === 'win') {
      this.userScore++;
    } else if (result === 'lose') {
      this.pcScore++;
    }

    // Save to storage
    Storage.saveScores(this.pcScore, this.userScore);
    this.updateScoreDisplay();

    // Show result
    this.showResultScreen(userChoice, pcChoice, result);
  },

  showResultScreen(userChoice, pcChoice, result) {
    this.gameScreen.classList.add('hidden');
    this.hurrayScreen.classList.add('hidden');
    this.resultScreen.classList.remove('hidden');
    this.nextBtn.classList.add('hidden');

    // Set picked icons
    this.setPickedCircle(this.userPickedEl, userChoice);
    this.setPickedCircle(this.pcPickedEl, pcChoice);

    // Remove old glow classes
    this.userPickedEl.classList.remove('winner-glow');
    this.pcPickedEl.classList.remove('winner-glow');

    // Set result message
    if (result === 'win') {
      this.resultMessage.textContent = 'YOU WIN';
      this.resultSubtext.textContent = 'AGAINST PC';
      this.userPickedEl.classList.add('winner-glow');

      setTimeout(() => {
        this.showHurrayScreen();
      }, 1000);
    } else if (result === 'lose') {
      this.resultMessage.textContent = 'YOU LOST';
      this.resultSubtext.textContent = 'AGAINST PC';
      this.pcPickedEl.classList.add('winner-glow');
    } else {
      this.resultMessage.textContent = 'TIE UP';
      this.resultSubtext.textContent = '';
    }

    // Change play again button text based on result
    this.playAgainBtn.textContent = result === 'win' ? 'PLAY AGAIN' : (result === 'lose' ? 'PLAY AGAIN' : 'REPLAY');
  },

  showHurrayScreen() {
    this.resultScreen.classList.add('hidden');
    this.gameScreen.classList.add('hidden');
    this.hurrayScreen.classList.remove('hidden');
    this.nextBtn.classList.add('hidden');
    this.createStars();
  },

  showGameScreen() {
    this.hurrayScreen.classList.add('hidden');
    this.resultScreen.classList.add('hidden');
    this.nextBtn.classList.add('hidden');
    this.gameScreen.classList.remove('hidden');
  },

  setPickedCircle(el, choice) {
    // Clear
    el.innerHTML = '';
    el.className = 'picked-circle';

    // Set border color
    el.classList.add(`border-${choice}`);

    // Add image
    const img = document.createElement('img');
    img.src = Game.icons[choice];
    img.style.height = '50px';
    img.style.width = '50px';
    img.style.objectFit = 'contain';
    el.appendChild(img);
  },

  updateScoreDisplay() {
    this.pcScoreEl.textContent = this.pcScore;
    this.userScoreEl.textContent = this.userScore;
  },

  createStars() {
    this.starsContainer.innerHTML = '';
    const positions = [
      { top: '5%', left: '5%', delay: '0s', size: '28px' },
      { top: '5%', left: '25%', delay: '0.2s', size: '22px' },
      { top: '10%', right: '20%', delay: '0.3s', size: '30px' },
      { top: '10%', right: '5%', delay: '0.1s', size: '24px' },
      { top: '30%', left: '3%', delay: '0.4s', size: '26px' },
      { top: '30%', right: '3%', delay: '0.15s', size: '20px' },
      { top: '60%', left: '8%', delay: '0.25s', size: '22px' },
      { top: '60%', right: '8%', delay: '0.35s', size: '26px' },
    ];
    positions.forEach(pos => {
      const star = document.createElement('div');
      star.className = 'star';
      star.textContent = '★';
      star.style.fontSize = pos.size;
      star.style.top = pos.top || 'auto';
      star.style.left = pos.left || 'auto';
      star.style.right = pos.right || 'auto';
      star.style.bottom = pos.bottom || 'auto';
      star.style.animationDelay = pos.delay;
      this.starsContainer.appendChild(star);
    });
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  UI.init();
});