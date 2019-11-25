import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Top
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
