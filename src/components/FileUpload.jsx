import React from "react";
import PropTypes from "prop-types";
import "./FileUpload.scss";

const FileUpload = () => {
    const handleFileHover = event => {
        event.preventDefault();
        event.target.className =
            event.type === "dragover" ? "file-upload-drop-area hover" : "file-upload-drop-area";
    };

    const handleFileSelect = event => {
        handleFileHover(event);

        const inputFile = event.target.files[0] || event.dataTransfer.files[0];

        console.log("input file: ", inputFile);

        const fileReader = new FileReader();
        fileReader.onload = event => {
            const image = new Image();
            image.onload = () => {
                console.log("image width: ", image.width);
                console.log("image height: ", image.height);
            };
            image.src = event.target.result;
        };

        fileReader.readAsDataURL(inputFile);
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
                    className="file-upload-drop-area"
                    onDragOver={handleFileHover}
                    onDrop={handleFileSelect}
                >
                    ...or drag and drop file here
                </div>
            </fieldset>
        </form>
    );
};

FileUpload.propTypes = {};

FileUpload.defaultProps = {};

export default FileUpload;
