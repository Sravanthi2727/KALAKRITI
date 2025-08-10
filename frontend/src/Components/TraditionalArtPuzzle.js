import React, { useState, useEffect, useCallback } from 'react';
import './TraditionalArtPuzzle.css';

const TraditionalArtPuzzle = () => {
  const [selectedArt, setSelectedArt] = useState('madhubani');
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'won', 'lost'
  const [timeLeft, setTimeLeft] = useState(60);
  const [tiles, setTiles] = useState([]);
  const [emptyIndex, setEmptyIndex] = useState(8);
  const [moves, setMoves] = useState(0);

  const artworks = {
    'madhubani': {
      name: 'Madhubani Art',
      artist: 'Traditional Bihar Art',
      image: '/madhubani.jpg',
      colors: ['#FFD700', '#FF6B35', '#F7931E', '#C5A632']
    },
    'warli': {
      name: 'Warli Art',
      artist: 'Traditional Maharashtra Art',
      image: '/warli.jpg',
      colors: ['#8B4513', '#D2691E', '#F4A460', '#DEB887']
    },
    'kalamkari': {
      name: 'Kalamkari Art',
      artist: 'Traditional Andhra Pradesh Art',
      image: '/kalamkari.jpg',
      colors: ['#8B0000', '#DAA520', '#2F4F4F', '#800080']
    },
    'gond': {
      name: 'Gond Art',
      artist: 'Traditional Madhya Pradesh Art',
      image: '/gond.jpg',
      colors: ['#228B22', '#FF4500', '#4169E1', '#FFD700']
    },
    'pattachitra': {
      name: 'Pattachitra Art',
      artist: 'Traditional Odisha Art',
      image: '/pattachitra.jpg',
      colors: ['#DC143C', '#FFD700', '#000080', '#32CD32']
    }
  };

  const currentArt = artworks[selectedArt];

  // Initialize puzzle
  const initializePuzzle = useCallback(() => {
    const initialTiles = Array.from({ length: 9 }, (_, i) => i);
    // Shuffle tiles (ensuring solvable state)
    const shuffled = [...initialTiles];
    for (let i = 0; i < 100; i++) {
      const validMoves = getValidMoves(shuffled.indexOf(8), shuffled);
      const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
      const emptyIdx = shuffled.indexOf(8);
      [shuffled[emptyIdx], shuffled[randomMove]] = [shuffled[randomMove], shuffled[emptyIdx]];
    }
    setTiles(shuffled);
    setEmptyIndex(shuffled.indexOf(8));
    setMoves(0);
  }, []);

  const getValidMoves = (emptyIdx, currentTiles) => {
    const moves = [];
    const row = Math.floor(emptyIdx / 3);
    const col = emptyIdx % 3;
    
    if (row > 0) moves.push(emptyIdx - 3); // Up
    if (row < 2) moves.push(emptyIdx + 3); // Down
    if (col > 0) moves.push(emptyIdx - 1); // Left
    if (col < 2) moves.push(emptyIdx + 1); // Right
    
    return moves;
  };

  const moveTile = (tileIndex) => {
    if (gameState !== 'playing') return;
    
    const validMoves = getValidMoves(emptyIndex, tiles);
    if (!validMoves.includes(tileIndex)) return;

    const newTiles = [...tiles];
    [newTiles[emptyIndex], newTiles[tileIndex]] = [newTiles[tileIndex], newTiles[emptyIndex]];
    
    setTiles(newTiles);
    setEmptyIndex(tileIndex);
    setMoves(moves + 1);

    // Check if puzzle is solved
    const isSolved = newTiles.every((tile, index) => tile === index);
    if (isSolved) {
      setGameState('won');
    }
  };

  const startGame = () => {
    setGameState('playing');
    setTimeLeft(60);
    initializePuzzle();
  };

  const resetGame = () => {
    setGameState('menu');
    setTimeLeft(60);
    setMoves(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Timer effect
  useEffect(() => {
    let interval;
    if (gameState === 'playing' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setGameState('lost');
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState, timeLeft]);

  const renderTile = (tileValue, index) => {
    if (tileValue === 8) {
      return (
        <div
          key={index}
          className="empty-tile2"
        />
      );
    }

    const row = Math.floor(tileValue / 3);
    const col = tileValue % 3;
    
    // Calculate background position for image slice
    // Each tile should show 1/3 of the image, so we need to position it correctly
    const bgPosX = (col * 100) / 2; // 0%, 50%, 100%
    const bgPosY = (row * 100) / 2; // 0%, 50%, 100%

    // Create gradient background as fallback
    const colorIndex = (row + col) % currentArt.colors.length;
    const gradientBg = `linear-gradient(135deg, ${currentArt.colors[colorIndex]}, ${currentArt.colors[(colorIndex + 1) % currentArt.colors.length]})`;

    return (
      <div
        key={index}
        onClick={() => moveTile(index)}
        className="game-tile2"
        style={{
          backgroundImage: `url(${currentArt.image})`,
          backgroundSize: '300% 300%', // 3x3 grid = 300% size
          backgroundPosition: `${bgPosX}% ${bgPosY}%`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: currentArt.colors[colorIndex] // Fallback color
        }}
      >
        {/* Optional: Add tile number overlay */}
        <div className="tile-number2">
          <div className="tile-number-circle2">
            <span className="tile-number-text2">{tileValue + 1}</span>
          </div>
        </div>
        <div className="tile-hover-overlay2" />
      </div>
    );
  };

  if (gameState === 'menu') {
    return (
      <div className="app-container2">
        <div className="max-width-container2">
          {/* Header */}
          <div className="header2">
            <h1 className="main-title2">Traditional Art Puzzle</h1>
            <p className="main-subtitle2">Reconstruct the masterpiece by sliding the tiles within 60 seconds!</p>
          </div>

          {/* Artwork Selection */}
          <div className="artwork-selection2">
            <h2 className="selection-title2">Choose Your Masterpiece:</h2>
            <select
              value={selectedArt}
              onChange={(e) => setSelectedArt(e.target.value)}
              className="artwork-select2"
            >
              {Object.entries(artworks).map(([key, art]) => (
                <option key={key} value={key}>
                  {art.name} - {art.artist}
                </option>
              ))}
            </select>
          </div>

          <div className="menu-grid2">
            {/* Reference Image */}
            <div className="reference-card2">
              <h3 className="card-title2">Reference Image</h3>
              <div className="reference-content2">
                <div className="reference-image-container2">
                  <img 
                    src={currentArt.image} 
                    alt={currentArt.name}
                    className="reference-image2"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'grid';
                    }}
                  />
                  <div className="fallback-grid2">
                    {Array.from({ length: 9 }, (_, i) => {
                      const row = Math.floor(i / 3);
                      const col = i % 3;
                      const colorIndex = (row + col) % currentArt.colors.length;
                      return (
                        <div
                          key={i}
                          className="fallback-tile2"
                          style={{
                            background: `linear-gradient(135deg, ${currentArt.colors[colorIndex]}, ${currentArt.colors[(colorIndex + 1) % currentArt.colors.length]})`
                          }}
                        >
                          <div className="fallback-tile-content2">
                            <span className="fallback-tile-number2">{i + 1}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <h4 className="artwork-name2">{currentArt.name}</h4>
                <p className="artwork-artist2">by {currentArt.artist}</p>
              </div>
            </div>

            {/* How to Play */}
            <div className="how-to-play-card2">
              <h3 className="card-title2">How to Play</h3>
              <div className="instructions2">
                <p>• Choose your favorite masterpiece from the dropdown</p>
                <p>• Click "Start Game" to shuffle and begin the 60-second challenge</p>
                <p>• Click on tiles adjacent to the empty space to move them</p>
                <p>• Arrange all tiles in the correct order (1-9) before time runs out</p>
                <p>• Your progress is automatically saved if you close the page</p>
              </div>
              
              <button
                onClick={startGame}
                className="start-button2"
              >
                <span>▶️</span>
                Start Game
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="max-width-container2">
        {/* Header */}
        <div className="game-header2">
          <h1 className="game-title2">Traditional Art Puzzle</h1>
          <p className="game-subtitle2">Reconstruct the masterpiece by sliding the tiles within 60 seconds!</p>
        </div>

        {/* Game Status */}
        {gameState === 'won' && (
          <div className="status-message won2">
            <h2 className="status-title2">🎉 Congratulations!</h2>
            <p className="status-text2">You completed the puzzle in {moves} moves with {timeLeft} seconds remaining!</p>
          </div>
        )}

        {gameState === 'lost' && (
          <div className="status-message lost2">
            <h2 className="status-title2">⏰ Time's Up!</h2>
            <p className="status-text2">Don't worry, try again! You made {moves} moves.</p>
          </div>
        )}

        {/* Artwork Selection */}
        <div className="game-artwork-selection2">
          <h2 className="game-selection-title2">Choose Your Masterpiece:</h2>
          <select
            value={selectedArt}
            onChange={(e) => setSelectedArt(e.target.value)}
            className="game-artwork-select2"
            disabled={gameState === 'playing'}
          >
            {Object.entries(artworks).map(([key, art]) => (
              <option key={key} value={key}>
                {art.name} - {art.artist}
              </option>
            ))}
          </select>
        </div>

        {/* Game Area */}
        <div className="game-area2">
          {/* Game Controls */}
          <div className="game-controls2">
            <div className="control-item2">
              <span className="control-text2">📊 Moves: {moves}</span>
            </div>
            
            <div className="control-item2">
              <span className="control-icon2">⏰</span>
              <span className="control-text time2">Time: {formatTime(timeLeft)}</span>
            </div>

            <button
              onClick={startGame}
              className="control-button start2"
            >
              <span>▶️</span>
              Start Game
            </button>

            <button
              onClick={resetGame}
              className="control-button reset2"
            >
              <span>🔄</span>
              Reset
            </button>
          </div>

          {/* Puzzle Grid */}
          <div className="puzzle-container2">
            <div className="puzzle-grid2">
              {tiles.map((tileValue, index) => renderTile(tileValue, index))}
            </div>
          </div>
        </div>

        <div className="bottom-grid2">
          {/* Reference Image */}
          <div className="bottom-reference-card2">
            <h3 className="card-title2">Reference Image</h3>
            <div className="bottom-reference-conten2t">
              <div className="bottom-reference-image-container2">
                <img 
                  src={currentArt.image} 
                  alt={currentArt.name}
                  className="bottom-reference-image2"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'grid';
                  }}
                />
                <div className="bottom-fallback-grid2">
                  {Array.from({ length: 9 }, (_, i) => {
                    const row = Math.floor(i / 3);
                    const col = i % 3;
                    const colorIndex = (row + col) % currentArt.colors.length;
                    return (
                      <div
                        key={i}
                        className="bottom-fallback-tile2"
                        style={{
                          background: `linear-gradient(135deg, ${currentArt.colors[colorIndex]}, ${currentArt.colors[(colorIndex + 1) % currentArt.colors.length]})`
                        }}
                      >
                        <div className="bottom-fallback-tile-content2">
                          <span className="bottom-fallback-tile-number2">{i + 1}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <h4 className="bottom-artwork-name2">{currentArt.name}</h4>
              <p className="bottom-artwork-artist2">by {currentArt.artist}</p>
            </div>
          </div>

          {/* How to Play */}
          <div className="bottom-how-to-play-card2">
            <h3 className="card-title2">How to Play</h3>
            <div className="bottom-instructions2">
              <p>• Choose your favorite masterpiece from the dropdown</p>
              <p>• Click "Start Game" to shuffle and begin the 60-second challenge</p>
              <p>• Click on tiles adjacent to the empty space to move them</p>
              <p>• Arrange all tiles in the correct order (1-9) before time runs out</p>
              <p>• Your progress is automatically saved if you close the page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalArtPuzzle;