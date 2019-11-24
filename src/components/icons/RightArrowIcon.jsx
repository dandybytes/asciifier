import React from "react";
import PropTypes from "prop-types";

const RightArrowIcon = ({size, fill, stroke}) => {
    return (
        <svg
            className="icon right-arrow-icon"
            height={size}
            width={size}
            fill={fill}
            viewBox="0 0 24 24"
        >
            <path d="M24 12l-12-8v5h-12v6h12v5z" />
        </svg>
    );
};

RightArrowIcon.propTypes = {
    fill: PropTypes.string,
    size: PropTypes.number,
    stroke: PropTypes.object
};

RightArrowIcon.defaultProps = {
    // color: "white",
    // size: "20"
};

export default RightArrowIcon;
