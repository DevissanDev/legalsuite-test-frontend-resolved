import React from "react";

export function CDocument({ title }) {
  return (
    <div
      style={{ backgroundColor: "#D2E5BD" }}
      className="flex  w-full justify-between items-center py-2 px-3 rounded-lg"
    >
      <div className="flex gap-3 items-center">
        <img src="/images/document.svg" alt="" />
        <p className="">{title}</p>
      </div>
      <div>
        <img src="/images/discharge.svg" alt="" />
      </div>
    </div>
  );
}
