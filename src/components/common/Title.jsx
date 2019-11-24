import React from "react";
import PropTypes from "prop-types";
import "./Title.scss";

const Title = ({text, center, uppercase, className}) => {
    const titleStyle = {};
    if (center) titleStyle.textAlign = "center";
    if (uppercase) titleStyle.textTransform = "uppercase";

    return (
        <h1 className={className} style={titleStyle}>
            {text}
        </h1>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
    center: PropTypes.bool,
    uppercase: PropTypes.bool
};

Title.defaultProps = {
    className: "title"
};

export default Title;
