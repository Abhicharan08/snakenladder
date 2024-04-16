import { useState } from "react";
import { playerNewPosition } from "../../lib/helpers";

const Dice = ({
  playerCurrentPosition = 0,
  setPlayerNewPosition = () => {},
  diceType,
}) => {
  const [diceValue, setDiceValue] = useState(6);

  const handleDiceRoll = () => {
    const { newPosition, diceValue } = playerNewPosition(
      playerCurrentPosition,
      diceType
    );

    setPlayerNewPosition(newPosition);
    setDiceValue(diceValue);
  };
  const renderDots = () => {
    const dots = {
      1: [0, 0, 0, 0, 1, 0, 0, 0, 0],
      2: [1, 0, 0, 0, 0, 0, 0, 0, 1],
      3: [1, 0, 0, 0, 1, 0, 0, 0, 1],
      4: [1, 0, 1, 0, 0, 0, 1, 0, 1],
      5: [1, 0, 1, 0, 1, 0, 1, 0, 1],
      6: [1, 1, 1, 0, 0, 0, 1, 1, 1],
    }[diceValue];
    return (
      <div className="grid grid-cols-3 gap-2 place-items-center">
        {dots.map((isVisible, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full ${
              isVisible ? "bg-gray-700" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
    );
  };
  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      onClick={handleDiceRoll}
    >
      <div className="h-36 w-36 bg-white rounded-xl shadow-xl transform rotate-3 flex justify-center p-4 hover:scale-150 transition duration-700 hover:rotate-45 hover:shadow-2xl">
        {diceValue ? renderDots() : <p>Roll the dice</p>}
      </div>
    </div>
  );
};

export default Dice;
