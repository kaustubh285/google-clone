import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

function Results() {
  const [{ term }, dispatch] = useStateValue();

  const data = useGoogleSearch(term);

  console.log(data);

  return (
    <div className='search'>
      <h2>Results to be displayed here for: {term}</h2>
    </div>
  );
}

export default Results;
