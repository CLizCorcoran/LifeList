import React from "react";
import NavTab from "./NavTab.jsx";
import NavLoginContainer from "../containers/NavLoginContainer.js";
import logo from "./img/todoblue.png";

import './css/App.css';

const NavBar = () => {
    var style = {
        backgroundColor: "#008cba",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "0.825rem",
        fontWeight: "300",
        padding: "0.5rem 1rem"

    }

    var imgstyle = {
        paddingTop: "0.324219rem",
        verticalAlign: "bottom"
    }

    return (
        <div style={style}>
            <div className="container">
                <img src={logo} alt="Life List" style={imgstyle} width="22px"  />
                <NavTab className="life_list" to="/list" label="Life List" />
            </div>
            
            <div className="nav-bar">
                <div className="separator"></div>
                <NavTab to="/contact" label="Contact" />
                <NavLoginContainer to="/login" label="Login" />
            </div>

        </div>
    );
};

export default NavBar;