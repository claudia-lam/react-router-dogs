import { useState } from "react";
import { getDogs } from "./api";
import { Link } from "react-router-dom";
import("./Dogs.css");

function Dogs() {
  const [dogs, setDogs] = useState(null);
  const [dogsFound, setDogsFound] = useState(false);

  // CALLING POPULATE DOGS TWICE
  async function populateDogs() {
    const response = await getDogs();
    setDogsFound(true);
    setDogs(response);
  }

  if (dogsFound !== true) {
    populateDogs();
    return <div>Loading pups......</div>;
  }

  return (
    <div className="Dogs">
      {dogs.map((dog, i) => (
        <div className="dog" key={i}>
          <p>
            <Link to={`/dogs/${dog.name}`}>Name: {dog.name}</Link>
          </p>
          <img className="dogPic" src={`${dog.src}.jpg`}></img>
        </div>
      ))}
    </div>
  );
}

export default Dogs;
