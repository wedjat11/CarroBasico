"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Carrito() {
  const [isEmpty, setIsEmpty] = useState(true);
  function HaveArt() {
    if (!isEmpty) {
      return <div className="bg-red-500 rounded-full">hola</div>;
    } else {
      return <div className="bg-green-500 rounded-full">hola</div>;
    }
  }

  function changeState() {
    setIsEmpty(!isEmpty);
  }
  return (
    <div className="w-full flex ">
      <div className="p-2 ">
        <Link href="/" className="relative">
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR4nO2WMUvDQBSAv8Glrgq1o/gTnJw6uBiErAVBp3br0qVL/QHinxCc/AfZ7ZDNrbu2zgodCrVtUgJvCCEld9eXKMQPHhzv3t13eQdJoK6MgVjiHej8hjgGVsDZjlofmAIfMi7KG/Ms8vucuS6wTh0wGfck8vJW+LI4zOSHQJTpTCy5XflkjTGHwALYAE0qJpBT31Ut7ue0TiNei8SnJYk/TZ56UoL4yUT8WIL4xkTcVpZGwImJ+AD4VhS/YcGLovjBRnyrKL60ER9n3sGusQAaWBIqiAMcGCmIBy7iFjDfQ/oFHOHIhbT8x0K4lB+Mc1dpfbmWr8sM8BTqjJml7m+qUPf3xZ5smmx2pVD3D5WwBeO+OsI9EcatAAAAAElFTkSuQmCC"
            alt="shopping-cart--v2"
            width={40}
            height={40}
          ></Image>
          <div className="absolute top-9 left-5"> {HaveArt()}</div>
        </Link>
      </div>
      <div>
        <button
          className="bg-blue-500 rounded-full p-2 cursor-pointer"
          onClick={changeState}
        >
          change
        </button>
      </div>
    </div>
  );
}
