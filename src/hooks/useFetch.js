import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => setError("Error de conexión"))
      .finally(setLoading(false));
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
