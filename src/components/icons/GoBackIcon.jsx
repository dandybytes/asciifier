import React from "react";
import PropTypes from "prop-types";

const GoBackIcon = ({size, fill, stroke}) => {
    return (
        <svg
            className="icon cart-icon"
            height={size}
            width={size}
            fill={fill}
            // x="0px"
            // y="0px"
            viewBox="0 0 512 512"
        >
            <path
                d="M6.37,210.53L227.077,84.807c8.752-5.258,19.894,1.047,19.894,11.257v52.654
                c3.463,0.511,6.924,1.028,10.386,1.545c28.818,4.083,57.729,11.476,85.041,21.488c48.31,17.709,93.336,46.682,124.516,88.151
                c32.446,43.152,47.924,98.377,44.658,152.125c-0.003,0.055-0.007,0.11-0.01,0.167c-0.618,9.756-8.924,17.236-18.692,16.882
                c-0.206-0.007-0.41-0.015-0.614-0.023c-8.029-0.29-14.941-5.83-16.884-13.626c-0.035-0.143-0.068-0.274-0.099-0.39
                c-5.501-21.106-14.507-41.418-26.846-59.42c-21.002-30.641-51.981-51.928-87.972-60.952c-36.335-9.111-73.532-6.725-110.068-0.4
                c-2.229,0.386-3.417,0.591-3.417,0.591v52.654c0,10.21-11.142,16.515-19.894,11.256L6.37,233.043
                C-2.123,227.942-2.123,215.632,6.37,210.53z"
            />
        </svg>
    );
};

GoBackIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object
};

GoBackIcon.defaultProps = {
    // color: "white",
    // size: "20"
};

export default GoBackIcon;