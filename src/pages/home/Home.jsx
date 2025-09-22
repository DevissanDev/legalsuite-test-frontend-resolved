import React, { useState } from "react";
import "./home.css";
import {
  UseCard,
  Demand,
  Filter,
  ActiveFilters,
  SearchBar,
} from "../../components";
import { useFetch } from "../../hooks/UseFetch";

const nameuser = "Frank Grimes";
const roleuser = "Administrador";
const imageuser = "/images/usecard.png";

export function Home() {
  const [filters, setFilters] = useState({
    client: "",
    status: "",
    demandType: "",
  });

  const [search, setSearch] = useState("");

  const query = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) query.append(key, value);
  });
  const url = `http://localhost:3001/demands${
    query.toString() ? `?${query}` : ""
  }`;

  const { data: demands, loading, error } = useFetch(url);

  // búsqueda frontend
  const filteredDemands = demands?.filter((d) => {
    const q = search.toLowerCase();
    return (
      d.name.toLowerCase().includes(q) ||
      d.client.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q)
    );
  });

  const handleRemoveFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : prev[category],
    }));
  };

  const handleClearFilters = () => {
    setFilters({ client: "", status: "", demandType: "" });
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
        <div className="flex items-center gap-4">
          <SearchBar search={search} setSearch={setSearch} />
          <Filter filters={filters} setFilters={setFilters} />
        </div>

        {/* Filtros activos */}
        <ActiveFilters
          filters={filters}
          onRemove={handleRemoveFilter}
          onClear={handleClearFilters}
        />

        {/* Lista de demandas */}
        <div>
          {loading && <p>Cargando demandas...</p>}
          {error && <p>Error: {error}</p>}
          {filteredDemands && (
            <div
              className={`grid gap-4 w-full ${
                filteredDemands.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {filteredDemands.map((demand) => (
                <div key={demand.id} className="w-full">
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
