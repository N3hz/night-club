import React from "react";
import { Navbar } from "../navbar/navbar";

export const FirstPage = () => {
  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="columns is-mobile is-centered">
            <img src={require("../../assets/logo.png")} />
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <Navbar />
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <Navbar />
        </div>
      </div>
    </>
  );
};
