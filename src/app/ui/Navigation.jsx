import React from "react";
import Link from "next/link";
import Carrito from "./Carrito";

export default function Navigation({ carro, isVisble, handleClick }) {
  return (
    <nav className="w-ful relative py-3 shadow-xl">
      <ul className="flex justify-between items-center w-10/12 mx-auto">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/carrito">
            <Carrito
              carro={carro}
              isVisble={isVisble}
              handleClick={handleClick}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
