import { useParams } from "react-router-dom";
import { useState } from "react";
import { getDogs } from "./api";

function DogDetails() {
  const [dogs, setDogs] = useState(null);
  const [dogsFound, setDogsFound] = useState(false);
  const { name } = useParams();

  async function getDogData() {
    const response = await getDogs();
    if (dogsFound !== true) {
      setDogs(response);
      setDogsFound(true);
    }
  }

  getDogData();

  let dogInfo;

  if (dogs) {
    dogInfo = dogs.filter((dog) => dog.name === name)[0];
  }

  return (
    <div className="Dog">
      {dogsFound ? (
        <div className="dogInfo">
          <p>Name: {dogInfo.name}</p>
          <img className="dogPic" src={`/${dogInfo.src}.jpg`}></img>
        </div>
      ) : (
        <div>Loading Dog....</div>
      )}
    </div>
  );
}

export default DogDetails;
