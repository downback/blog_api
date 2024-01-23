import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .them((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        setError(err);
      }).finally(() => {
        setLoading(false);
      })
  }, [url]);

  return {posts, loading, error};
};

export default useFetch;
