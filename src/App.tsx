import "bulma/css/bulma.css";
import { AppRouter } from "./router/app-router";

export const App = () => {
  return (
    <div className="container">
      <AppRouter />
    </div>
  );
};
