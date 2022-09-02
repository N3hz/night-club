import React, { useState } from "react";

export const Navbar = () => {
  return (
    <div className="d-mg-1">
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button
            className="button is-black"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Proyectos</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div
            className="dropdown-content"
            style={{ backgroundColor: "black" }}
          >
            <a href="#" className="dropdown-item">
              Rosas & Champaña
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
