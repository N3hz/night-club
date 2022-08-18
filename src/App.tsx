import "bulma/css/bulma.css";
import { Navbar } from "./components/navbar/navbar";
import { AppRouter } from "./router/app-router";

export const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};
