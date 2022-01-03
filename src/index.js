import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import "./index.scss";
import ContextProvider from "./context/Context";

import App from "./App";

ReactDOM.render(
    <ContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </ContextProvider>,
    document.getElementById("root")
);

