import React, {useContext, useState, useEffect} from "react";
import {Context} from "../context/Context";
import {generateAsciiContent, mapPixelToCharacter} from "../utils/utils";
import "./Output.scss";

const Output = () => {
    let [content, setContent] = useState("");

    const {outputWidth, asciiCharPalette, grayscalePixelMap} = useContext(Context);

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

    return <pre className="output">{content}</pre>;
};

export default Output;
