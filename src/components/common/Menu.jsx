import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
    let [menuClosed, setMenuClosed] = useState(true);

    const toggleMenuClosed = () => setMenuClosed(previousValue => !previousValue);

    return (
        <div className={`menu${menuClosed ? " closed" : " open"}`} onClick={toggleMenuClosed}>
            <div className="menu-btn">
                <span className="menu-icon">&nbsp;</span>
            </div>
            <div className="menu-bg"></div>
            <nav className="menu-nav">
                <ul className="menu-ul">
                    <li className="menu-li">
                        <NavLink
                            to="/"
                            exact
                            className="menu-link"
                            activeClassName="menu-link-active"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink
                            to="/image"
                            className="menu-link"
                            activeClassName="menu-link-active"
                        >
                            Image Converter
                        </NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink
                            to="/camera"
                            className="menu-link"
                            activeClassName="menu-link-active"
                        >
                            Camera Converter
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
