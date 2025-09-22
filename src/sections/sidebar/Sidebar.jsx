import React from "react";
import "./sidebar.css";
import { ButtonIcon, Perfil } from "../../components";

export function Sidebar() {
  return (
    <div className="sidebar flex flex-col justify-between bg-primary p-2 h-full overflow-hidden">
      <div>
        <div className="mb-15">
          <img className="w-full" src="/images/logo2.svg" alt="Logo" />
        </div>
        <div className="flex flex-col gap-2 ">
          <ButtonIcon icon={"/images/dashboard.svg"} />
          <ButtonIcon icon={"/images/unifun.svg"} />
          <ButtonIcon icon={"/images/obligaciones.svg"} />
          <ButtonIcon icon={"/images/normatividad.svg"} />
          <ButtonIcon icon={"/images/calendar.svg"} />
          <ButtonIcon icon={"/images/reportes.svg"} />
          <ButtonIcon icon={"/images/admin.svg"} />
        </div>
      </div>
      <div className="flex flex-col justify-end items-center h-full gap-4">
        <div>
          <Perfil img={"/images/perfil.png"} />
        </div>
        <div className="cerrarsecionconteiner p-2 rounded-lg w-11 h-10 flex justify-center items-center">
          <div className="cerrarsecion flex justify-center p-1 rounded-lg w-7 h-7">
            <img src="/images/cerrarsecion.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
