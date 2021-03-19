import React from "react"
//import { Prompt } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { PriorityEnum } from "../constants/constants.js";
import './css/App.css';


//---------------------------------------------------------------
// Implements the modification of a given event list item.  
//  
//  The user will be presented with a form filled in with the
//  current values of the event.  The user is then capable of 
//  changing any of the values.  
//
//  The user can then choose to 'Save' their new values or 'Cancel'
//
//  Either way, they will then be redirected back to the event list.
//---------------------------------------------------------------
class Edit extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props);
        if (props.item === undefined)
            this.state = {title: "", description: "", priority: 0, return: false };
        else
            this.state = {title: props.item.title, description: props.item.description, priority: props.item.priority };
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        if (this.isEmpty(this.state.title)) {
            alert("An event must have a title.");
            return;
        }
        this.props.onEdit(this.props.id, this.state.title, this.state.description);
        this.setState({ title: "", description: "", priority: 0, return: true });
    }

    handleCancel() {
        this.setState({ title: "", description: "", priority: 0, return: true });
    }

    isEmpty(str) {
        if (! str || 0 === str.length || !str.trim())
            return true;

        return false;
    }

    render() {

        if (this.state.return)
            return <Redirect to="/list" />;

        
        return (
            <div className="contact">
                <h1>Edit Life List Task</h1>

                <div className="form-group">
                    <label >Title:</label>
                    <input className="form-control" type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label >Description:</label>
                    <textarea className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label >Priority:</label>
                    <select id="priority" className="form-control" name="priority" value={this.state.priority} onChange={this.handleChange} >
                    <option id="priority_none" value={PriorityEnum.none}>None</option>
                        <option id="priority_low" value={PriorityEnum.low}>Low</option>
                        <option id="priority_medium" value={PriorityEnum.medium}>Medium</option>
                        <option id="priority_high" value={PriorityEnum.high}>High</option>
                    </select>

                </div>
                
                <button id="update_item" className="m-right" onClick={this.handleSubmit}>Update</button>
                <button id="cancel" onClick={this.handleCancel}>Cancel</button>

                
            </div>

        )
    };
};

export default Edit;