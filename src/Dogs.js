import { useState } from "react";
import { Link } from "react-router-dom";
import { getDogs } from "./api";
import("./Dogs.css");

/** Shows all dogs on /dogs route
 *
 * Props: none
 *
 * State:
 * - dogs: [{dog1 info}, {dog2 info}, {dog3 info}...]
 * - dogsFound: boolean
 *
 * App -> RoutesList -> Dogs
 *
 */

function Dogs() {
  const [dogs, setDogs] = useState(null);
  const [dogsFound, setDogsFound] = useState(false);

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
          <img
            className="dogPic"
            src={`/${dog.src}.jpg`}
            alt={`${dog.name}`}
          ></img>
        </div>
      ))}
    </div>
  );
}

export default Dogs;
