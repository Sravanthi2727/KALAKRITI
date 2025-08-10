

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Games.css";

export default function Games() {
  const navigate = useNavigate();

  return (
    <div className="games2-container">
      <h1 className="games2-heading">Play and immerse in India’s artistry</h1>

      <div className="carousel2-wrapper">
        <div className="carousel2-inner">
          <input type="radio" name="carousel2" id="game1" defaultChecked />
          <input type="radio" name="carousel2" id="game2" />
          <input type="radio" name="carousel2" id="game3" />
          <input type="radio" name="carousel2" id="game4" />

          <div className="carousel2">
            <label className="card2 card2-1" htmlFor="game1">
              <img src="/MemoMatch.jpg" alt="Game 1" />
              <h2 className="head">Memory Match</h2>
              <p>Test your memory skills in this exciting card matching challenge!</p>
              <button onClick={() => navigate("/games/memory")}>Play Now</button>
            </label>

            <label className="card2 card2-2" htmlFor="game2">
              <img src="/Snl.jpg" alt="Game 2" />
              <h2>Snake and Ladder</h2>
              <p>May the ladders lift you, and the snakes spare you.</p>
              <button onClick={() => navigate("/games/SandL")}>Play Now</button>
            </label>

            <label className="card2 card2-3" htmlFor="game3">
              <img src="https://www.zwende.com/cdn/shop/products/FDJP63-11-4.jpg?v=1661947154&width=1080 " alt="Game 3" />
              <h2>Art Puzzle</h2>
              <p>Solve the puzzle pieces and uncover the beautiful artwork.</p>
              <button onClick={() => navigate("/games/puzzle")}>Play Now</button>
            </label>

              <label className="card2 card2-4" htmlFor="game4">
              <img src="/word.jpg" alt="Game 4" />
              <h2>ShabdKala</h2>
              <p>Twist the Letters, Trace the Legacy.</p>
              <button onClick={() => navigate("/games/quiz")}>Play Now</button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}



