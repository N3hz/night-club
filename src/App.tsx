import "bulma/css/bulma.css";
import { AppRouter } from "./router/app-router";

export const App = () => {
  return (
    <div className="container" style={{ maxWidth: 800 }}>
      <AppRouter />
    </div>
  );
};
