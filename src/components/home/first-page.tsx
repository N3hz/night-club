import { Navbar } from "../navbar/navbar";
import { Updates } from "./updates";
import { Memes } from "./memes";
import { UseBD } from "../../bd/home/bd";

export const FirstPage = () => {
  const { imageRoutes } = UseBD();
  const logoSmall = imageRoutes.filter((x) => x.id === 0)[0];

  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="columns is-mobile is-centered">
            <img src={logoSmall.route} alt={logoSmall.alt} />
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
    </>
  );
};
