import React from "react";

export default function Producto({ producto, addToCart }) {
  return (
    <div className="flex flex-col items-center justify-center border-gray-400 border p-4 rounded-lg w-1/3 shadow-2xl">
      <img src={producto.img} alt={producto.name} className="size-[90px]" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{producto.name}</h1>
        <p className="text-xl font-bold">${producto.price}</p>
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={() => addToCart(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
