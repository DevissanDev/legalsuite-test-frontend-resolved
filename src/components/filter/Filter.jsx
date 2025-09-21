import React, { useState } from "react";
import { useFetch } from "../../hooks/UseFetch";

export function Filter({ selected, setSelected, onApplyFilters }) {
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
    setSelected((prev) => {
      const isSelected = prev[field].includes(value);
      return {
        ...prev,
        [field]: isSelected
          ? prev[field].filter((v) => v !== value)
          : [...prev[field], value],
      };
    });
  };

  const applyFilters = () => {
    onApplyFilters(selected);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Botón abrir */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md border-2 border-gray-300 flex items-center gap-2 bg-white hover:bg-gray-100 pr-10 text-gray-500"
      >
        <img src="/images/filter.svg" alt="Filtro" className="w-5 h-5" />
        <p>Filtrar Por</p>
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
        <div className="absolute top-12 left-0 w-72 bg-white shadow-lg rounded-lg z-50">
          <div className="divide-y divide-gray-200">
            {/* Cliente */}
            <div>
              <button
                onClick={() => toggleCategory("cliente")}
                className="w-full flex justify-between items-center px-4 py-2 font-medium hover:bg-gray-50"
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
                <div className="px-6 pb-4 flex flex-col gap-2 max-h-40 overflow-y-auto">
                  {loadingClients && <p>Cargando...</p>}
                  {clients?.map((client) => (
                    <label key={client.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-600 rounded-none"
                        checked={selected.client.includes(client.name)}
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
                        checked={selected.status.includes(status.name)}
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
                        checked={selected.demandType.includes(type.name)}
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
          <div className="p-4 border-t border-gray-200">
            <button
              style={{ backgroundColor: "#7CAD39" }}
              onClick={applyFilters}
              className="w-full py-2 text-white rounded-md hover:bg-green-700 transition"
            >
              Aplicar filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
