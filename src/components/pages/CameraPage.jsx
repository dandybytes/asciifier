import React from "react";
import Title from "./../common/Title";
import LinkButton from "../common/LinkButton";
import GoBackIcon from "../icons/GoBackIcon";
import Benchmark from "../Benchmark";
import "./CameraPage.scss";

const CameraPage = () => {
    return (
        <div className="camera-page">
            <Benchmark />
            <Title text="camera converter - coming up soon" center></Title>
            <LinkButton destination="/">
                <GoBackIcon size={15} fill={"var(--darkColor)"} />
                <span>Home Page</span>
            </LinkButton>
        </div>
    );
};

export default CameraPage;
