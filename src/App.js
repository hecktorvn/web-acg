import React, { Fragment } from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => (
    <Fragment>
        <GlobalStyle/>
        <Routes />
    </Fragment>
);

export default App;