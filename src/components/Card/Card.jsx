import React from "react";
import Feature from "../Feature/Feature";

const Card = ({ price }) => {
  //   console.log(price.features);
  return (
    <div className="bg-indigo-300 p-4 rounded-md">
      <h1 className="text-center">
        <span className="text-5xl font-extrabold text-violet-700">
          {price.price}
        </span>
        <span className="text-2xl text-white font-extrabold ">/month</span>
      </h1>
      <h5 className="text-2xl font-bold text-center my-4">{price.name}</h5>
      <div>
        <h1 className="underline font-bold text-xl text-white">Features:</h1>
        <div>
          {price?.features.map((feature) => (
            <Feature key={feature} feature={feature}></Feature>
          ))}
        </div>
      </div>
      <button className="text-center w-full hover:bg-violet-600 bg-violet-400 rounded-md py-2 text-white font-bold my-4">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
