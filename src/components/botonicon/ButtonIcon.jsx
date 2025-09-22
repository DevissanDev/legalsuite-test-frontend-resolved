import React from "react";
export function ButtonIcon({ icon }) {
  return (
    <div className="flex justify-center">
      <button className="flex justify-center rounded-xl hover:bg-green-100/50 h-11 w-11 items-center p-2 cursor-pointer">
        <img className="w-8" src={icon} alt="" />
      </button>
    </div>
  );
}
