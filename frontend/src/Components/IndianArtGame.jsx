


// import React, { useState } from "react";
// import "./artgame.css";

// const images = [
//   { id: "madhubani", src: "/img/1.png" },
//   { id: "warli", src: "/img/2.png" },
//   { id: "pattachitra", src: "/img/3.png" },
//   { id: "kalamkari", src: "/img/4.png" },
// ];

// const IndianArtGame = () => {
//   const [sequence, setSequence] = useState([]);
//   const [userSequence, setUserSequence] = useState([]);
//   const [level, setLevel] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showWelcome, setShowWelcome] = useState(true);
//   const [message, setMessage] = useState("Click Start to Begin!");

//   const flashImage = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.classList.add("flash");
//       setTimeout(() => el.classList.remove("flash"), 400);
//     }
//   };

//   const playSequence = async (newSeq) => {
//     for (let i = 0; i < newSeq.length; i++) {
//       await new Promise((res) => setTimeout(res, 700));
//       flashImage(newSeq[i]);
//     }
//   };

//   const startGame = () => {
//     setShowWelcome(false);
//     setSequence([]);
//     setUserSequence([]);
//     setLevel(0);
//     setIsPlaying(true);
//     setMessage("Watch carefully...");
//     setTimeout(nextRound, 1000);
//   };
//   const restartGame = () => {
//     setSequence([]);
//     setUserSequence([]);
//     setLevel(0);
//     setIsPlaying(false);
//     setMessage("Click Start to Begin!");
//     setShowWelcome(true); // back to welcome screen
//   };
  

//   const nextRound = () => {
//     const next = images[Math.floor(Math.random() * 4)].id;
//     const newSeq = [...sequence, next];
//     setSequence(newSeq);
//     setUserSequence([]);
//     setLevel((prev) => prev + 1);
//     setMessage(`Level ${level + 1}`);
//     playSequence(newSeq);
//   };

//   const handleClick = (id) => {
//     if (!isPlaying) return;
//     const updatedUserSeq = [...userSequence, id];
//     setUserSequence(updatedUserSeq);
//     flashImage(id);

//     const currentIndex = updatedUserSeq.length - 1;
//     if (updatedUserSeq[currentIndex] !== sequence[currentIndex]) {
//       setMessage(`❌ Wrong! Game Over. You reached Level ${level}`);
//       setIsPlaying(false);
//       return;
//     }

//     if (updatedUserSeq.length === sequence.length) {
//       setMessage("✅ Correct! Next round...");
//       setTimeout(nextRound, 1000);
//     }
//   };
  

//   return (
//     <div className="artgame-container3">
//       {showWelcome ? (
//         <div className="welcome-screen fade-in">
//           <h1>Welcome to the Indian Art Memory Game</h1>
//           <p>
//             🧠 Test your memory using traditional Indian art forms!
//           </p>
//           <h3>📝 Rules:</h3>
//           <ol>
//             <li>Watch the sequence of art pieces carefully.</li>
//             <li>Click the artworks in the correct order to advance.</li>
//             <li>The sequence grows by one each level!</li>
//           </ol>
//           <button className="start-btn3" onClick={startGame}>
//             Start Game
//           </button>
          

//         </div>
//       ) : (
//         <>
//           {!showWelcome && <h1 className="game-title3">Indian Art Memory Game</h1>}

//           <h2>{message}</h2>
//           <div className="grid-container3">
//             {images.map((img) => (
//               <div
//                 key={img.id}
//                 id={img.id}
//                 className="art-tile3"
//                 onClick={() => handleClick(img.id)}
//               >
//                 <img src={img.src} alt={img.id} />
//               </div>
//             ))}
//           </div>

//           {isPlaying && (
//   <button className="restart-btn3" onClick={restartGame}>
//     Restart Game
//   </button>
// )}
//         </>
//       )}
//     </div>
//   );
// };

// export default IndianArtGame;






import React, { useState } from "react";
import "./artgame.css";

const images = [
  { id: "madhubani", src: "/img/1.png" },
  { id: "warli", src: "/img/2.png" },
  { id: "pattachitra", src: "/img/3.png" },
  { id: "kalamkari", src: "/img/4.png" },
];

const IndianArtGame = () => {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [level, setLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [message, setMessage] = useState("Click Start to Begin!");

  const flashImage = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add("flash");
      setTimeout(() => el.classList.remove("flash"), 400);
    }
  };

  const playSequence = async (newSeq) => {
    for (let i = 0; i < newSeq.length; i++) {
      await new Promise((res) => setTimeout(res, 700));
      flashImage(newSeq[i]);
    }
  };

  const startGame = () => {
    setShowWelcome(false);
    setSequence([]);
    setUserSequence([]);
    setLevel(0);
    setIsPlaying(true);
    setMessage("Watch carefully...");
    setTimeout(nextRound, 1000);
  };

  const restartGame = () => {
    setSequence([]);
    setUserSequence([]);
    setLevel(0);
    setIsPlaying(false);
    setMessage("Click Start to Begin!");
    setShowWelcome(true); // back to welcome screen
  };

  const nextRound = () => {
    const next = images[Math.floor(Math.random() * 4)].id;
    const newSeq = [...sequence, next];
    setSequence(newSeq);
    setUserSequence([]);
    setLevel((prev) => prev + 1);
    setMessage(`Level ${level + 1}`);
    playSequence(newSeq);
  };

  const handleClick = (id) => {
    if (!isPlaying) return;
    const updatedUserSeq = [...userSequence, id];
    setUserSequence(updatedUserSeq);
    flashImage(id);

    const currentIndex = updatedUserSeq.length - 1;
    if (updatedUserSeq[currentIndex] !== sequence[currentIndex]) {
      setMessage(`❌ Wrong! Game Over. You reached Level ${level}`);
      setIsPlaying(false);
      return;
    }

    if (updatedUserSeq.length === sequence.length) {
      setMessage("✅ Correct! Next round...");
      setTimeout(nextRound, 1000);
    }
  };

  return (
    <div className="artgame-container3">
      {showWelcome ? (
        <div className="welcome-screen fade-in">
          <h1>Welcome to the Indian Art Memory Game</h1>
          <p>🧠 Test your memory using traditional Indian art forms!</p>
          <h3>📝 Rules:</h3>
          <ol>
            <li>Watch the sequence of art pieces carefully.</li>
            <li>Click the artworks in the correct order to advance.</li>
            <li>The sequence grows by one each level!</li>
          </ol>
          <button className="start-btn3" onClick={startGame}>
            Start Game
          </button>
        </div>
      ) : (
        <>
          <h1 className="game-title3">Indian Art Memory Game</h1>
          <h2>{message}</h2>

          <div className="grid-container3">
            {images.map((img) => (
              <div
                key={img.id}
                id={img.id}
                className="art-tile3"
                onClick={() => handleClick(img.id)}
              >
                <img src={img.src} alt={img.id} />
              </div>
            ))}
          </div>

          {/* ✅ Restart button always visible after welcome screen */}
          <button className="restart-btn3" onClick={restartGame}>
            Restart Game
          </button>
        </>
      )}
    </div>
  );
};

export default IndianArtGame;


