import React from "react";
import Title from "./../common/Title";
import FileUpload from "./../FileUpload";
import Canvas from "./../Canvas";
import Output from "./../Output";
// import "./ImagePage.scss";

const ImagePage = () => {
    return (
        <div className="image-page">
            <Title text="Image page." center></Title>
            <h1>ASCII</h1>
            <FileUpload />
            <Canvas />
            <Output />
        </div>
    );
};

export default ImagePage;
