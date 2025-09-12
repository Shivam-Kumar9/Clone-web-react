import { useEffect, useState } from "react";

export default function useFetchProducts(URL) {
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const funFetch = async () => {
    try {
      let res = await fetch(URL);
      if (!res.ok) {
        throw new Error("some thing wrong in server");
      }
      let data = await res.json();
      setFetchData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    funFetch();
  }, [URL]);

  return { fetchData, loading, error };
}
