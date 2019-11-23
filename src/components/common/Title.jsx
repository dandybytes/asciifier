import React from "react";
import PropTypes from "prop-types";
import "./Title.scss";

const Title = ({text, center, uppercase}) => {
    const titleStyle = {};
    if (center) titleStyle.textAlign = "center";
    if (uppercase) titleStyle.textTransform = "uppercase";

    return (
        <h1 className="title" style={titleStyle}>
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
    // text: ""
};

export default Title;
