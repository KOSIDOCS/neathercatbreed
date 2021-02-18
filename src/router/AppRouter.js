import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import App from "../App";
import CatPage from "../components/CatPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={true} component={App} path="/" exact />
        <PrivateRoute component={CatPage} path="/profile" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
