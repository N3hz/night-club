import "bulma/css/bulma.css";
import { Navbar } from "./components/navbar/navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="d-body"></div>
    </>
  );
};
