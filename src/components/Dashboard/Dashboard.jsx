import React from "react";
import BarCharts from "../BarCharts/BarCharts";
import LineCharts from "../LineCharts/LineCharts";

const Dashboard = () => {
  return (
    <div className="md:flex justify-between items-center gap-4 md:mx-12 mx-4">
      <LineCharts></LineCharts>
      <BarCharts></BarCharts>
    </div>
  );
};

export default Dashboard;
