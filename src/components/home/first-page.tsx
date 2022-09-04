import { Navbar } from "../navbar/navbar";
import { Updates } from "./updates";
import { Memes } from "./memes";
import { Staff } from "./staff";

export const FirstPage = () => {
  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="columns is-mobile is-centered">
            <img src={require("../../assets/logoSmall.png")} alt="a" />
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column d-mg-1">
          <Navbar />
        </div>
      </div>

      <div className="columns">
        <div className="column d-mg-1">
          <Updates />
        </div>
      </div>

      <div className="columns">
        <div className="column d-mg-1">
          <Memes />
        </div>
      </div>

      <div className="columns">
        <div className="column d-mg-1">
          <Staff />
        </div>
      </div>
    </>
  );
};
