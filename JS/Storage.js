// Storage.js - Handles score persistence using localStorage

const Storage = {
  getScores() {
    const pcScore = parseInt(localStorage.getItem('rps_pc_score')) || 0;
    const userScore = parseInt(localStorage.getItem('rps_user_score')) || 0;
    return { pcScore, userScore };
  },

  saveScores(pcScore, userScore) {
    localStorage.setItem('rps_pc_score', pcScore);
    localStorage.setItem('rps_user_score', userScore);
  },

  resetScores() {
    localStorage.removeItem('rps_pc_score');
    localStorage.removeItem('rps_user_score');
  }
};