import React from "react";
import { useState } from "react";
import DiceNumber from "./DiceNumber";

import Btn from "./Btn.jsx";
import Rule from "./Rule.jsx";
const GamePage = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [error, setError] = useState(false);
  const [curr, setCurr] = useState(1);
  const [toggleRule, setToggleRule] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return (
    <>
      <div>
        <div className="flex flex-row items-center justify-around">
          <div className="flex flex-col text-2xl font-bold ml-[80px] mt-[60px]">
            <p className="text-center max-w-36 text-6xl mb-2">{score}</p>
            <h2 className="">Total Score</h2>
          </div>
          <div className="flex flex-col items-end mt-8">
            <div className="flex">
              <DiceNumber
                error={error}
                selectedNumber={selectedNumber}
                setError={setError}
                setSelectedNumber={setSelectedNumber}
              />
            </div>
            <p className="text-xl font-bold mt-4 ">Select Number</p>
          </div>
        </div>
        <div className="grid place-content-center ">
          <div className="flex flex-col gap-4 items-center ">
            <img
              src={`/src/images/dice_${curr}.png`}
              alt="dice 1"
              className="cursor-pointer mt-4"
              onClick={() => {
                if (selectedNumber) {
                  setError("");
                } else {
                  setError("Please Select a Number");
                  return;
                }
                console.log(error);
                let num = generateRandomNumber(1, 7);
                if (Number(selectedNumber) == Number(num)) {
                  setScore(score + num);
                } else {
                  setScore(score - 1);
                }

                setCurr(num);
                setSelectedNumber(undefined);
              }}
            />
            <p className="text-[22px] font-semibold">Click on Dice to Roll</p>
            <Btn
              label={"Reset Score"}
              classname={"w-[220px] h-[50px]"}
              activity={() => {
                setScore(0);
                setSelectedNumber(undefined);
              }}
            />
            <Btn
              label={`${toggleRule ? "Hide" : "Show"} Rules`}
              classname={"w-[220px] h-[50px]"}
              isBlack={true}
              activity={() => setToggleRule((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      <div className="mt-5 grid place-content-center p-2">
        {toggleRule ? <Rule /> : ""}
      </div>
    </>
  );
};

export default GamePage;
