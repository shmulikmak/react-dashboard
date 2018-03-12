import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// containers
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import NotFound from "./containers/NotFound";

export default () =>
    (<BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Login {...props} />} />
            <Route path="/dashboard" exact render={props => <Dashboard {...props} />} />
            {/* { all other go to NotFound} */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>);