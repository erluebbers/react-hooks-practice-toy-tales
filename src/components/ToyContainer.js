import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toys, handleFetch, setToys}) {

  const displayToys = toys.map(toy => {
    return <ToyCard toy={toy} key={toy.id} handleFetch={handleFetch} setToys={setToys}/>
  })

  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
