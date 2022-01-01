import React from "react";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-row justify-content-between align-items-center mt-4">
          <div>
            <NavLink to="/">
              <Logo color="#FF6060" />
            </NavLink>
          </div>
          <div className="navItems">
            <ul className="nav">
              <li className="navItem">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    if (isActive) {
                      return `${styles.NavLink} ${styles.Active}`;
                    } else {
                      return `${styles.NavLink}`;
                    }
                  }}
                  aria-current="page"
                >
                  Accueil
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink
                  to="/AboutUs"
                  className={({ isActive }) => {
                    if (isActive) {
                      return `${styles.NavLink} ${styles.Active}`;
                    } else {
                      return `${styles.NavLink}`;
                    }
                  }}
                >
                  A Propos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
