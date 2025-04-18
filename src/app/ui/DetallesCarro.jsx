import React from "react";

export default function DetallesCarrito({ carro }) {
  return (
    <div className="absolute bg-white mt-2 w-[300px] right-19 py-2 rounded-sm shadow-lg">
      <ul className="">
        {carro.map((producto) => (
          <li key={producto.name} className="px-5">
            <div className="flex justify-between items-center border-b-2 border-gray-200 py-1.5 hover:bg-gray-100 transition-colors duration-300">
              <img
                src={producto.img}
                alt={producto.name}
                className="size-[40px]"
              />
              <p>{producto.name}</p>
              <p>{producto.cantidad}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
