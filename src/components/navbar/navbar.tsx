import React from "react";
import { Link } from "react-router-dom";
import { UseBD } from "../../bd/home/bd";

export const Navbar = () => {
  const { publications } = UseBD();

  return (
    <div>
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button
            className="button is-black"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            style={{ color: "#e4087e", backgroundColor: "black" }}
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
            {publications.map((x, index) => (
              <Link
                to="/read"
                className="dropdown-item"
                style={{ color: "#e4087e" }}
                key={index}
              >
                {x.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
