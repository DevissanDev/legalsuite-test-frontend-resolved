import React from "react";

export function ActiveFilters({ filters, onRemove, onClear }) {
  const applied = Object.entries(filters)
    .filter(([_, value]) => value)
    .map(([key, value]) => ({ category: key, value }));

  if (applied.length === 0) return null;

  return (
    <div className="flex items-center justify-between px-2 py-1 bg-gray-50 rounded-md">
      <button
        onClick={onClear}
        className="px-3 py-1 text-sm font-medium text-red-600 whitespace-nowrap"
      >
        Limpiar filtros
      </button>

      <div className="flex gap-2 justify-end">
        {applied.map((item, idx) => (
          <span
            key={idx}
            style={{ backgroundColor: "#5A8126" }}
            className="flex items-center px-3 py-2 text-white rounded-2xl text-sm"
          >
            {item.value}
            <button
              onClick={() => onRemove(item.category, item.value)}
              className="ml-1 text-white font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
