import React, {useContext, useRef, useEffect} from "react";
import {Context} from "../context/Context";
import {getCappedDimensions, mapImageDataToGrayscale} from "../utils/utils";

const Canvas = () => {
    const {
        uploadedImage,
        fontRatio,
        maxSide,
        setOutputWidth,
        setOutputHeight,
        setGrayscalePixelMap
    } = useContext(Context);

    const canvasRef = useRef(null);

    useEffect(() => {
        if (uploadedImage !== null) {
            const imageWidth = uploadedImage.width;
            const imageHeight = uploadedImage.height;
            const [outputWidth, outputHeight] = getCappedDimensions(
                imageWidth,
                imageHeight,
                fontRatio,
                maxSide
            );
            setOutputWidth(outputWidth);
            setOutputHeight(outputHeight);
            canvasRef.current.width = outputWidth;
            canvasRef.current.height = outputHeight;
            const canvasContext = canvasRef.current.getContext("2d");
            canvasContext.drawImage(uploadedImage, 0, 0, outputWidth, outputHeight);
            const imageData = canvasContext.getImageData(0, 0, outputWidth, outputHeight);
            const grayscalePixelList = mapImageDataToGrayscale(imageData);
            setGrayscalePixelMap(grayscalePixelList);
        }
    }, [uploadedImage, fontRatio, maxSide, setOutputWidth, setOutputHeight, setGrayscalePixelMap]);

    // the canvas is required only for image processing => display=none
    return <canvas ref={canvasRef} className="canvas" style={{display: "none"}}></canvas>;
};

export default Canvas;
