import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeConsumer } from "../contexts/theme";

const activeStyle = {
  color: "rgb(187, 46, 37)"
};

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                className={`nav--link nav--link__${theme}`}
                to="/"
                activeStyle={activeStyle}
                exact
              >
                Top
              </NavLink>
              <NavLink
                className={`nav--link nav--link__${theme}`}
                activeStyle={activeStyle}
                to="/new"
              >
                New
              </NavLink>
            </li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className="btn-clear"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🔦" : "💡"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
