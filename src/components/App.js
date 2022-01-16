import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleFetch() {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(data => setToys(data))
  }

  useEffect(handleFetch, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleFetch={handleFetch} setToys={setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleFetch={handleFetch} setToys={setToys} toys={toys}/>
    </>
  );
}

export default App;
