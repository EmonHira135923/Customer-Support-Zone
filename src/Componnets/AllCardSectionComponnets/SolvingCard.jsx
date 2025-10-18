import React from "react";

const SolvingCard = ({ resolve }) => {
  return (
    <div className="bg-indigo-100 p-2 rounded-lg">
      <h4 className="text-gray-700 font-medium text-lg">{resolve.title}</h4>
      <div className="flex items-center gap-2 p-2">
        <img
          className="w-5 h-5 rounded-2xl "
          src="https://i.ibb.co/r2NrZcGY/check-img.png"
        />
        <span className="text-green-700 text-[15px]">Completed</span>
      </div>
    </div>
  );
};

export default SolvingCard;
