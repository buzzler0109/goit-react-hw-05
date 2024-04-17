import { NavLink } from "react-router-dom";

import css from "./Navigation.module.scss";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.body}>
          <h1 className={css.title}>Movie search</h1>

          <nav className={css.nav}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/movies" className={buildLinkClass}>
              Movies
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
