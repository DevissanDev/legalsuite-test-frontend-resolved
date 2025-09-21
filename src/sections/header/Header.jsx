import React from "react";
import { UseCard } from "../../components";
import "./header.css";

const imageuser = "/images/usecard.png";

export function Header() {
  return (
    <header className="header flex justify-between items-center p-4 z-[100]">
      <div className="flex gap-4 items-center pt-2 pb-2">
        <div>
          <img src="/images/desplegable.svg" alt="Menu" />
        </div>
        <div>
          <img src="/images/horizontallogo.svg" alt="Logo" />
        </div>
      </div>
      <div>
        <UseCard imageCard={imageuser} bgColor="white" />
      </div>
    </header>
  );
}
