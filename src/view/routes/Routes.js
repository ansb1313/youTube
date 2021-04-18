import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Main from "../pages/Main/Main";
import Watch from "../pages/Watch";
import Search from "../pages/Search";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path={"/watch"} component={Watch} />
            <Route paht={"/results"} component={Search} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
