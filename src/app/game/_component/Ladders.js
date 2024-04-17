import React from "react";
import { ladders } from "../config/ladders";

const Ladders = ({ tileNumber }) => {
  return (
    <>
      {Object.keys(ladders).map((ladder) => {
        if (
          tileNumber == ladders[ladder].from ||
          tileNumber == ladders[ladder].to
        ) {
          return (
            <span
              key={`${ladder}`}
              className="text-blue-100 text-center text-3xl font-bold"
            >
              {ladder}
            </span>
          );
        }
      })}
    </>
  );
};

export default Ladders;
