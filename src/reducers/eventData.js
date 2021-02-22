import {
    ADD_EVENT_ITEM
} from "../constants/constants.js";

var initialEventData = [];

const eventData = (state = initialEventData, action) => {
    switch(action.type) {
        case ADD_EVENT_ITEM:
            var stateCopy = [];
            stateCopy = state.slice();
            stateCopy.push(action.item);
            return stateCopy;
        
        default:
            return state;
    }
};

export default eventData;