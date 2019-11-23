import React, {createContext, useState} from "react";

export const Context = createContext();

const ContextProvider = props => {
    let [uploadedImage, setUploadedImage] = useState(null);
    let [outputWidth, setOutputWidth] = useState(null);
    let [outputHeight, setOutputHeight] = useState(null);
    let [fontRatio, setFontRatio] = useState(null);
    let [grayscalePixelMap, setGrayscalePixelMap] = useState("");

    const maxSide = 100;
    const asciiCharPalette =
        "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

    return (
        <Context.Provider
            value={{
                maxSide,
                asciiCharPalette,
                uploadedImage,
                setUploadedImage,
                setOutputWidth,
                outputWidth,
                setOutputHeight,
                outputHeight,
                setFontRatio,
                fontRatio,
                setGrayscalePixelMap,
                grayscalePixelMap
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
