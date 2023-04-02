import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineCharts = () => {
  const data = [
    {
      id: 1,
      name: "Alice",
      math: 85,
      physics: 50,
      chemistry: 20,
    },
    {
      id: 2,
      name: "Bob",
      math: 70,
      physics: 45,
      chemistry: 55,
    },
    {
      id: 3,
      name: "Charlie",
      math: 90,
      physics: 85,
      chemistry: 95,
    },
    {
      id: 4,
      name: "David",
      math: 75,
      physics: 80,
      chemistry: 70,
    },
    {
      id: 5,
      name: "Eva",
      math: 80,
      physics: 90,
      chemistry: 85,
    },
    {
      id: 6,
      name: "Frank",
      math: 95,
      physics: 85,
      chemistry: 90,
    },
    {
      id: 7,
      name: "Grace",
      math: 85,
      physics: 95,
      chemistry: 80,
    },
    {
      id: 8,
      name: "Harry",
      math: 70,
      physics: 80,
      chemistry: 75,
    },
    {
      id: 9,
      name: "Isabel",
      math: 90,
      physics: 85,
      chemistry: 95,
    },
    {
      id: 10,
      name: "Jack",
      math: 80,
      physics: 75,
      chemistry: 85,
    },
  ];
  return (
    <ResponsiveContainer width={"99%"} height={300}>
      <LineChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Line dataKey="math" type="monotone" stroke="#8884d8" />
        <Line dataKey="physics" type="monotone" stroke="#8864d8" />
        <Line dataKey="chemistry" type="monotone" stroke="#888478" />
        <Tooltip />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
