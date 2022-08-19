import React from "react";
import { Navbar } from "../components/navbar/navbar";

export const ScreenHome = () => {
  return (
    <div className="columns">
      <div className="column">
        <Navbar />
        <div className="columns is-mobile is-centered">
          <div className="column is-half">
            <img src={require("../assets/logo.png")} style={{ width: 420 }} />
          </div>
        </div>
        <div className="columns">
          <p className="d-mg-2 text-justify">
            We offer professional SEO services that help websites increase their
            organic search score drastically in order to compete for the highest
            rankings.
          </p>
        </div>
      </div>
      <div className="column is-hidden-touch">
        <img src={require("../assets/Inicio.jpeg")} style={{ width: 500 }} />
      </div>
    </div>
  );
};
