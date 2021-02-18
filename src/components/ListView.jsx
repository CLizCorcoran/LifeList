import React from "react"
import { Prompt } from "react-router-dom";
import './css/App.css';

class ListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.user == "") {
            return(
                <div className="contact">
                    <h1>Life List</h1>
                    <h2>Log in to start organizing your life today!</h2>
                </div>
            )
        }

        return (
            <div className="contact">
                <h1>Welcome {this.props.user}!</h1>
            </div>
        )
    };
};

export default ListView;