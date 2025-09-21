import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null); // lista de elementos
  const [loading, setLoading] = useState(true); // estado de carga
  const [error, setError] = useState(null); // error si ocurre

  useEffect(() => {
    if (!url) return;

    let isMounted = true; // evita actualizar estado si el componente se desmonta

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }

        const json = await res.json();
        if (isMounted) {
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Error desconocido");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // cleanup para desmontaje
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
