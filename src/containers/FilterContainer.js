import { connect } from "react-redux";
import Filter from "../components/Filter.jsx";
import filterEventItems from "../actions/filterEventItems.js";


const mapStateToProps = state => {
    return {
        filter: state.filterValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilter: (filter) => {
            dispatch(filterEventItems(filter));
        }
    };
};

const FilterContainer = connect(null, mapDispatchToProps)(Filter);

export default FilterContainer;