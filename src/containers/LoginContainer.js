import { connect } from "react-redux";
import Login from "../components/Login.jsx";
import loginUser from "../actions/loginUser.js";

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username) => {
            dispatch(loginUser(username));
        }
    };
};

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer;