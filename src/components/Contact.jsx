import React from "react"
import { Prompt } from "react-router-dom";
import { Redirect } from "react-router-dom";

import './css/App.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = { fname: "", lname: "", email: "", comments: "", return: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }

    isFormEmpty() {
        if (this.state.fname === "" && this.state.lname === "" && this.state.email === "" && this.state.comments === "" )
            return true;
        else
            return false;
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        this.setState({ fname: "", lname: "", email: "", comments: "", return: true });
    }

    handleCancel() {
        this.setState({ fname: "", lname: "", email: "", comments: "", return: true });
    }

    render() {

        if (this.state.return) 
            return <Redirect to="/list" />;
 

        return (
            <div className="contact">
                <h1>Contact Life List</h1>

                <div className="form-group">
                    <label for="fname">First Name:</label>
                    <input className="form-control" type="text" id="fname" name="fname" value={this.state.fname} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="lname">Last Name:</label>
                    <input className="form-control" type="text" id="lname" name="lname" value={this.state.lname} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input className="form-control" type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="comments">Comments:</label>
                    <textarea className="form-control" id="comments" name="comments" value={this.state.comments} onChange={this.handleChange} />
                </div>
                <button id="submit" className="m-right" onClick={this.handleSubmit}>Submit</button>
                <button id="cancel" onClick={this.handleCancel}>Cancel</button>

                <Prompt when={!this.isFormEmpty()} message="Are you sure you want to leave without sending a message?" />
            </div>
        )
    }
}

export default Contact;