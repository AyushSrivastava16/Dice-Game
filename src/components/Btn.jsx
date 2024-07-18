import React from "react";

const Btn = ({ label, classname, isBlack, activity }) => {
  return (
    <div>
      <button
        className={`w-[220px] text-base font-semibold ${classname} ${
          isBlack
            ? "text-white bg-black border-2 border-black hover:bg-white hover:border-gray-400 hover:text-black hover:duration-100"
            : "text-black bg-white border-2 border-gray-400 hover:bg-black hover:text-white hover:border-black hover:duration-100"
        }`}
        onClick={activity}
      >
        {label}
      </button>
    </div>
  );
};

export default Btn;
