import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="nav">
          <ul>
            <li>
              <NavLink className="nav--link" to="/" exact>
                Top
              </NavLink>
              <NavLink className="nav--link" to="/nav">
                New
              </NavLink>
            </li>
          </ul>
          <button onClick={toggleTheme}>
            {theme === 'light' ? 'light' : 'dark'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
