import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PhoneChart from "./components/PhoneChart/PhoneChart";
import PriceList from "./components/PriceList/PriceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneChart></PhoneChart>
    </div>
  );
}

export default App;
