import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [url]);

  return {
    data,
  };
};
