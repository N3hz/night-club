import "bulma/css/bulma.css";
import { AppRouter } from "./router/app-router";

export const App = () => {
  return (
    <div className="container is-max-desktop">
      <AppRouter />
    </div>
  );
};
