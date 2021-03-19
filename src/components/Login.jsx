import React from "react"
import logo from "./img/todowhite.png";
import { Redirect } from "react-router-dom";
import './css/App.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: "", password: "", loggedIn: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    handleLogin(event) {
        if (this.isEmpty(this.state.username)) {
            alert("Username must be supplied.");
            return;
        }

        this.setState({ username: "", password: "", loggedIn: true });
        this.props.onLogin(this.state.username);

    }

    isEmpty(str) {
        if (! str || 0 === str.length || !str.trim())
            return true;

        return false;
    }


    render() {

        // If the user is already logged in, redirect them back to 
        //  the list.  
        if (this.state.loggedIn)
            return <Redirect to="/list" />;

        // If a user is already logged in, Welcome them and give them
        //  the ability to Sign Out.
        if (this.props.username !== "") {
            return (
                <div id="login">
                    <div id="login_header">
                        <img id="login_image" src={logo} alt="Life List" width="50px" />
                        <h1>Life List</h1>
                    </div>
                    <div className="form-group">
                        <h2>Welcome {this.props.username}!</h2>
                        <i className="fas fa-sign-out-alt" onClick={() => {
                            this.setState({ username: "", password: "", loggedIn: false });
                            this.props.onLogout();
                        }} />
                    Sign out
                </div>
                </div>
            )
        }

     
        return (

            <div id="login">
                <div id="login_header">
                    <img id="login_image" src={logo} alt="Life List" width="50px" />
                    <h1>Life List</h1>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <button id="login_button" onClick={this.handleLogin} >
                    Log in
                </button>
            </div>
        )
    };
};

export default Login;