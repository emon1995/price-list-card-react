import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PhoneChart = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadData = data.data.data;
        const phoneData = loadData.map((phone) => {
          const part = phone.slug.split("-")[1];
          const price = parseInt(part);
          const phonePrice = {
            name: phone.phone_name,
            price: price,
          };
          return phonePrice;
        });
        setPhones(phoneData);
      });
  }, []);

  //   console.log(phones);

  return (
    <div className="md:mx-12 mx-4 my-12">
      <h1 className="text-5xl font-bold text-red-300 text-center">
        PhoneChart
      </h1>
      <ResponsiveContainer width={"99%"} height={300}>
        <ComposedChart
          width={500}
          height={400}
          data={phones}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PhoneChart;
