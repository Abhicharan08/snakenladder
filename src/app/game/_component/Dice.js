import { useState } from "react";
import { playerNewPosition } from "../../lib/helpers";
import styled from "styled-components";

const DiceStyle = styled.div`
  .dice {
    position: relative;
    width: 200px;
    height: 200px;
    zoom: 0.5;
  }
  .side {
    width: 100%;
    height: 100%;
    background: red;
    border: 2px solid #fff;
    border-radius: 20px;
    position: absolute;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .side {
    &:before {
      content: "";
      width: 20%;
      height: 20%;
      background: black;
      border-radius: 50%;
    }
  }

  .two {
    &:before {
      background: transparent;
      box-shadow: #000 -50px -50px 0px 0px, #000 50px 50px 0px 0px;
    }
  }

  .three {
    &:before {
      box-shadow: #000 -50px 50px 0px 0px, #000 50px -50px 0px 0px;
    }
  }
  .four {
    &:before {
      background: transparent;
      box-shadow: #000 -50px 50px 0px 0px, #000 -50px -50px 0px 0px,
        #000 50px 50px 0px 0px, #000 50px -50px 0px 0px;
    }
  }

  .five {
    &:before {
      box-shadow: #000 -50px -50px 0px 0px, #000 -50px 50px 0px 0px,
        #000 50px -50px 0px 0px, #000 50px 50px 0px 0px;
    }
  }

  .six {
    &:before {
      display: none;
      background: transparent;
      box-shadow: #000 -50px -50px 0px 0px, #000 -50px 0px 0px 0px,
        #000 -50px 50px 0px 0px, #000 50px -50px 0px 0px, #000 50px 0px 0px 0px,
        #000 50px 50px 0px 0px;
    }
  }

  .dice {
    transform-style: preserve-3d;
    transform: rotateY(185deg) rotateX(150deg) rotateZ(315deg);
  }

  .one {
    transform: translateZ(100px);
    &::before {
      display: none;
    }
  }

  .six {
    transform: translateZ(-100px);
  }

  .two {
    transform: translateX(-100px) rotateY(-90deg);
    &::before {
      display: none;
    }
  }

  .five {
    transform: translateX(100px) rotateY(90deg);
  }
  .three {
    transform: translateY(100px) rotateX(90deg);
    &::before {
      display: none;
    }
  }
  .four {
    transform: translateY(-100px) rotateX(90deg);
  }
  @keyframes spin {
    0% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); /* Start position */
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); /* End position */
    }
  }
  .dice {
    animation: spin 2s linear infinite;
  }
`;

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
              isVisible ? "bg-white" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
    );
  };
  return (
    <DiceStyle
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      onClick={handleDiceRoll}
    >
      {/* <div className="h-36 w-36 bg-white rounded-xl shadow-xl transform rotate-3 flex justify-center p-4 hover:scale-150 transition duration-700 hover:rotate-45 hover:shadow-2xl">
        {diceValue ? renderDots() : <p>Roll the dice</p>}
      </div> */}
      <div class="dice">
        <div class="side one">
          {diceValue ? renderDots() : <p>Roll the dice</p>}
        </div>
        <div class="side two"></div>
        <div class="side three"></div>
        <div class="side four"></div>
        <div class="side five"></div>
        <div class="side six"></div>
      </div>
    </DiceStyle>
  );
};

export default Dice;
