import React from "react";

import Carrito from "./Carrito";

export default function Navigation() {
  return (
    <div className="w-full  bg-gray-400">
      <nav className="p-2 w-full  flex justify-end">
        <Carrito />
      </nav>
    </div>
  );
}
