import React from "react";

export function ActiveFilters({ filters, onRemove, onClear }) {
  // aplanamos los filtros {client:[], status:[], demandType:[]}
  const applied = Object.entries(filters).flatMap(([key, values]) =>
    values.map((val) => ({ category: key, value: val }))
  );

  if (applied.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 px-2 py-1 bg-gray-50 rounded-md">
      {/* Botón limpiar */}
      <button
        onClick={onClear}
        className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 whitespace-nowrap"
      >
        Limpiar filtros
      </button>

      {/* Etiquetas */}
      <div className="flex flex-wrap gap-2">
        {applied.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-md text-sm"
          >
            {item.value}
            <button
              onClick={() => onRemove(item.category, item.value)}
              className="ml-1 text-green-700 hover:text-green-900 font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
