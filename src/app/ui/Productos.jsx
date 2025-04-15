import React from "react";
import Producto from "./Producto";

export default function Productos({ productos, addToCart }) {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-3 w-10/12 mx-auto   ">
        <h1 className="font-bold text-2xl text-center">Tienda</h1>
        <div className="flex gap-3 justify-center items-center">
          {productos.map((producto) => (
            <Producto
              producto={producto}
              key={producto.name}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}
