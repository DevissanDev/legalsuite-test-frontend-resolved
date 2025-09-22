// Parent.jsx
import React, { useState } from "react";
import { Filter, ActiveFilters } from "../../components";

export function Parent() {
  const [filters, setFilters] = useState({
    client: [],
    status: [],
    demandType: [],
  });

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handleRemove = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((v) => v !== value),
    }));
  };

  const handleClear = () => {
    setFilters({
      client: [],
      status: [],
      demandType: [],
    });
  };

  return (
    <div className="space-y-4">
      <Filter filters={filters} onApplyFilters={handleApplyFilters} />
      <ActiveFilters
        filters={filters}
        onRemove={handleRemove}
        onClear={handleClear}
      />
    </div>
  );
}
