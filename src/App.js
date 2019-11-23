import React from "react";
import "./App.scss";
import FileUpload from "./components/FileUpload";
import Canvas from "./components/Canvas";
import Output from "./components/Output";

function App() {
    return (
        <div className="App">
            <h1>ASCII</h1>
            <FileUpload />
            <Canvas />
            <Output />
        </div>
    );
}

export default App;
