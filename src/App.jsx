import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
