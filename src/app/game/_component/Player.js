import React from "react";

const Player = ({ players, tileNumber }) => {
  // return players.map((player)=>player.position === tileNumber? <div className={"player player-" + player.id} /> : null)
  return (
    <>
      {players.map((player) =>
        player.position === tileNumber ? (
          <div className="text-black text-center font-bold relative inset-x-9">
            P{player.id}
          </div>
        ) : null
      )}
    </>
  );
};

export default Player;
