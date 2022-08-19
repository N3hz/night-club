import React, { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const navClick = () => {
    setActive(!active);
  };

  const navClass = active ? "navbar-menu is-active" : "navbar-menu";

  return (
    <>
      <nav
        className="navbar is-black d-mg"
        role="navigation"
        aria-label="main navigation"
        style={{ backgroundColor: "black" }}
      >
        <div className="navbar-brand">
          <a className="navbar-item is-hidden-touch" href="">
            <b className="d-text-color" style={{ fontSize: 20 }}>
              Home
            </b>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={navClick}
            style={{ color: "#e4027a" }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={navClass}
          style={{ backgroundColor: "black" }}
        >
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <a
              className="navbar-item"
              style={{
                color: "#6bb6da",
                fontSize: 14,
                backgroundColor: "black",
              }}
            >
              Help
            </a>
            <a
              className="navbar-item"
              style={{
                color: "#6bb6da",
                fontSize: 14,
                backgroundColor: "black",
              }}
            >
              About Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
