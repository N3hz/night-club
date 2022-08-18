import React, { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const navClick = () => {
    setActive(!active);
  };

  const navClass = active ? "navbar-menu is-active" : "navbar-menu";

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={navClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={navClass}>
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Documentation</a>
          </div>
        </div>
      </nav>
    </>
  );
};
