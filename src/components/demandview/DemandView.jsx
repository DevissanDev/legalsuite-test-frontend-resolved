import React from "react";
import { CDocument } from "../cdocument/CDocument";

export function DemandView({
  title,
  status,
  type,
  client,
  description,
  documents,
}) {
  return (
    <article className="flex flex-col max-w-120   h-[100vh]  bg-white p-6 justify-between  shadow-md box-border">
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-between gap-5">
          <h2 style={{ color: "#374E30" }} className="font-bold text-xl">
            {title}
          </h2>
          <img className="cursor-pointer" src="/images/close.svg" alt="" />
        </div>
        <div style={{ color: "#374E30" }} className="flex gap-3">
          <div
            style={{ backgroundColor: "#D2E5BD" }}
            className=" flex items-center px-3 py-0.5 rounded"
          >
            <p>{status}</p>
          </div>
          <div
            style={{ backgroundColor: "#D2E5BD" }}
            className="flex items-center px-3 py-0.5 rounded"
          >
            <p>{type}</p>
          </div>
        </div>
        <div>
          <p className="font-bold">
            Cliente: <span className="font-normal">{client}</span>
          </p>
        </div>
        <div>
          <p className=" leading-tight">{description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {Array.isArray(documents) &&
          documents.map((doc, idx) => (
            <CDocument key={doc.id || idx} title={doc.name} />
          ))}
      </div>
    </article>
  );
}
