import axios from "axios";

async function getDogs() {
  const response = await axios.get("http://localhost:5001/dogs");
  const data = response.data;
  return data;
}

export { getDogs };
