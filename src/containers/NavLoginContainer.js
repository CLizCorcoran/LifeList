import { connect } from "react-redux";
import NavLogin from "../components/NavLogin.jsx";


const mapStateToProps = state => {
    return {
        username: state.userData,
    };
};


const NavLoginContainer = connect(mapStateToProps, null)(NavLogin);

export default NavLoginContainer;