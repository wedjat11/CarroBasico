"use client";
import React from "react";
import Productos from "./ui/Productos";

export default function Page() {
  const state = [
    {
      name: "tomate",
      price: 100,
      quantity: 1,
      img: "assets/tomate.jpg",
    },
    {
      name: "frijoles",
      price: 200,
      quantity: 1,
      img: "assets/arbejas.jpg",
    },
    {
      name: "lechuga",
      price: 50,
      quantity: 1,
      img: "assets/lechuga.jpg",
    },
  ];
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Productos
        addToCart={() => console.log("hola", state)}
        productos={state}
      />
    </div>
  );
}
