import React from "react";

export function UseCard({ imageCard, bgColor, name, role }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="hidden md:block text-right">
        <p className="font-bold">{name}</p>
        <p className="text-sm">{role}</p>
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className=" flex justify-center w-15 p-2 rounded-xl overflow-hidden"
      >
        <img src={imageCard} alt="" />
      </div>
    </div>
  );
}
