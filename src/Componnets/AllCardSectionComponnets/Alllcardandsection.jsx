import React, { use, useState } from "react";
import AllCardHere from "../AllCard/AllCardHere";
import ResolveCard from "./ResolveCard";
import SolvingCard from "./SolvingCard";

const Alllcardandsection = ({
  messagepromise,
  handleticket,
  Ticets,
  handleticketsolve,
  ResolveTicets,
  alldata,
}) => {
  const Ticketsdata = use(messagepromise);
  const [showResolved, setShowResolved] = useState(false);

  return (
    <section className="p-5 max-w-[1440px] mx-auto bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full">
          <h2 className="text-2xl lg:ml-7 p-3 font-bold text-gray-800 text-start">
            Customer Tickets
          </h2>

          <div className="hover:cursor-pointer md:p-8 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {alldata.map((ticdata) => (
              <AllCardHere
                handleticket={handleticket}
                key={ticdata.id}
                ticdata={ticdata}
              ></AllCardHere>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className=" lg:w-4/12 space-y-5 bg-gray-50">
          {/* Task Status  */}
          <div className="rounded-xl p-4 flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold text-gray-800">Task Status</h2>

            {Ticets.length === 0 ? (
              <p className="text-gray-500 text-[16px]">
                Select a ticket to add to Task Status card
              </p>
            ) : (
              Ticets.map((ticdata) => (
                <ResolveCard
                  key={ticdata.id}
                  ticdata={ticdata}
                  handleticketsolve={(Ticets) => {
                    handleticketsolve(Ticets);
                    setShowResolved(true);
                  }}
                ></ResolveCard>
              ))
            )}
          </div>

          {/* Resolved Task  */}
          {showResolved && (
            <div className="rounded-xl p-4 flex flex-col gap-4 ">
              <h2 className="text-xl font-bold text-gray-800">Resolved Task</h2>
              {ResolveTicets.length === 0 ? (
                <p className="text-gray-500 text-[16px]">
                  Select a ticket to add to Task Status card
                </p>
              ) : (
                <div className="bg-gray-50 p-3 rounded-lg space-y-2">
                  {ResolveTicets.map((resolve) => (
                    <SolvingCard
                      key={resolve.id}
                      resolve={resolve}
                    ></SolvingCard>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Alllcardandsection;
