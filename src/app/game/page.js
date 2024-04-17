"use client";

import GameBoard from "./_component/GameBoard";
import { useState } from "react";

import { ladders } from "./config/ladders";
import { players } from "./config/players";

const Game = () => {
  const [showGame, setShowGame] = useState(false);
  const [diceType, setDiceType] = useState(null);
  return (
    <div>
      {!showGame && <button onClick={() => setShowGame(true)}>Play</button>}
      {showGame && !diceType && (
        <>
          <button onClick={() => setDiceType("normal")}>Normal Dice</button>
          <button onClick={() => setDiceType("crooked")}>Crooked Dice</button>
        </>
      )}
      {showGame && diceType && (
        <div className="mx-48 items-center justify-center">
          <GameBoard tiles={tiles} players={players} diceType={diceType} />
        </div>
      )}
    </div>
  );
};

const tiles = [...Array(10).keys()]
  .map((j) => {
    const ab = [...Array(10).keys()].map((i) => ({ number: j * 10 + i + 1 }));
    return j % 2 === 1 ? ab.reverse() : ab;
  })
  .reverse()
  .flat();
export default Game;
