import { useState } from "react";

import Dice from "./Dice";
import Player from "./Player";
import Snakes from "./Snakes";
import Ladders from "./Ladders";

const GameBoard = ({ tiles, players, diceType }) => {
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const handlePlayerMove = (pos) => {
    setCurrentPlayer({ ...currentPlayer, position: pos });
  };
  if (currentPlayer.position === 100)
    return <>Congratulation Player {currentPlayer.id} have won</>;
  return (
    <div className="grid grid-cols-10 gap-1 p-4">
      {tiles.map((tile, index) => (
        <div key={index} className="min-h-20 bg-white border border-gray-200">
          <div className="player player-1">
            <span className="text-black text-center font-bold">
              {tile.number}
            </span>
          </div>
          <div className="player player-2 flex justify-center items-center">
            <Player players={[currentPlayer]} tileNumber={tile.number} />
            <Snakes tileNumber={tile.number} />
            <Ladders tileNumber={tile.number} />
          </div>
        </div>
      ))}
      <Dice
        diceType={diceType}
        playerCurrentPosition={currentPlayer.position}
        setPlayerNewPosition={(pos) => handlePlayerMove(pos)}
      />
    </div>
  );
};

export default GameBoard;
