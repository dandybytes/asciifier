import React, {useContext, useState, useRef, useEffect} from "react";
import {Context} from "../context/Context";
// import PropTypes from "prop-types";
// import "./Output.scss";
import {generateAsciiContent, mapPixelToCharacter} from "../utils/utils";

const Output = () => {
    // set the initial content of the output element to one character
    // to assess the height-to-width ratio of the currently used font
    let [content, setContent] = useState(" ");

    const {outputWidth, setFontRatio, asciiCharPalette, grayscalePixelMap} = useContext(Context);

    const outputRef = useRef(null);

    useEffect(() => {
        if (content === " ") {
            // get the height & width of the benchmark inline element to compute font size ratio
            const {width, height} = outputRef.current.getBoundingClientRect();
            setFontRatio(height / width);
        }
    }, []);

    useEffect(() => {
        if (grayscalePixelMap.length > 0) {
            const asciiCharMap = grayscalePixelMap.map(pixel =>
                mapPixelToCharacter(pixel, asciiCharPalette)
            );
            setContent(generateAsciiContent(asciiCharMap, outputWidth));
        }
    }, [grayscalePixelMap]);

    return (
        <pre
            ref={outputRef}
            style={{display: `${content === " " ? "inline" : "block"}`}}
            className="output"
        >
            {content}
        </pre>
    );
};

// Output.propTypes = {
//     uploadedImage: PropTypes.element.isRequired
// };

// Output.defaultProps = {};

export default Output;
