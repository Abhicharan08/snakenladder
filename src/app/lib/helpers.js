import { ladders } from "../game/config/ladders";
import { snakes } from "../game/config/snake";

export const playerNewPosition = (currentPosition, type) => {
  const diceValue = randomDiceValue(type);

  if (currentPosition === 0) {
    return { newPosition: diceValue === 6 ? 1 : currentPosition, diceValue };
  }
  let newPosition = currentPosition + diceValue;
  if (newPosition > 100) {
    return { newPosition: currentPosition, diceValue };
  }

  Object.keys(snakes).map((snake) => {
    if (newPosition === snakes[snake].from) {
      newPosition = snakes[snake].to;
    }
  });

  Object.keys(ladders).map((ladder) => {
    if (newPosition === ladders[ladder].from) {
      newPosition = ladders[ladder].to;
    }
  });

  return { newPosition, diceValue };
};

const randomDiceValue = (type) => {
  if (type === "crooked") {
    return (Math.floor(Math.random() * 3) + 1) * 2;
  }
  return Math.floor(Math.random() * 6) + 1;
};
