import { connect } from "react-redux";
import ListView from "../components/ListView.jsx";

const mapStateToProps = state => {
    return {
        username: state.userData,
        items: state.eventData
    };
};

const ListViewContainer = connect(mapStateToProps, null)(ListView);

export default ListViewContainer;