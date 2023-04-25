import React from "react";
import { Link } from "react-router-dom";

/** shows navigation menu
 *
 * Props: array of dog names [whisky, perry, duke]
 *
 * State: none
 *
 * App -> Nav
 */

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
