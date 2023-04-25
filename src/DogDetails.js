import { useParams, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { getDogs } from "./api";

/** Shows dog details
 *
 * Props: none
 *
 * State:
 * - dogs: [{dog1 info}, {dog2 info}, {dog3 info}...]
 * - dogsFound: boolean
 *
 * App -> RoutesList -> DogDetails
 *
 */

function DogDetails() {
  const [dogs, setDogs] = useState(null);
  const [dogsFound, setDogsFound] = useState(false);
  const { name } = useParams();
  console.log("dog details", dogs, dogsFound, name);

  async function getDogData() {
    const response = await getDogs(); //TODO: change name to dogs
    if (dogsFound !== true) {
      setDogs(response);
      setDogsFound(true);
    }
  }

  getDogData();

  //if not dog found return loading dog, return early
  let dogInfo;

  if (dogs) {
    dogInfo = dogs.filter((dog) => dog.name === name)[0];
    if (!dogInfo) {
      return (
        <Routes>
          <Route path="*" element={<Navigate to="/dogs" />} />;
        </Routes>
      );
    }
  }

  return (
    <div className="Dog">
      {dogsFound ? (
        <div className="dogInfo">
          <p>Name: {dogInfo.name}</p>
          <img
            className="dogPic"
            src={`/${dogInfo.src}.jpg`}
            alt={`${dogInfo.name}`}
          ></img>
        </div>
      ) : (
        <div>Loading Dog....</div>
      )}
    </div>
  );
}

export default DogDetails;
