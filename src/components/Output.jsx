import React, {useContext, useState, useEffect} from "react";
import {Context} from "../context/Context";
import {generateAsciiContent, mapPixelToCharacter} from "../utils/utils";
import "./Output.scss";

const Output = () => {
    let [content, setContent] = useState("");
    let [fontSize, setFontSize] = useState(10);

    const {outputWidth, outputHeight, fontRatio, asciiCharPalette, grayscalePixelMap} = useContext(
        Context
    );

    useEffect(() => {
        if (grayscalePixelMap.length > 0) {
            const asciiCharMap = grayscalePixelMap.map(pixel =>
                mapPixelToCharacter(pixel, asciiCharPalette)
            );
            setContent(generateAsciiContent(asciiCharMap, outputWidth));
        } else {
            setContent("");
        }
    }, [grayscalePixelMap, asciiCharPalette, outputWidth]);

    useEffect(() => {
        if (outputWidth > 0 && outputHeight > 0) {
            if (outputWidth > outputHeight * fontRatio) {
                setFontSize((1.5 * window.innerWidth) / outputWidth);
            } else {
                setFontSize((1.1 * window.innerHeight) / (outputHeight * fontRatio));
            }
        }
    }, [outputWidth, outputHeight]);

    return (
        <div className="output">
            <pre className="output-content" style={{fontSize: `${fontSize}px`}}>
                {content}
            </pre>
        </div>
    );
};

export default Output;
