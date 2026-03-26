# Rock Paper Scissors Game

A modern, interactive Rock Paper Scissors game built with vanilla JavaScript, HTML5, and CSS3. Play against the computer with persistent score tracking and celebration animations.

## Features

✨ **Game Features:**
- Play against the computer with random AI choices
- Real-time score tracking for both players (You vs PC)
- Persistent score storage using browser localStorage
- Beautiful celebration animations when you win
- Responsive design that works on all devices
- Interactive rules popup with game instructions
- Visual feedback with glow effects for winners
- Smooth animations and transitions

🎮 **Game Mechanics:**
- **Simultaneous Turns**: Both you and the computer choose at the same time
- **Three Choices**: Rock, Paper, or Scissors
- **Win Conditions**: 
  - Rock beats Scissors
  - Scissors beats Paper
  - Paper beats Rock
- **Celebration**: Automatic "HURRAY" screen with animations on every win
- **Scoring**: Unlimited scoring - no win limit

## Project Structure

```
Rock_paper_scissors/
├── index.html              # Main HTML file
├── CSS/
│   └── style.css          # All styling and animations
├── JS/
│   ├── Game.js            # Core game logic
│   ├── Storage.js         # LocalStorage management
│   └── Ui.js              # UI interactions and screen management
└── Assets/
    ├── icon1.png          # Scissors icon
    ├── icon2.png          # Paper icon
    ├── icon3.png          # Rock icon
    └── Vector.png         # Trophy icon
```

## How to Play

1. **Open the Game**: Open `index.html` in your web browser
2. **Choose Your Move**: Click on Rock, Paper, or Scissors
3. **See the Result**: The result screen shows both choices with animations
4. **Celebrate on Win**: If you win, you'll see a celebration screen with stars and trophy
5. **Play Again**: Click "PLAY AGAIN" to continue playing
6. **View Rules**: Click the "RULES" button at the bottom right to see game rules

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Layout, animations, and responsive design
  - Flexbox for responsive layout
  - CSS animations (floating stars, trophy bounce)
  - Box shadows and transitions for visual effects
- **JavaScript (Vanilla)**: Game logic and DOM manipulation
  - No external libraries or frameworks
  - Object-oriented code structure
  - Browser localStorage API for persistence

## File Descriptions

### index.html
- Main document structure
- Contains all screen containers (game, result, hurray)
- Links to CSS and JavaScript files
- Includes Rules popup modal

### CSS/style.css
- Global styling (colors, fonts, layout)
- Game screen with triangle layout
- Result screen with winner glow effects
- Hurray celebration screen with animations
- Responsive button styling
- Rules popup styling
- Animation keyframes for stars and trophy

### JS/Game.js
- Core game logic
- `getResult()`: Determines win/lose/tie based on choices
- `getRandomChoice()`: Generates random PC choice
- `play()`: Main game function
- Icon mapping for display

### JS/Storage.js
- Manages browser localStorage
- `getScores()`: Retrieves saved scores
- `saveScores()`: Saves scores to localStorage
- `resetScores()`: Clears saved scores (optional)

### JS/Ui.js
- Handles all UI interactions
- Manages screen transitions
- `handleChoice()`: Processes user choice
- `showResultScreen()`: Displays game result
- `showHurrayScreen()`: Shows celebration screen
- `createStars()`: Generates animated stars for celebration
- Event listeners for buttons and choices

## Game Screens

### 1. Game Screen
- Title "ROCK PAPER SCISSORS"
- Score board showing computer and user scores
- Three choice buttons (Rock, Paper, Scissors)
- Triangle decorator lines

### 2. Result Screen
- Shows both player's choices with icons
- Displays result message (YOU WIN / YOU LOST / TIE UP)
- Winner gets a glow effect
- PLAY AGAIN button to restart

### 3. Hurray Screen (On Win)
- Appears automatically after every win
- Animated trophy with bounce effect
- Floating stars with various animation delays
- "HURRAY!!" and "YOU WON THE GAME" text
- PLAY AGAIN button

### 4. Rules Popup
- Accessible via bottom-right RULES button
- Displays 4 game rules
- Close button (✕) to dismiss

## Score Persistence

Scores are automatically saved to browser localStorage and persist across:
- Page refreshes
- Browser closing and reopening
- Multiple sessions

**Note**: Scores reset only when you clear browser data/localStorage manually.

## Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Future Enhancements

Possible features to add:
- Leaderboard system
- Sound effects
- Difficulty levels
- Multiplayer mode
- Theme customization (dark/light mode)
- Game statistics and history

## Developer Notes

### Code Structure
- Object-based approach for Game, UI, and Storage
- DOM elements cached for performance
- Event delegation for button listeners
- Separation of concerns (game logic, UI, storage)

### Key Functions Flow
1. User clicks a choice button
2. `handleChoice()` is called
3. `Game.play()` generates result
4. Scores are updated and saved
5. `showResultScreen()` displays result
6. On win, `showHurrayScreen()` is auto-triggered after 1 second
7. Stars and trophy animations run

### Animations
- **Stars**: Float up with rotation, staggered delays
- **Trophy**: Bounces in with scale animation
- **Winner Glow**: Pulsing glow rings around winning choice
- **Transitions**: Smooth fade-in/out between screens

## License

This project is open source and available for educational purposes.

## Author

Created as a JavaScript learning project demonstrating:
- Game logic implementation
- DOM manipulation
- Event handling
- LocalStorage API usage
- CSS animations
- Responsive design
