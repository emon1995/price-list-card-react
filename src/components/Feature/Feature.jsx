import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center gap-1 py-1">
      <CheckCircleIcon className="h-6 w-6 text-violet-500" />
      <h1 className="font-bold">{feature}</h1>
    </div>
  );
};

export default Feature;
