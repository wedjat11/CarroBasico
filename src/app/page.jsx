"use client";
import React, { useState, useEffect } from "react";
import Productos from "./ui/Productos";
import Navigation from "./ui/Navigation";

export default function Page() {
  const [car, setCar] = useState([]);
  const [isVisble, setIsVisble] = useState(false);

  const productos = [
    {
      name: "tomate",
      price: 100,
      cantidad: 1,
      img: "assets/tomate.jpg",
    },
    {
      name: "frijoles",
      cantidad: 1,
      price: 200,
      img: "assets/arbejas.jpg",
    },
    {
      name: "lechuga",
      price: 50,
      cantidad: 1,
      img: "assets/lechuga.jpg",
    },
  ];
  function handleClick() {
    if (car.length === 0) {
      alert("No tienes nada en tu carrito");
      return;
    }
    setIsVisble(!isVisble);
  }

  function addToCart(producto) {
    setCar((prevCar) => {
      const index = prevCar.findIndex((p) => p.name === producto.name);
      if (index !== -1) {
        // Ya existe: aumentamos la cantidad (sin mutar)
        const updatedCar = [...prevCar];
        updatedCar[index] = {
          ...updatedCar[index],
          cantidad: updatedCar[index].cantidad + 1,
        };
        return updatedCar;
      } else {
        // No existe: agregamos nuevo producto (copiamos y evitamos mutación)
        return [...prevCar, { ...producto }];
      }
    });
  }

  return (
    <>
      <Navigation carro={car} isVisble={isVisble} handleClick={handleClick} />

      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <Productos addToCart={addToCart} productos={productos} />
      </div>
    </>
  );
}
