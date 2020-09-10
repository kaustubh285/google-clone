import React, { useState, useEffect } from "react";
import API_KEY from "./keys";
import Response from "./response";

const CONTEXT_KEY = "41638c30146418c69";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(Response);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
