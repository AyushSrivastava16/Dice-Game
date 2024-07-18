import React from "react";

const Home = ({ startGame }) => {
  return (
    <div className=" flex-col sm:flex-row sm:flex sm:mt-[180px] sm:mx-[129px] m-0 ">
      <h1 className="sm:hidden text-black bg-white font-extrabold py-4 text-center mb-6 text-6xl shadow-2xl min-w-1/2">
        Dice Game
      </h1>
      <div>
        <img
          src="\src\images\dices.png"
          height={"649px"}
          width={"522px"}
          className="flex sm:h-[522px] sm:w-[649px] justify-center mr-20"
          alt="Dice Image"
        />
      </div>
      <div className="font-extrabold text-[90px] hidden sm:block tracking-tighter ">
        <div className="flex justify-center items-center flex-col mt-24">
          DICE GAME
          <div className="hidden sm:block -mt-20">
            <button
              className="text-4xl hover:bg-white hover:text-black hover:border-2 border-2 border-white hover:border-gray-400 hover:duration-100 hover:delay-100 font-bold tracking-normal text-white bg-black px-6 py-4 rounded-lg mt-28 "
              onClick={startGame}
            >
              Play Now
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex justify-center mt-4">
        <button
          className="text-xl font-bold text-white bg-black px-4 py-2 rounded-md"
          onClick={startGame}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Home;
