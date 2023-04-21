import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetch = new AbortController();

    fetch(url, { signal: abortFetch.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not find the movies data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => abortFetch.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
