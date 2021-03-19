import React from "react";
import { NavLink } from "react-router-dom";
import './css/App.css';

//---------------------------------------------------------------
// Helper component to render links in the NavBar
//---------------------------------------------------------------
const NavTab = props => {
    var activeStyle = {
        color: "#fff"
    };

    var navStyle = {
        margin: "10px",
        color: "rgba(255, 255, 255, 0.7)"
    };

    var names = "nav-link " + props.className;

    return (
        <NavLink className={names} style={navStyle} activeStyle={activeStyle} to={props.to}>
            {props.label}
        </NavLink>
    );
};

export default NavTab;