import React, {useContext, useState} from "react";
import {Context} from "../context/Context";
import "./FileUpload.scss";

const FileUpload = () => {
    const {setUploadedImage} = useContext(Context);
    const [dropAreaHovered, setDropAreaHovered] = useState(false);

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
        <form className="file-upload" id="upload" action="#" method="get">
            <fieldset className="file-upload-fieldset">
                <div>
                    <label htmlFor="fileselect" className="file-upload-input-label">
                        Upload file:
                    </label>
                    <input
                        className="file-upload-input"
                        type="file"
                        id="fileselect"
                        name="fileselect[]"
                        // multiple="multiple"
                        onChange={handleFileSelect}
                    />
                </div>

                <div
                    className={`file-upload-drop-area${dropAreaHovered ? " hovered" : ""}`}
                    onDrop={handleFileSelect}
                    onDragOver={handleHover}
                    onDragLeave={handleHover}
                    // onMouseLeave={handleHover}
                >
                    ...or drag and drop file here
                </div>
            </fieldset>
        </form>
    );
};

export default FileUpload;
