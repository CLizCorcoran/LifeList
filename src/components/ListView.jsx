import React from "react"
import { Link } from "react-router-dom";
import FilterContainer from "../containers/FilterContainer.js";
import { FiltersEnum, PriorityEnum } from "../constants/constants.js";
import './css/App.css';

//---------------------------------------------------------------
// Implementation of the ListView component - the component
//  responsible for the rendering and functionality of the 
//  list of events.  
//
// Helper components are also included in this file.
//      New - the Add button
//      Edit - the edit (pencil) button
//---------------------------------------------------------------


//---------------------------------------------------------------
// The "Add" button
//---------------------------------------------------------------
const New = props => {

    return (
        <Link id="add_button" className="btn btn-primary" role="button" to="/list/add">+ Add</Link>
    )
}


//---------------------------------------------------------------
// The Edit (pencil) button
//---------------------------------------------------------------
const Edit = props => {
    var to = "/list/edit/" + props.id;
    return (
        <Link to={to}>
            <i className="fas fa-pen" title="Modify this task" />
        </Link>
    )
}


//---------------------------------------------------------------
// ListView is responsible for the rendering and outermost
//  implementation of the event list items.  
//
// A user must be logged in to see their event items.  
//
// Each list item is composed of the following pieces:
//  A trash can for deletion.
//  A pencil button for editing the event.  
//  A checkmark button - if Complete, the button will appear green
//                       if Incomplete, the button will not appear 
//                          until the user hovers over the item.
//  The title of the event in slightly larger font; 
//      Below - the description of the event in slightly smaller font.  
//  The priority of the event item.  Internally, these are tracks as
//  enumerations.  Possible values are 
//      None, Low, Medium, High
//---------------------------------------------------------------
class ListView extends React.Component {

    render() {

        // If the user has not yet logged in, ask them to do so.
        if (this.props.username === "") {
            return (
                <div className="contact">
                    <h1>Life List</h1>
                    <h2>Log in to start organizing your life today!</h2>
                </div>
            )
        };



        // Otherwise, render the current list of event list items.  
        return (
            <div id="listview">
                <div id="filters">
                    <FilterContainer />

                </div>
                <div>

                </div>
                <div id="listtable">
                    <New />
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="icon_column"></th>
                                <th className="icon_column"></th>
                                <th className="icon_column"></th>
                                <th>Tasks</th>
                                <th>Priority</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.props.items.map((items, i) => {
                                var addItem = false;
                                let checkClass = "fas fa-check fa-2x";
                                let tooltip = "Mark this event complete";

                                if (items.complete && this.props.filter !== FiltersEnum.incomplete) {
                                    checkClass += " complete";
                                    tooltip = "Mark this event incomplete";
                                    addItem = true;
                                }
                                else if (!items.complete && this.props.filter !== FiltersEnum.complete) {
                                    addItem = true;
                                }

                                if (addItem) {

                                    let priority = "";
                                    switch (items.priority) {
                                        case PriorityEnum.low:
                                            priority = "low";
                                            break;
                                        case PriorityEnum.medium:
                                            priority = "Medium";
                                            break;
                                        case PriorityEnum.high:
                                            priority = "HIGH";
                                            break;
                                    }
                                    
                                    return (
                                        <tr key={items.id}>
                                            <td><i className="fas fa-trash-alt" title="Delete this task" onClick={() => this.props.onDelete(items.id)} /></td>
                                            <td><Edit id={items.id} /></td>
                                            <td><i className={checkClass} title={tooltip} onClick={() => this.props.onToggleComplete(items.id)} /></td>
                                            <td><h6>{items.title}</h6>{items.description}</td>
                                            <td>{priority}</td>
                                        </tr>
                                    )
                                }

                                // If item shouldn't be rendered, simply return null.
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )

    };
};

export default ListView;