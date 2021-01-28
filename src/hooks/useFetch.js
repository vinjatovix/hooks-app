import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true); //? esta referencia se usa en 04-useRef

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      setState({ data: null, loading: true, error: null });
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => {
            setState({
              loading: false,
              error: null,
              data,
            });
          }, 4000);
        });
    }
  }, [url]);
  return state;
};
