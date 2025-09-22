import React, { useRef, useEffect } from "react";
import { DemandView } from "../../components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export function Demand({
  title,
  status,
  type,
  client,
  description,
  documents,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const demandRef = useRef(null);

  const toggleDemandView = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (demandRef.current && !demandRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <article
      onClick={toggleDemandView}
      className="flex max-w-150 flex-col w-full h-full min-w-70  gap-3 bg-white p-6  rounded-xl shadow-md box-border cursor-pointer"
      ref={demandRef}
    >
      <div className="flex justify-between gap-5 ">
        <h2 style={{ color: "#374E30" }} className="font-bold text-xl">
          {title}
        </h2>
        <img
          src="/images/eye.svg"
          alt=""
          style={{
            filter: isOpen
              ? "invert(50%) sepia(100%) saturate(500%) hue-rotate(90deg)"
              : "none",
            width: "24px",
          }}
        />
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 top-0 z-30"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <DemandView
              title={title}
              status={status}
              type={type}
              client={client}
              description={description}
              documents={documents}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
