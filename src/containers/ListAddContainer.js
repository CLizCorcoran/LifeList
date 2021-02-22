import { connect } from "react-redux";
import ListAdd from "../components/ListAdd.jsx";
import addEventItem from "../actions/addEventItem.js";

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (title, description) => {
            dispatch(addEventItem(title, description));
        }
    };
};

// No state is given to the add page - it is empty by default.  
const ListAddContainer = connect(null, mapDispatchToProps)(ListAdd);

export default ListAddContainer;
