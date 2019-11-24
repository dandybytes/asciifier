import React, {useContext, useState, useRef} from "react";
import {Context} from "../context/Context";
import CustomButton from "./common/CustomButton";
import Title from "./common/Title";
import "./FileUpload.scss";

const FileUpload = () => {
    const {setUploadedImage} = useContext(Context);
    const [dropAreaHovered, setDropAreaHovered] = useState(false);

    const fileInputRef = useRef(null);

    const handleHover = event => {
        event.preventDefault();
        if (event.type === "dragover") setDropAreaHovered(true);
        if (event.type === "dragleave") setDropAreaHovered(false);
        if (event.type === "mouseleave") setDropAreaHovered(false);
    };

    const handleFileSelect = event => {
        event.preventDefault();
        setDropAreaHovered(false);
        let inputFile;

        try {
            // if file submitted via input
            if (event.target.files) {
                inputFile = event.target.files[0];
                // if file submitted via drag-and-drop
            } else if (event.dataTransfer) {
                inputFile = event.dataTransfer.files[0];
            }

            const fileReader = new FileReader();
            fileReader.onload = event => {
                const image = new Image();
                image.onload = () => {
                    setUploadedImage(image);
                };
                image.src = event.target.result;
            };

            fileReader.readAsDataURL(inputFile);
        } catch (error) {
            console.error("ERROR: file upload failed: ", error);
        }
    };

    return (
        <>
            <Title text="Upload an image to convert to ASCII" center></Title>
            <form className="file-upload" id="upload" action="#" method="get">
                <div
                    className={`file-upload-drop-area${dropAreaHovered ? " hovered" : ""}`}
                    onDrop={handleFileSelect}
                    onDragOver={handleHover}
                    onDragLeave={handleHover}
                >
                    drag and drop an image here
                </div>
                <div>
                    <CustomButton onClick={() => fileInputRef.current.click()}>
                        Browse Files
                    </CustomButton>
                    <input
                        ref={fileInputRef}
                        className="file-upload-input"
                        type="file"
                        onChange={handleFileSelect}
                        style={{display: "none"}}
                    />
                </div>
            </form>
        </>
    );
};

export default FileUpload;
