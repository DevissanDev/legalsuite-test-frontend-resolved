import React from "react";

export function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full max-w-md">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <img src="/images/search.svg" alt="Buscar" />
      </span>

      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          borderColor: "#5A8126",
          color: "#5A8126",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A8126] focus:border-[#5A8126]"
      />
    </div>
  );
}
