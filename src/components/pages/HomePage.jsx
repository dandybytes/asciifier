import React from "react";

import Title from "../common/Title";
import LinkButton from "../common/LinkButton";

import "./HomePage.scss";
import sampleRGBimage from "../../assets/img/example-rgb.jpg";
import sampleASCIIimage from "../../assets/img/example-ascii.png";
import ForwardIcon from "./../icons/ForwardIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

const HomePage = () => {
    return (
        <div className="home-page">
            <main>
                <div className="home-page-headline">
                    <Title text="Image Converter" center className="home-page-title"></Title>
                    <Title text="RGB to ASCII" center className="home-page-subtitle"></Title>
                </div>
                <div
                    className="home-page-demo-rgb"
                    style={{backgroundImage: `url(${sampleRGBimage})`}}
                >
                    <RightArrowIcon fill={"var(--mainColor)"} />
                </div>
                <div
                    className="home-page-demo-ascii"
                    style={{backgroundImage: `url(${sampleASCIIimage})`}}
                ></div>

                <div className="home-page-link-image">
                    <LinkButton destination="/image">
                        <span>Image Converter</span>
                        <ForwardIcon fill={"var(--darkColor)"} />
                    </LinkButton>
                </div>
                <div className="home-page-link-camera">
                    <LinkButton destination="/camera">
                        <span>Camera Converter</span>
                        <ForwardIcon fill={"var(--darkColor)"} />
                    </LinkButton>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
