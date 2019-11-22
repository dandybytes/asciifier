import React, {useContext, useRef, useEffect} from "react";
import {Context} from "../context/Context";
// import PropTypes from "prop-types";
import {mapImageDataToGrayscale} from "../utils/utils";

const Canvas = () => {
    const {uploadedImage, setGrayscalePixels, setImageWidth, setImageHeight} = useContext(Context);

    const canvasRef = useRef(null);

    useEffect(() => {
        if (uploadedImage !== null) {
            const width = uploadedImage.width;
            const height = uploadedImage.height;
            setImageWidth(width);
            setImageHeight(height);
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            const canvasContext = canvasRef.current.getContext("2d");
            canvasContext.drawImage(uploadedImage, 0, 0);
            const imageData = canvasContext.getImageData(0, 0, width, height);
            const grayscalePixelList = mapImageDataToGrayscale(imageData);
            canvasContext.putImageData(imageData, 0, 0);
            setGrayscalePixels(grayscalePixelList);
        }
    }, [uploadedImage]);

    return <canvas ref={canvasRef} className="canvas"></canvas>;
};

// Canvas.propTypes = {
//     uploadedImage: PropTypes.element.isRequired
// };

// Canvas.defaultProps = {};

export default Canvas;
