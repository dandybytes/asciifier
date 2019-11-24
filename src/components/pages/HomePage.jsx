import React from "react";
import Title from "../common/Title";
import LinkButton from "../common/LinkButton";
import ForwardIcon from "./../icons/ForwardIcon";
import "./HomePage.scss";
import RightArrowIcon from "../icons/RightArrowIcon";

const HomePage = () => {
    return (
        <div className="home-page">
            <main>
                <div className="home-page-headline">
                    <Title text="Image Converter" center className="home-page-title"></Title>
                    <Title text="RGB to ASCII" center className="home-page-subtitle"></Title>
                </div>
                <div className="home-page-demo-rgb">
                    <RightArrowIcon fill={"var(--mainColor)"} />
                </div>
                <div className="home-page-demo-ascii"></div>
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
