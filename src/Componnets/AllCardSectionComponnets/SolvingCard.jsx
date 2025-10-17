import React from "react";

const SolvingCard = ({ resolve }) => {
  return (
    <div className="bg-indigo-100 p-2 rounded-lg">
      <h4 className="text-gray-700 font-medium text-sm">{resolve.title}</h4>
    </div>
  );
};

export default SolvingCard;
