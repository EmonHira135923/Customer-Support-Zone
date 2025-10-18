import React from "react";
import bgimage from "../../assets/vector1.png";

const SolvingCompontes = ({ selectedTickets, resolvetotal }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center p-10 mt-5 mb-5">
      {/* In-Progress Card */}
      <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold p-10 rounded-lg w-[650px] h-[250px] flex items-center justify-center shadow-lg mr-6">
        <div className="flex items-center justify-center gap-5 w-full">
          {/* Left Image — only LG */}
          <div className="w-full h-full hidden lg:block">
            <img src={bgimage} alt="vector1" className="w-[500px] h-[220px]" />
          </div>

          {/* Text */}
          <div className="text-center lg:text-center w-full">
            <h1 className="text-2xl font-bold">In-Progress</h1>
            <h5 className="text-2xl mt-2">{selectedTickets}</h5>
          </div>

          {/* Right Image — only LG */}
          <div className="w-full h-full hidden lg:block">
            <img
              src={bgimage}
              alt="vector1"
              className="rotate-180 w-[500px] h-[220px]"
            />
          </div>
        </div>
      </div>

      {/* Resolved Card */}
      <div className="bg-gradient-to-r from-[#54cf68] to-[#00827a] text-white font-semibold p-10 rounded-lg w-[650px] h-[250px] flex items-center justify-center shadow-lg">
        <div className="flex items-center justify-center gap-5 w-full">
          {/* Left Image — only LG */}
          <div className="w-full h-full hidden lg:block">
            <img src={bgimage} alt="vector1" className="w-[500px] h-[220px]" />
          </div>

          {/* Text */}
          <div className="text-center w-full">
            <h1 className="text-2xl font-bold">Resolved</h1>
            <h5 className="text-2xl mt-2">{resolvetotal}</h5>
          </div>

          {/* Right Image — only LG */}
          <div className="w-full h-full hidden lg:block">
            <img
              src={bgimage}
              alt="vector1"
              className="rotate-180 w-[500px] h-[220px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolvingCompontes;
