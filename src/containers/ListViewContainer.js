import { connect } from "react-redux";
import ListView from "../components/ListView.jsx";
import deleteEventItem from "../actions/deleteEventItem.js";

const mapStateToProps = state => {
    return {
        username: state.userData,
        items: state.eventData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deleteEventItem(id));
        }
    };
};

const ListViewContainer = connect(mapStateToProps, mapDispatchToProps)(ListView);

export default ListViewContainer;