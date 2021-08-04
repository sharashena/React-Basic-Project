import { useState, useEffect } from "react";
const API_KEY = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = urlParams => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  // Fetch Data
  const fetchingData = async url => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData(`${API_KEY}${urlParams}`);
  }, [urlParams]);
  return { loading, error, data };
};
