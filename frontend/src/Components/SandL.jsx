
import React, { useState, useEffect } from 'react';
import './SandL.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [numPlayers, setNumPlayers] = useState(2);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceResult, setDiceResult] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [tiles, setTiles] = useState([]);

  const ladders = [
    { start: 4, end: 25 },
    { start: 13, end: 46 },
    { start: 42, end: 63 },
    { start: 50, end: 69 },
    { start: 62, end: 81 },
    { start: 74, end: 92 }
  ];

  const snakes = [
    { start: 24, end: 5 },
    { start: 40, end: 3 },
    { start: 43, end: 18 },
    { start: 54, end: 31 },
    { start: 66, end: 45 },
    { start: 89, end: 53 },
    { start: 95, end: 77 },
    { start: 99, end: 41 }
  ];

  const playerColors = ['#d9a441', '#6a994e', '#bc6c25', '#1d3557'];

  useEffect(() => {
    const newTiles = [];
    for (let row = 0; row < 10; row++) {
      const currentRow = [];
      for (let col = 0; col < 10; col++) {
        const num = row % 2 === 0 ? row * 10 + col + 1 : row * 10 + (9 - col) + 1;
        currentRow.push(num);
      }
      newTiles.unshift(...currentRow);
    }
    setTiles(newTiles);
  }, []);

  const startGame = () => {
    const initPlayers = [];
    for (let i = 0; i < numPlayers; i++) {
      initPlayers.push({ id: i, pos: 1 });
    }
    setPlayers(initPlayers);
    setCurrentPlayer(0);
    setGameStarted(true);
    setDiceResult(null);
  };

  const restartGame = () => {
    setGameStarted(false);
    setDiceResult(null);
    setPlayers([]);
  };

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceResult(roll);

    setPlayers((prevPlayers) => {
      return prevPlayers.map((player, i) => {
        if (i === currentPlayer) {
          let newPos = player.pos + roll;

          if (newPos > 100) newPos = player.pos;

          const ladder = ladders.find(l => l.start === newPos);
          if (ladder) newPos = ladder.end;

          const snake = snakes.find(s => s.start === newPos);
          if (snake) newPos = snake.end;

          if (newPos === 100) {
            alert(`🎉 Player ${i + 1} wins!`);
            setGameStarted(false);
          }

          return { ...player, pos: newPos };
        }
        return player;
      });
    });

    setTimeout(() => {
      setCurrentPlayer((prev) => (prev + 1) % numPlayers);
    }, 500);
  };

  return (
    <div
      className="game"
      style={{
        backgroundImage: "url('/img/art1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "20px",
        color: "#fff",
        boxSizing: "border-box",
        fontFamily: '"Gloock", serif'
      }}
    >
      <h1 className="title">Welcome To Snakes and Ladders</h1>
      {gameStarted && (
        <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '1rem', color: '#5E412F' }}>
          Step into a world of luck and tradition! May the ladders lift you, and the snakes spare you.
        </p>
      )}

      {!gameStarted ? (
        <div className="setup">
          <h3 style={{ marginBottom: '0.8rem', color: '#333' }}>Rules of the Game</h3>
          <ul style={{ textAlign: 'left', color: '#444', fontSize: '0.95rem', paddingLeft: '1rem' }}>
            <li>Each player takes turns rolling the dice.</li>
            <li>Landing on a ladder takes you up; landing on a snake sends you down.</li>
            <li>First player to reach exactly 100 wins.</li>
          </ul>
          <label style={{ marginTop: '1rem' }}>Select number of players:</label>
          <select value={numPlayers} onChange={(e) => setNumPlayers(Number(e.target.value))}>
            {[2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <button className="button" onClick={startGame}>Start Game</button>
        </div>
      ) : (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className="main-layout-row">
            <div className="board-container">
              <img src="/img/SnakeLadder.jpg" alt="Board" className="board-img" />
              {players.map((p, i) => {
                const posIndex = tiles.indexOf(p.pos);
                const row = Math.floor(posIndex / 10);
                const col = posIndex % 10;
                const top = `${row * 10 + 5}%`;
                const left = `${col * 10 + 5}%`;
                const offsetX = (i % 2) * 10;
                const offsetY = Math.floor(i / 2) * 10;

                return (
                  <div
                    key={i}
                    className="player-piece"
                    style={{
                      top: `calc(${top} + ${offsetY}px)`,
                      left: `calc(${left} + ${offsetX}px)`,
                      backgroundColor: playerColors[p.id]
                    }}
                  >
                    {p.id + 1}
                  </div>
                );
              })}
            </div>

            <div className="controls">
              <p>🎲 Player {currentPlayer + 1}'s turn</p>
              <div className="dice-row">
                <button className="button" onClick={rollDice}>Roll Dice</button>
                {diceResult && (
                  <div className="dice-container">
                    <img
                      src={`/img/dice${diceResult}.jpg`}
                      alt={`Dice ${diceResult}`}
                      className="dice-img"
                    />
                    <div id="dice-results">You rolled: {diceResult}</div>
                  </div>
                )}
              </div>
              <button className="button" style={{ marginTop: '1.5rem', backgroundColor: '#a94442' }} onClick={restartGame}>
                Restart Game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


































































