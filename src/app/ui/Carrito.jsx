"use client";
import BubbleAlert from "./BubbleAlert";
import DetallesCarrito from "./DetallesCarro";

export default function Carrito({ carro, isVisble, handleClick }) {
  const cantidad = carro.reduce(
    (acum, producto) => acum + producto.cantidad,
    0
  );
  console.log("aca saco", carro);

  return (
    <>
      <span>{cantidad !== 0 ? <BubbleAlert n={cantidad} /> : ""}</span>
      <button
        type="button"
        className="cursor-pointer bg-green-500 rounded-md p-2 text-white "
        onClick={handleClick}
      >
        Carro
      </button>
      {isVisble ? <DetallesCarrito carro={carro} /> : null}
    </>
  );
}
