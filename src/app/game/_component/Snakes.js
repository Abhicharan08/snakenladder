import React from "react";
import { snakes } from "../config/snake";

const Snakes = ({ tileNumber }) => {
  return (
    <>
      {Object.keys(snakes).map((snake) => {
        if (
          tileNumber == snakes[snake].from ||
          tileNumber == snakes[snake].to
        ) {
          return (
            <span
              key={`${snake}`}
              className="text-red-100 text-center text-3xl font-bold"
            >
              {snake}
            </span>
          );
        }
      })}
    </>
  );
};

export default Snakes;
