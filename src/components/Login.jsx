import React from "react"
import { Prompt } from "react-router-dom";
import logo from "./img/todowhite.png";
import './css/App.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: "", password: "" };

        this.handleChange = this.handleChange.bind(this);
        //this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    /*
    handleLogin(event) {
        this.props.login( this.state.username, this.state.password);
        this.setState( { username: "", password: ""});
    }
    */

    render() {

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
                <button id="login_button" onClick={ () =>
                    this.props.onLogin(this.state.username)
                    }>
                    Log in
                </button>
            </div>
        )
    };
};

export default Login;