import React from "react";

export default function BubbleAlert({ n }) {
  function getNumber(n) {
    if (!n) {
      return "";
    }
    return n > 9 ? "9+" : n;
  }
  return (
    <div className="relative">
      <div className="absolute top-5 -left-4 text-sm">
        <div className="bg-red-500 rounded-md py-1 px-2 text-white">
          {getNumber(n)}
        </div>
      </div>
    </div>
  );
}
