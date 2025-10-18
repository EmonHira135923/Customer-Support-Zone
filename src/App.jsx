import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import FooterSection from "./Componnets/FooterComponnets/FooterSection";
import NavVar from "./Componnets/NavVarComponnets/NavVar";
import { Suspense, useState, useEffect } from "react";

import SolvingCompontes from "./Componnets/CalculationCompontes/SolvingCompontes";
import Alllcardandsection from "./Componnets/AllCardSectionComponnets/Alllcardandsection";

const fetchData = async () => {
  const res = await fetch("/Tickets.json");
  return res.json();
};

const messagepromise = fetchData();

function App() {
  const [Ticets, setTicets] = useState([]);
  const [ResolveTicets, setResolveTicets] = useState([]);
  const [alldata, setalldata] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setalldata(data));
  }, []);

  const handleticket = (ticdata) => {
    const duplicate = Ticets.find((found) => found.id === ticdata.id);
    if (duplicate) {
      toast("This Ticket Already Added");
      return;
    }
    const Ticketsvalue = [...Ticets, ticdata];
    setTicets(Ticketsvalue);

    toast(
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10"
          src="https://i.ibb.co/r2NrZcGY/check-img.png"
        />
        <span>In Progress!!!</span>
      </div>
    );
  };

  const handleticketsolve = (ticdata) => {
    const newticket = [...ResolveTicets, ticdata];
    setResolveTicets(newticket);
    const remaining = Ticets.filter((resolve) => resolve.id !== ticdata.id);
    setTicets(remaining);
    const updatedAll = alldata.filter((item) => item.id !== ticdata.id);
    setalldata(updatedAll);
    toast(
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10"
          src="https://i.ibb.co/r2NrZcGY/check-img.png"
        />
        <span>Completed!!!</span>
      </div>
    );
  };

  return (
    <>
      <NavVar />
      <SolvingCompontes
        selectedTickets={Ticets.length}
        resolvetotal={ResolveTicets.length}
      ></SolvingCompontes>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-neutral"></span>
        }
      >
        <Alllcardandsection
          Ticets={Ticets}
          handleticket={handleticket}
          messagepromise={messagepromise}
          handleticketsolve={handleticketsolve}
          ResolveTicets={ResolveTicets}
          alldata={alldata}
        />
      </Suspense>
      <FooterSection />
      <ToastContainer />
    </>
  );
}

export default App;
