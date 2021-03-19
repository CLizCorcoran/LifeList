import { FILTER_EVENT_ITEMS, FiltersEnum } from "../constants/constants.js";

const filterValue = (state = FiltersEnum.all, action) => {
    switch (action.type) {
        case FILTER_EVENT_ITEMS:
            return action.filter;
        default:
            return state;
    }
};

export default filterValue;