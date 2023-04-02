import React from "react";

const Link = ({ route }) => {
  return (
    <>
      <li className="hover:bg-violet-500 p-4">
        <a href={route.path}>{route.name}</a>
      </li>
    </>
  );
};

export default Link;
