import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Principal from "../pages/Principal";
import Register from "../pages/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path= "/register" component = {Register}/>
        <Route exact path="/principal" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
