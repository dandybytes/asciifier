import React, {useContext, useRef, useEffect} from "react";
import {Context} from "../context/Context";

const Benchmark = () => {
    let {setFontRatio} = useContext(Context);
    // set the initial content of the Benchmark element to one character
    // to assess the height-to-width ratio of the currently used font
    const BenchmarkRef = useRef(null);

    useEffect(() => {
        // get the height & width of the benchmark inline element to compute font size ratio
        const {width, height} = BenchmarkRef.current.getBoundingClientRect();
        setFontRatio(height / width);
    }, [setFontRatio]);

    return (
        <span
            ref={BenchmarkRef}
            className="benchmark"
            style={{position: "absolute", visibility: "hidden"}}
        >
            A
        </span>
    );
};

export default Benchmark;
