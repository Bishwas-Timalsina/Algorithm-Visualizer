import React from "react";
import routes from "./config/routes";
import { useRoutes } from "react-router-dom";

const App = () => {
  const Routes = useRoutes(routes);
  return <div>{Routes}</div>;
};

export default App;
