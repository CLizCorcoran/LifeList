import React from "react"
import { Link } from "react-router-dom";
import FilterContainer from "../containers/FilterContainer.js";
import { FiltersEnum } from "../constants/constants.js";
import './css/App.css';



const New = props => {

    return (
        <Link id="add_button" className="btn btn-primary" role="button" to="/list/add">+ Add</Link>
    )
}


const Edit = props => {
    var to = "/list/edit/" + props.id;
    return (
        <Link to={to}>
            <i className="fas fa-pen" />
        </Link>
    )
}

class ListView extends React.Component {

    render() {

        if (this.props.username === "") {
            return (
                <div className="contact">
                    <h1>Life List</h1>
                    <h2>Log in to start organizing your life today!</h2>
                </div>
            )
        };


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
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Title</th>
                                <th>Due Date</th>
                                <th>Priority</th>
                                <th>Completion Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.props.items.map((items, i) => {
                                var addItem = false;
                                let checkClass = "fas fa-check fa-2x";
 
                                if (items.complete && this.props.filter !== FiltersEnum.incomplete) {
                                    checkClass += " complete";
                                    addItem = true;
                                } 
                                else if (!items.complete && this.props.filter !== FiltersEnum.complete) {
                                    addItem = true;
                                }
                                    
                                if (addItem) 
                                    return (
                                        <tr key={items.id}>
                                            <td><i className="fas fa-trash-alt" onClick={ () => this.props.onDelete(items.id)}  /></td>
                                            <td><Edit id={items.id}/></td>
                                            <td><i className={checkClass} onClick={ () => this.props.onToggleComplete(items.id)}/></td>
                                            <td>{items.title}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    )

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