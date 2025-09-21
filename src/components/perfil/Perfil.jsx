import React from "react";

export function Perfil({ img }) {
  return (
    <div className="relative">
      <img src={img} alt="" />
      <img
        className="absolute bottom-0 right-0"
        src="/images/active.svg"
        alt="activo"
      />
    </div>
  );
}
