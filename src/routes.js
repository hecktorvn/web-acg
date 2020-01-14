import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

/**
 * IMPORTANDO AS PÁGINAS
 */
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Cap from "./pages/Cap";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={ props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ SignIn } />
            <Route path="/signup" component={ SignUp } />
            <PrivateRoute path="/app" component={ Cap } />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;