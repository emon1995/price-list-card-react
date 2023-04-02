import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div className="my-12 mx-4 md:mx-12">
      <h1 className="text-5xl font-extrabold text-center bg-violet-400 py-3">
        Awesome Affordable Prices
      </h1>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {prices.map((price) => (
          <Card key={price.id} price={price}></Card>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
