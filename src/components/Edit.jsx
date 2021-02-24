import React from "react"
//import { Prompt } from "react-router-dom";
import { Redirect } from "react-router-dom";
import './css/App.css';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props);
        if (props.item === undefined)
            this.state = {title: "", description: "", priority: "", return: false };
        else
            this.state = {title: props.item.title, description: props.item.description, priority: "" };
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        this.props.onEdit(this.props.id, this.state.title, this.state.description);
        this.setState({ title: "", description: "", priority: "", return: true });
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
                    <select id="priority" className="form-control" value={this.state.lname} onChange={this.handleChange} >
                        <option id="priority_none">None</option>
                        <option id="priority_low">Low</option>
                        <option id="priority_medium">Medium</option>
                        <option id="priority_high">High</option>
                    </select>

                </div>
                
                <button id="update_item" onClick={this.handleSubmit}>Update</button>

                
            </div>

        )
    };
};

export default Edit;