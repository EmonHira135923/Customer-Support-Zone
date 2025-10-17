import "./App.css";
import { ToastContainer } from "react-toastify";
import FooterSection from "./Componnets/FooterComponnets/FooterSection";
import NavVar from "./Componnets/NavVarComponnets/NavVar";

function App() {
  return (
    <>
      <NavVar></NavVar>
      <FooterSection></FooterSection>
      <ToastContainer />
    </>
  );
}

export default App;
