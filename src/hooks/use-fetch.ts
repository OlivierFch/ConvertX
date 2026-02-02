import { useState } from "react";

const useFetch = async <T>(url: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string | null>(null);

  try {
    setLoading(true);
    const response = await fetch(url);
    const reponseData = await response.json();

    setData(reponseData);
  } catch (err: unknown) {
    setError(`${err instanceof Error ? err.message : err}`);
  } finally {
    setLoading(false);
  }
  
  return { data, loading, error };
};

export { useFetch };
