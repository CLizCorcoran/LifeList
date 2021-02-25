import React from "react";
import { NavLink } from "react-router-dom";
import NavTab from "./NavTab.jsx";
import './css/App.css';

const NavLogin = props => {
    var activeStyle = {
        color: "#fff"
    };

    var navStyle = {
        marginRight: "10px",
        marginLeft: "20px",
        
        color: "rgba(255, 255, 255, 0.7)"
    };

    //var names = "nav-link " + props.className;
    var names = "nav-link ";

    if (props.username == "" ) {
        return (
            <NavTab to={props.to} label="Login" />
        )
    }

    return (
        <NavLink className={names} style={navStyle} activeStyle={activeStyle} to={props.to}>
            <i className="fas fa-user" />
        </NavLink>
    );
};

export default NavLogin;