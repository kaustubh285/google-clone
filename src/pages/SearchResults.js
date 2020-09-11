import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

function SearchResults() {
  const [{ term }, dispatch] = useStateValue();
  const [items, setItems] = useState();

  const Bdata = useGoogleSearch(term);
  useEffect(() => {
    setItems(Bdata.items);
  }, []);

  return (
    <div>
      <p>We will search for</p>
      {term}

      {/* <div>{data.items.map((item) => "hello")}</div> */}
    </div>
  );
}

export default SearchResults;
