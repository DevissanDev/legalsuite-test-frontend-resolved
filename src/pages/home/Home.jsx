import React, { useState } from "react";
import "./home.css";
import { UseCard, Demand, Filter, ActiveFilters } from "../../components";
import { useFetch } from "../../hooks/UseFetch";

const nameuser = "Frank Grimes";
const roleuser = "Administrador";
const imageuser = "/images/usecard.png";

export function Home() {
  const [filters, setFilters] = useState({
    client: [],
    status: [],
    demandType: [],
  });

  // construir query
  const query = new URLSearchParams();
  Object.entries(filters).forEach(([key, values]) => {
    values.forEach((v) => query.append(key, v));
  });
  const url = `http://localhost:3001/demands${
    query.toString() ? `?${query}` : ""
  }`;

  const { data: demands, loading, error } = useFetch(url);

  const handleRemoveFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((v) => v !== value),
    }));
  };

  const handleClearFilters = () => {
    setFilters({ client: [], status: [], demandType: [] });
  };

  return (
    <div
      style={{ backgroundColor: "var(--primary-color)" }}
      className="h-screen overflow-hidden-x relative"
    >
      <div
        style={{ backgroundColor: "#F9F9F9" }}
        className="flex gap-4 flex-col content-center p-5 pt-14 h-screen rounded-none md:p-10 md:rounded-l-3xl overflow-x-hidden"
      >
        {/* Header */}
        <div className="flex justify-between mt-[50px] md:mt-0">
          <h1 className="text-3xl font-bold">Demandas activas</h1>
          <div className="hidden md:block">
            <UseCard
              role={roleuser}
              name={nameuser}
              imageCard={imageuser}
              bgColor="#7CAD39"
            />
          </div>
        </div>

        {/* Filtros */}
        <Filter
          selected={filters}
          setSelected={setFilters}
          onApplyFilters={setFilters}
        />

        {/* Filtros activos */}
        <div className="w-full h-auto">
          <ActiveFilters
            filters={filters}
            onRemove={handleRemoveFilter}
            onClear={handleClearFilters}
          />
        </div>

        {/* Lista de demandas */}
        <div>
          {loading && <p>Cargando demandas...</p>}
          {error && <p>Error: {error}</p>}
          {demands && (
            <div className="flex flex-wrap gap-4 w-full">
              {demands.map((demand) => (
                <div key={demand.id} className="flex-grow basis-64 max-w-sm">
                  <Demand
                    title={demand.name}
                    status={demand.status}
                    type={demand.demandType}
                    client={demand.client}
                    description={demand.description}
                    documents={demand.documents}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
