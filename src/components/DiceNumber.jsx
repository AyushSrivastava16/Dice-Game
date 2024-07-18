import React from "react";

const DiceNumber = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    if (selectedNumber === value) {
      setSelectedNumber(null);
    } else {
      setSelectedNumber(value);
    }

    setError(" ");
  };
  return (
    <div className="flex flex-col">
      <p className="text-red-700 font-bold text-xl ml-4 mb-5">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <div
            className={` ml-4  text-xl font-bold  border-2 border-gray-400 shadow-2xl duration-100 w-[72px] h-[72px] ease-in delay-100 grid place-content-center cursor-pointer ${
              selectedNumber === value
                ? "bg-black text-white"
                : "text-black bg-white"
            }
            
            `}
            key={i}
            onClick={() => {
              numberSelectorHandler(value);
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiceNumber;

//
