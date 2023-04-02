import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Product", path: "/product" },
    { id: 4, name: "Service", path: "/service" },
    { id: 5, name: "Login", path: "/login" },
  ];

  return (
    <div className="flex justify-between items-center px-4 lg:px-12  bg-violet-400 font-bold text-white">
      <h1 className="text-2xl ">PHero</h1>
      <ul
        className={`md:flex justify-between items-center gap-8 bg-violet-400 w-full md:w-[556px] duration-700 md:static absolute ${
          open ? "top-8 left-8" : "-top-80 left-8"
        }  `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <XMarkIcon className="h-6 w-6 text-gray-500" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-500" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
