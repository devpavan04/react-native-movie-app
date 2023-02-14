import { useState, useEffect } from 'react';

export const useAPI = (URL) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFromAPI = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setResults(data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFromAPI();
  }, [URL]);

  return { results, loading, error };
};
