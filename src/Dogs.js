import axios from "axios";
import { useState } from "react";

async function getDogs() {
  const response = await axios.get("http://localhost:5001/dogs");
  const data = response.data;
  console.log("DATA", data);
  return data;
}

function Dogs() {
  const [dogs, setDogs] = useState(null);

  async function populateDogs() {
    const response = await getDogs();
    setDogs(response);
  }

  // return (
  //   <div className="Madlibs">
  //     {formFilled ? (
  //       <div className="MadlibsResult">
  //         <h1>Your Beautiful Creation!</h1>
  //         <MadLibsStory MadlibsText={template} WordsToAdd={filledWords} />
  //       </div>
  //     ) : (
  //       <div className="FormShowing">
  //         <Title />
  //         <MadlibsForm create={create} prompts={prompts} />
  //       </div>
  //     )}
  //   </div>
  // );

  populateDogs();
  return (
    <div>
      {dogs ? (
        <div>
          {dogs.map((dog) => (
            <p>{dog.name}</p>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Dogs;
