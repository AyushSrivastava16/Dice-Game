import React from "react";

const Rule = () => {
  return (
    <div className=" bg-red-200 p-4">
      <div className="text-xl font-semibold ">How to play dice game</div>
      <div className="grid place-content-center">
        <ul className="list-disc ml-4">
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </li>
          <li>if you get wrong guess then 2 point will be dedcuted </li>
        </ul>
      </div>
    </div>
  );
};

export default Rule;
