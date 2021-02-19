import React from "react"
import { BrowserRouter, Link, Prompt } from "react-router-dom";
import './css/App.css';



const Titles = props => {
    return (
        <table className="table table-hover">
            <tr>
                <th></th>
                <th>Title</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Completion Date</th>
            </tr>

        </table>
    )
}


const Filter = props => {
    return (
        <div id="filter_group" className="btn-group btn-group-toggle">
            <label className="btn btn-secondary btn_filter">
                <input type="radio" id="active" name="filter_items" autocomplete="off" />
            Active
            </label>
            <label className="btn btn-secondary btn_filter">
                <input type="radio" id="completed" name="filter_items" autocomplete="off" />
            Completed
            </label>
            <label className="btn btn-secondary btn_filter">
                <input type="radio" id="all" name="filter_items" autocomplete="off" />
            All
            </label>
        </div>


    );
}


const New = props => {

    return (
        
            <Link className="btn btn-primary" role="button" to="/list/add">Add</Link>
        
    )


    //return <button>+ New</button>
}

class ListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        if (this.props.user == "") {
            return (
                <div className="contact">
                    <h1>Life List</h1>
                    <h2>Log in to start organizing your life today!</h2>
                </div>
            )
        }

        return (
            <div id="listview">
                <div id="filters">
                    <Filter />

                </div>
                <div>
                    <New />
                </div>
                <div id="listtable">

                    <Titles />
                </div>
            </div>
        )

    };
};

export default ListView;