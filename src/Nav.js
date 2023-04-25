import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {dogs.map((dog, i) => (
        <li key={i}>
          <Link to={`/dogs/${dog}`}>{dog}</Link>
        </li>
      ))}
    </ul>
  );
}
// end

export default Nav;
