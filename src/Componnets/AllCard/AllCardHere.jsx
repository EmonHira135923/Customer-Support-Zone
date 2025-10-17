import React from "react";

const AllCardHere = ({ ticdata, handleticket }) => {
  return (
    <div
      onClick={() => handleticket(ticdata)}
      className="bg-white p-5 rounded-xl shadow-lg w-full flex flex-col justify-between"
    >
      <div className="flex justify-between items-center gap-3 mb-4">
        <h1 className="text-xl font-semibold">{ticdata.title}</h1>
        <div className="flex items-center gap-2 bg-[#b9f8cf] rounded-full px-4 py-2">
          <span className="w-2 h-2 bg-green-600 rounded-full inline-block"></span>
          <span className="text-green-600 font-medium ">{ticdata.status}</span>
        </div>
      </div>
      <p className="text-gray-600">{ticdata.description}</p>
      <div className="flex justify-between items-center mt-4 text-gray-700 text-sm">
        <div className="flex gap-4 items-center">
          <span>#{ticdata.id}</span>
          <span className="font-semibold text-red-600">{ticdata.priority}</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>{ticdata.customer}</span>
          <span>
            <i className="fa-solid fa-calendar-days"></i>
            {ticdata.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllCardHere;
