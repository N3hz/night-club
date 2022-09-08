import React from "react";
import { useLocation } from "react-router-dom";

export const ScreenRead = () => {
  const search = useLocation().search;
  const idSelection = new URLSearchParams(search).get("q");

  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="columns is-mobile is-centered">
            <img src={require("../assets/logoSmall.png")} alt="a" />
          </div>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column d-mg-cover">
          <img src={require("../assets/covers/title_1.png")} alt="a" />
        </div>
        <div className="column d-mg-description">
          <div className="block">
            <strong style={{ color: "#e4087e", fontSize: 14 }}>Title: </strong>
            <span style={{ fontSize: 13 }}> Rosas y Champaña</span>
          </div>
          <div className="block" style={{ textAlign: "justify" }}>
            <strong style={{ color: "#e4087e", fontSize: 14 }}>
              Description:{" "}
            </strong>
            <span style={{ fontSize: 13 }}>
              Jung Lee-won, que trabaja como un abogado en Rusia, visita al
              concejal Zdanov (ver más)
            </span>
          </div>
          <div className="block">
            <strong style={{ color: "#e4087e", fontSize: 14 }}>Rating: </strong>
            <img
              style={{ width: 14 }}
              src={require("../assets/icons/yellowstar.ico")}
              alt=""
            />
            <img
              style={{ width: 14 }}
              src={require("../assets/icons/yellowstar.ico")}
              alt=""
            />
            <img
              style={{ width: 14 }}
              src={require("../assets/icons/yellowstar.ico")}
              alt=""
            />
            <img
              style={{ width: 14 }}
              src={require("../assets/icons/yellowstar.ico")}
              alt=""
            />
            <img
              style={{ width: 14 }}
              src={require("../assets/icons/yellowstar.ico")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column d-mg">
          <table className="table  is-fullwidth" style={{ fontSize: 12 }}>
            <thead>
              <tr>
                <th>Upload Date</th>
                <th>Chapter</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12-08-2022 13:22 PM</td>
                <td>Chapter 3.00</td>
                <td>
                  <img
                    style={{ width: 20 }}
                    src={require("../assets/icons/eye.png")}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>12-08-2022 13:22 PM</td>
                <td>Chapter 2.00</td>
                <td>
                  <img
                    style={{ width: 20 }}
                    src={require("../assets/icons/eye.png")}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>12-08-2022 13:22 PM</td>
                <td>Chapter 1.00</td>
                <td>
                  <img
                    style={{ width: 20 }}
                    src={require("../assets/icons/eye.png")}
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
