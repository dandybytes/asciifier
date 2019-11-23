import React from "react";
import Title from "../common/Title";
import LinkButton from "../common/LinkButton";
import GoBackIcon from "../icons/GoBackIcon";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
    return (
        <div className="notfound-page">
            <Title text="We couldn't find the page you're looking for." center></Title>
            <LinkButton destination="/" inverted>
                <GoBackIcon size={15} fill="white" />
                <span>Home Page</span>
            </LinkButton>
        </div>
    );
};

export default NotFoundPage;
