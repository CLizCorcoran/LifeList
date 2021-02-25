import React from "react"
//import { Prompt } from "react-router-dom";
import { Redirect } from "react-router-dom";
import './css/App.css';

class ListAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {title: "", description: "", priority: "", return: false }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        this.props.onAdd(this.state.title, this.state.description);
        this.setState({ title: "", description: "", priority: "", return: true });
	}

    handleCancel() {
        this.setState({ title: "", description: "", priority: "", return: true });
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
                    <select id="priority" className="form-control" value={this.state.lname} onChange={this.handleChange} >
                        <option id="priority_none">None</option>
                        <option id="priority_low">Low</option>
                        <option id="priority_medium">Medium</option>
                        <option id="priority_high">High</option>
                    </select>

                </div>
                
                <button id="add_item" className="m-right" onClick={this.handleSubmit}>Add</button>
                <button id="cancel" onClick={this.handleCancel}>Cancel</button>

                
            </div>

        )
    };
};

export default ListAdd;