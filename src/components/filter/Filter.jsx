import React, { useState } from "react";
import { useFetch } from "../../hooks/UseFetch";
import "./filter.css";

export function Filter({ filters, setFilters }) {
  const [open, setOpen] = useState(false);

  // Categorías desplegables
  const [expanded, setExpanded] = useState({
    cliente: true,
    estado: false,
    tipo: false,
  });

  // APIs
  const { data: clients, loading: loadingClients } = useFetch(
    "http://localhost:3001/available_clients"
  );
  const { data: statuses, loading: loadingStatuses } = useFetch(
    "http://localhost:3001/available_statuses"
  );
  const { data: types, loading: loadingTypes } = useFetch(
    "http://localhost:3001/available_demand_types"
  );

  const toggleCategory = (category) => {
    setExpanded({ ...expanded, [category]: !expanded[category] });
  };

  const handleChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: prev[field] === value ? "" : value,
    }));
  };

  return (
    <div className="md:relative inline-block sm:w-72">
      {/* Botón abrir */}
      <button
        onClick={() => setOpen(!open)}
        style={{ borderColor: "#7CAD39", color: "#7CAD39" }}
        className="p-2 rounded-md border-2 flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-500 w-10 sm:w-12 h-12 justify-center md:w-70 md:h-auto md:justify-start"
      >
        <span className="flex items-center gap-2 whitespace-nowrap ">
          <img src="/images/filter.svg" alt="Filtro" className="w-5 h-5" />
          <span className="hidden md:inline">Filtrar Por</span>
        </span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Panel */}
      {open && (
        <div className="absolute md:top-12 md:left-0 md:bottom-auto md:w-72 w-full left-0 bottom-0 top-auto bg-white shadow-lg rounded-t-lg z-50 md:rounded-lg">
          <div className="divide-y divide-gray-200">
            {/* Cliente */}
            <div className="px-4 py-2">
              <div className="md:hidden text-xl font-bold mb-3">
                Filtrar Por
              </div>
              <button
                onClick={() => toggleCategory("cliente")}
                className="w-full flex justify-between items-center  font-medium hover:bg-gray-50"
              >
                Cliente
                <img
                  src="/images/dropdown.svg"
                  alt="Abrir"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    expanded.cliente ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {expanded.cliente && (
                <div className="px-6 pb-4 flex flex-col gap-2 max-h-40 overflow-y-auto scroll-thin ">
                  {loadingClients && <p>Cargando...</p>}
                  {clients?.map((client) => (
                    <label key={client.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-600 rounded-none"
                        checked={filters.client === client.name}
                        onChange={() => handleChange("client", client.name)}
                      />
                      {client.name}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Estado */}
            <div>
              <button
                onClick={() => toggleCategory("estado")}
                className="w-full flex justify-between items-center px-4 py-2 font-medium hover:bg-gray-50"
              >
                Estado
                <img
                  src="/images/dropdown.svg"
                  alt="Abrir"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    expanded.estado ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {expanded.estado && (
                <div className="px-6 pb-4 flex flex-col gap-2 max-h-40 overflow-y-auto">
                  {loadingStatuses && <p>Cargando...</p>}
                  {statuses?.map((status) => (
                    <label key={status.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-600 rounded-none"
                        checked={filters.status === status.name}
                        onChange={() => handleChange("status", status.name)}
                      />
                      {status.name}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Tipo */}
            <div>
              <button
                onClick={() => toggleCategory("tipo")}
                className="w-full flex justify-between items-center px-4 py-2 font-medium hover:bg-gray-50"
              >
                Tipo
                <img
                  src="/images/dropdown.svg"
                  alt="Abrir"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    expanded.tipo ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {expanded.tipo && (
                <div className="px-6 pb-4 flex flex-col gap-2 max-h-40 overflow-y-auto">
                  {loadingTypes && <p>Cargando...</p>}
                  {types?.map((type) => (
                    <label key={type.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-600 rounded-none"
                        checked={filters.demandType === type.name}
                        onChange={() => handleChange("demandType", type.name)}
                      />
                      {type.name}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Botón aplicar */}
          <div className="px-15 pb-5 pt-7 border-t border-gray-200 md:p-4">
            <button
              onClick={() => setOpen(false)}
              className="w-full py-2 text-white rounded-md transition box-border md:bg-[#7CAD39] bg-gray-400"
            >
              Aplicar filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
