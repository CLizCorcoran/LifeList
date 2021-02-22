import { connect } from "react-redux";
import { ListView } from "../components/ListView.jsx";

const mapStateToProps = state => {
    return {
        items: state.eventData
    };
};

const ListViewContainer = connect(mapStateToProps, null)(ListView);

export default ListViewContainer;