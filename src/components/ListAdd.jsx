import React from "react"
//import { Prompt } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { PriorityEnum } from "../constants/constants.js";
import './css/App.css';


//---------------------------------------------------------------
// Implements the adding of a new list item functionality
//
//  The user can choose to Add the new item or Cancel their add.
//      Either way, the user will be redirected back to the list
//      page after the add or cancel.  
//----------------------------------------------------------------

class ListAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {title: "", description: "", priority: 0, return: false }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name + event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        if (this.isEmpty(this.state.title)) {
            alert("A title must be supplied before a task can be added.");
            return;
        }
        
        this.props.onAdd(this.state.title, this.state.description, this.state.priority);
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
                <h1>Add Life List Task</h1>

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
                
                <button id="add_item" className="m-right" onClick={this.handleSubmit}>Add</button>
                <button id="cancel" onClick={this.handleCancel}>Cancel</button>

                
            </div>

        )
    };
};

export default ListAdd;