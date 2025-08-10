import React, { useState, useEffect } from 'react';
import './jumbleword.css';



const IndianArtsPuzzleGame = () => {
  const puzzles = [
    {
      id: 1,
      name: "Madhubani Painting",
      scrambled: "GNITNIAPINABUHDMA",
      answer: "MADHUBANI PAINTING",
      hint: "Traditional folk art from Bihar"
    },
    {
      id: 2,
      name: "Warli Art",
      scrambled: "TRA ILRAW",
      answer: "WARLI ART",
      hint: "Tribal art form using geometric patterns"
    },
    {
      id: 3,
      name: "Tanjore Painting",
      scrambled: "GNITNIAPEROJ NAT",
      answer: "TANJORE PAINTING",
      hint: "South Indian classical painting with gold foil"
    },
    {
      id: 4,
      name: "Pattachitra",
      scrambled: "ARTIHCATTAP",
      answer: "PATTACHITRA",
      hint: "Traditional cloth-based scroll painting from Odisha"
    },
    {
      id: 5,
      name: "Kalamkari Art",
      scrambled: "TRA IRAKMALK",
      answer: "KALAMKARI ART",
      hint: "Hand-painted textile art using natural dyes"
    },
    {
      id: 6,
      name: "Miniature Painting",
      scrambled: "GNITNIAPERUT AINIM",
      answer: "MINIATURE PAINTING",
      hint: "Detailed small-scale paintings from Rajasthan"
    },
    {
      id: 7,
      name: "Kathakali",
      scrambled: "ILAKAHTAK",
      answer: "KATHAKALI",
      hint: "Classical dance-drama from Kerala"
    },
    {
      id: 8,
      name: "Bharatanatyam",
      scrambled: "MAYTANARABHB",
      answer: "BHARATANATYAM",
      hint: "Classical dance form from Tamil Nadu"
    },
    {
      id: 9,
      name: "Block Printing",
      scrambled: "GNITNIRP KCOLB",
      answer: "BLOCK PRINTING",
      hint: "Traditional textile printing technique"
    },
    {
      id: 10,
      name: "Batik Art",
      scrambled: "TRA KITAB",
      answer: "BATIK ART",
      hint: "Wax-resist dyeing technique on fabric"
    }
  ];

  const [gamePuzzles, setGamePuzzles] = useState([]);
  const [userInputs, setUserInputs] = useState(['', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStatus, setGameStatus] = useState('ready');
  const [results, setResults] = useState([]);
  const [score, setScore] = useState(0);
  const [showHints, setShowHints] = useState([false, false, false, false, false]);

  const generateRandomPuzzles = () => {
    const shuffled = [...puzzles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  useEffect(() => {
    let timer;
    if (gameStatus === 'playing' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && gameStatus === 'playing') {
      finishGame();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameStatus]);

  const startGame = () => {
    const newPuzzles = generateRandomPuzzles();
    setGamePuzzles(newPuzzles);
    setGameStatus('playing');
    setTimeLeft(60);
    setUserInputs(['', '', '', '', '']);
    setResults([]);
    setScore(0);
    setShowHints([false, false, false, false, false]);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...userInputs];
    newInputs[index] = value;
    setUserInputs(newInputs);
  };

  const toggleHint = (index) => {
    const newShowHints = [...showHints];
    newShowHints[index] = !newShowHints[index];
    setShowHints(newShowHints);
  };

  const finishGame = () => {
    const gameResults = gamePuzzles.map((puzzle, index) => ({
      puzzle: puzzle.name,
      userAnswer: userInputs[index].trim(),
      correctAnswer: puzzle.answer,
      isCorrect: userInputs[index].toUpperCase().trim() === puzzle.answer
    }));
    
    const correctCount = gameResults.filter(result => result.isCorrect).length;
    setResults(gameResults);
    setScore(correctCount);
    setGameStatus('finished');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreMessage = (score) => {
    if (score === 5) return "🏆 Perfect! You're an Indian arts expert!";
    if (score === 4) return "🎯 Excellent! Almost perfect!";
    if (score === 3) return "👍 Good job! You know your arts well!";
    if (score === 2) return "📚 Not bad! Keep learning about Indian arts!";
    return "🌱 Keep exploring the rich world of Indian arts!";
  };

  return (
    <div className="game-container">
      <div className="background-art"></div>
      
      <div className="game-content">
        <header className="game-header">
          <h1 className="game-title">ShabdKala</h1>
          <h2 className="game-subtitle">1-Minute Challenge</h2>
        </header>

        <div className="game-card4">
          {gameStatus === 'ready' && (
            <div className="start-screen">
              <div className="instructions">
                <h3>🎯 Game Instructions</h3>
                <p>You'll get 5 scrambled words related to traditional Indian arts.</p>
                <p>Unscramble all words within 1 minute to get your score!</p>
                <p>Use hints if you need help learning about each art form.</p>
              </div>
              <button onClick={startGame} className="btn btn-start-big">
                🎨 Start Challenge
              </button>
            </div>
          )}

          {gameStatus === 'playing' && (
            <div className="game-area">
              <div className="timer-section">
                <div className="timer">
                  ⏰ Time: {formatTime(timeLeft)}
                </div>
                <div className="progress">
                  Progress: {userInputs.filter(input => input.trim() !== '').length}/5
                </div>
              </div>

              <div className="puzzles-grid">
                {gamePuzzles.map((puzzle, index) => (
                  <div key={index} className="puzzle-item">
                    <div className="puzzle-number">#{index + 1}</div>
                    <div className="scrambled-word">
                      {puzzle.scrambled}
                    </div>
                    <input
                      type="text"
                      value={userInputs[index]}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      placeholder="Your answer..."
                      className="answer-input"
                    />
                    <button 
                      onClick={() => toggleHint(index)} 
                      className="btn btn-hint-small"
                    >
                      {showHints[index] ? '🔍 Hide' : '💡 Hint'}
                    </button>
                    {showHints[index] && (
                      <div className="hint-text">
                        {puzzle.hint}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="game-controls">
                <button onClick={finishGame} className="btn btn-submit">
                  📝 Submit Answers
                </button>
              </div>
            </div>
          )}

          {gameStatus === 'finished' && (
            <div className="results-screen">
              <div className="final-score">
                <h3>🎉 Game Complete!</h3>
                <div className="score-display">
                  Your Score: <span className="score-number">{score}/5</span>
                </div>
                <div className="score-message">
                  {getScoreMessage(score)}
                </div>
              </div>

              <div className="results-breakdown">
                <h4>📋 Results Breakdown:</h4>
                {results.map((result, index) => (
                  <div key={index} className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="result-number">#{index + 1}</div>
                    <div className="result-details">
                      <div className="art-name">{result.puzzle}</div>
                      <div className="answers">
                        <span className="user-answer">
                          Your answer: "{result.userAnswer || 'No answer'}"
                        </span>
                        {!result.isCorrect && (
                          <span className="correct-answer">
                            Correct: "{result.correctAnswer}"
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="result-status">
                      {result.isCorrect ? '✅' : '❌'}
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={startGame} className="btn btn-play-again">
                🔄 Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndianArtsPuzzleGame;

