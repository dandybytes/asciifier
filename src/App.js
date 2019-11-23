import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ImagePage from "./components/pages/ImagePage";
import CameraPage from "./components/pages/CameraPage";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/image" component={ImagePage} />
                <Route path="/camera" component={CameraPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </>
    );
}

export default App;
