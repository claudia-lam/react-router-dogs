import axios from "axios";

/** getDogs: makes a request to base URL for data
 *
 * output: [{dogName, dogAge, dogSrc, dogFacts},
 *          {dogName, dogAge, dogSrc, dogFacts},
 *          ...]
 *
 */

async function getDogs() {
  const response = await axios.get("http://localhost:5001/dogs");
  const data = response.data;
  return data;
}

export { getDogs };
