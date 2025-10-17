import React from "react";

const ResolveCard = ({ ticdata, handleticketsolve }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow border border-gray-200 flex flex-col gap-2">
      <h3 className="text-gray-700 font-medium">{ticdata.title}</h3>
      <button
        onClick={() => handleticketsolve(ticdata)}
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
      >
        Complete
      </button>
    </div>
  );
};

export default ResolveCard;
