import { useEffect, useState } from "react";

export default function useAsync(handler, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const act = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await handler(...args);
      setData(response);
      setLoading(false);
      return response;
    } catch (err) {
      setError(error);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
